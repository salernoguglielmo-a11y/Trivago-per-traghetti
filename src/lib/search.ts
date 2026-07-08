import { routes } from "@/data/routes";
import { departures } from "@/data/departures";
import { vendors } from "@/data/vendors";
import { priceProvider } from "./price-provider";
import { DepartureWithPrices, Route } from "./types";

export function findRoute(from: string, to: string): Route | undefined {
  const normalize = (s: string) => s.toLowerCase().trim();
  return routes.find(
    (r) =>
      normalize(r.portoPartenza).includes(normalize(from)) &&
      normalize(r.portoArrivo).includes(normalize(to))
  );
}

export function getRouteBySlug(slug: string): Route | undefined {
  return routes.find((r) => r.slug === slug);
}

export type Season = "estate" | "inverno";

export function getSeasonForDate(date: string): Season {
  const parsed = new Date(`${date}T12:00:00`);
  const month = isNaN(parsed.getTime())
    ? new Date().getMonth() + 1
    : parsed.getMonth() + 1;
  return month >= 6 && month <= 9 ? "estate" : "inverno";
}

export async function searchDepartures(
  from: string,
  to: string,
  date: string,
  pax: number
): Promise<DepartureWithPrices[]> {
  const route = findRoute(from, to);
  if (!route) return [];

  const season = getSeasonForDate(date);
  const routeDepartures = departures
    .filter(
      (d) =>
        d.routeId === route.id &&
        (d.stagionalita === "tutto_anno" || d.stagionalita === season)
    )
    .sort((a, b) => a.orario.localeCompare(b.orario));

  const results: DepartureWithPrices[] = [];

  for (const departure of routeDepartures) {
    const vendorPrices = await priceProvider.getPrices(
      departure,
      vendors,
      pax,
      date,
      route
    );
    results.push({ departure, route, vendorPrices });
  }

  return results;
}

export function getMinPriceForRoute(routeId: string): number {
  const routeDeps = departures.filter((d) => d.routeId === routeId);
  if (routeDeps.length === 0) return 0;
  return Math.min(...routeDeps.map((d) => d.prezzoUfficialeAdulto));
}

export function getCompaniesForRoute(routeId: string): string[] {
  const routeDeps = departures.filter((d) => d.routeId === routeId);
  return [...new Set(routeDeps.map((d) => d.compagnia))];
}

export function getPriceRangeForRoute(routeId: string): [number, number] {
  const routeDeps = departures.filter((d) => d.routeId === routeId);
  const prices = routeDeps.map((d) => d.prezzoUfficialeAdulto);
  return [Math.min(...prices), Math.max(...prices)];
}

export function getAllPorts(): { partenza: string[]; arrivo: string[] } {
  const partenza = [...new Set(routes.map((r) => r.portoPartenza))];
  const arrivo = [...new Set(routes.map((r) => r.portoArrivo))];
  return { partenza, arrivo };
}

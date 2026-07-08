import { Departure, Vendor, VendorPrice, Route, PriceProvider, CompanyLinks } from "./types";
import companyLinks from "@/data/companies.json";

const companies: Record<string, CompanyLinks> = companyLinks;

export function getCompanyLink(compagnia: string, routeId: string): string {
  const company = companies[compagnia];
  if (!company) return "#";
  return company.routeLinks?.[routeId] ?? company.sito;
}

function getDeepLink(vendor: Vendor, route: Route): string {
  if (vendor.routeLinks && vendor.routeLinks[route.id]) {
    return vendor.routeLinks[route.id];
  }
  return vendor.deepLinkTemplate || "#";
}

function applyFee(basePrice: number, vendor: Vendor): number {
  return basePrice * (1 + vendor.feePercent / 100) + vendor.feeFixed;
}

export class StaticPriceProvider implements PriceProvider {
  async getPrices(
    departure: Departure,
    vendors: Vendor[],
    pax: number,
    date: string,
    route: Route
  ): Promise<VendorPrice[]> {
    const adulti = Math.max(1, pax);
    const prices: VendorPrice[] = [];

    const companyUrl = getCompanyLink(departure.compagnia, route.id);
    prices.push({
      vendor: {
        id: `sito-${departure.compagnia.toLowerCase().replace(/\s+/g, "-")}`,
        nome: departure.compagnia,
        tipo: "compagnia",
        feePercent: 0,
        feeFixed: 0,
      },
      prezzoAdulto: departure.prezzoUfficialeAdulto,
      prezzoBambino: departure.prezzoUfficialeBambino,
      prezzoTotale: Math.round(departure.prezzoUfficialeAdulto * adulti * 100) / 100,
      deepLink: companyUrl,
      isBestPrice: false,
      risparmio: 0,
    });

    for (const vendor of vendors) {
      const prezzoAdulto = Math.round(applyFee(departure.prezzoUfficialeAdulto, vendor) * 100) / 100;
      const prezzoBambino = Math.round(applyFee(departure.prezzoUfficialeBambino, vendor) * 100) / 100;
      const prezzoTotale = Math.round(prezzoAdulto * adulti * 100) / 100;
      const deepLink = getDeepLink(vendor, route);

      prices.push({
        vendor,
        prezzoAdulto,
        prezzoBambino,
        prezzoTotale,
        deepLink,
        isBestPrice: false,
        risparmio: 0,
      });
    }

    prices.sort((a, b) => a.prezzoTotale - b.prezzoTotale);

    if (prices.length > 0) {
      prices[0].isBestPrice = true;
      const maxPrice = prices[prices.length - 1].prezzoTotale;
      prices[0].risparmio = Math.round((maxPrice - prices[0].prezzoTotale) * 100) / 100;
    }

    return prices;
  }
}

export const priceProvider: PriceProvider = new StaticPriceProvider();

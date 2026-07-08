import { Departure, Vendor, VendorPrice, Route, PriceProvider } from "./types";

function buildDeepLink(
  template: string,
  route: Route,
  date: string,
  pax: number
): string {
  return template
    .replace("{from}", encodeURIComponent(route.portoPartenza))
    .replace("{to}", encodeURIComponent(route.portoArrivo))
    .replace("{date}", date)
    .replace("{pax}", String(pax));
}

// fee = prezzoBase * (feePercent / 100) + feeFixed
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
    const prices: VendorPrice[] = vendors.map((vendor) => {
      const prezzoAdulto = Math.round(applyFee(departure.prezzoUfficialeAdulto, vendor) * 100) / 100;
      const prezzoBambino = Math.round(applyFee(departure.prezzoUfficialeBambino, vendor) * 100) / 100;
      const prezzoTotale = Math.round(prezzoAdulto * adulti * 100) / 100;
      const deepLink = buildDeepLink(vendor.deepLinkTemplate, route, date, pax);

      return {
        vendor,
        prezzoAdulto,
        prezzoBambino,
        prezzoTotale,
        deepLink,
        isBestPrice: false,
        risparmio: 0,
      };
    });

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

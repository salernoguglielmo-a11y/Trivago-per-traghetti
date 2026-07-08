export interface Route {
  id: string;
  portoPartenza: string;
  portoArrivo: string;
  isola: string;
  durataMin: number;
  slug: string;
  note?: string;
}

export type TipoMezzo = "aliscafo" | "traghetto" | "nave_veloce";
export type Stagionalita = "estate" | "inverno" | "tutto_anno";

export interface Departure {
  id: string;
  routeId: string;
  orario: string;
  compagnia: string;
  tipoMezzo: TipoMezzo;
  prezzoUfficialeAdulto: number;
  prezzoUfficialeBambino: number;
  stagionalita: Stagionalita;
}

export type VendorTipo = "compagnia" | "ota";

export interface Vendor {
  id: string;
  nome: string;
  tipo: VendorTipo;
  feePercent: number;
  feeFixed: number;
  deepLinkTemplate?: string;
  routeLinks?: Record<string, string>;
}

export interface VendorPrice {
  vendor: Vendor;
  prezzoAdulto: number;
  prezzoBambino: number;
  prezzoTotale: number;
  deepLink: string;
  isBestPrice: boolean;
  risparmio: number;
}

export interface DepartureWithPrices {
  departure: Departure;
  route: Route;
  vendorPrices: VendorPrice[];
}

export interface SearchParams {
  from: string;
  to: string;
  date: string;
  pax: number;
}

export interface PriceProvider {
  getPrices(
    departure: Departure,
    vendors: Vendor[],
    pax: number,
    date: string,
    route: Route
  ): Promise<VendorPrice[]>;
}

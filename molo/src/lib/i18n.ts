export const t = {
  siteName: "MOLO",
  siteTagline: "Confronta i prezzi dei traghetti per le isole italiane",
  siteDescription:
    "Trova il prezzo migliore per traghetti e aliscafi verso le isole minori italiane. Confronta le tariffe di tutte le compagnie e i rivenditori in un click.",

  searchTitle: "Dove vuoi navigare?",
  searchFrom: "Porto di partenza",
  searchTo: "Porto di arrivo",
  searchDate: "Data",
  searchPax: "Passeggeri",
  searchButton: "Cerca traghetti",

  popularRoutes: "Tratte più cercate",
  fromPrice: "da",

  resultsTitle: "Traghetti",
  resultsSubtitle: "corse trovate",
  noResults: "Nessuna corsa trovata per questa tratta.",

  departure: "Partenza",
  duration: "Durata",
  vessel: "Mezzo",
  company: "Compagnia",

  vesselAliscafo: "Aliscafo",
  vesselTraghetto: "Traghetto",
  vesselNaveVeloce: "Nave veloce",

  bestPrice: "Miglior prezzo",
  savings: "Risparmi",
  goToSite: "Vai al sito →",
  perPerson: "a persona",

  disclaimer:
    "MOLO confronta i prezzi e ti reindirizza ai siti di vendita. Potremmo ricevere una commissione. I prezzi OTA sono stimati e possono variare al checkout.",

  seoScheduleTitle: "Orari e prezzi",
  seoCompanies: "Compagnie operative",
  seoPriceRange: "Range prezzi adulto",
  seoFaqTitle: "Domande frequenti",

  footer: "MOLO — Confronta, risparmia, naviga.",
  footerDisclaimer:
    "MOLO non vende biglietti. Confrontiamo i prezzi e ti reindirizziamo ai siti di vendita ufficiali e autorizzati.",
} as const;

export function formatPrice(price: number): string {
  return price.toFixed(2).replace(".", ",") + " €";
}

export function formatVesselType(tipo: string): string {
  const map: Record<string, string> = {
    aliscafo: t.vesselAliscafo,
    traghetto: t.vesselTraghetto,
    nave_veloce: t.vesselNaveVeloce,
  };
  return map[tipo] || tipo;
}

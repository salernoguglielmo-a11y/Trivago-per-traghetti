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
  arrival: "Arrivo",
  duration: "Durata",
  vessel: "Mezzo",
  company: "Compagnia",
  season: "Stagione",
  seasonSummer: "Solo estate",
  seasonAllYear: "Tutto l'anno",

  vesselAliscafo: "Aliscafo",
  vesselTraghetto: "Traghetto",
  vesselNaveVeloce: "Nave veloce",

  bestPrice: "Miglior prezzo",
  savings: "Risparmi",
  goToSite: "Vai al sito →",
  perPerson: "a persona",
  officialSite: "Sito ufficiale · orari e biglietti",

  disclaimer:
    "MOLO confronta i prezzi e ti reindirizza ai siti di vendita. Potremmo ricevere una commissione. I prezzi OTA sono stimati e possono variare al checkout.",
  scheduleNotice:
    "Orari indicativi, soggetti a variazioni stagionali e senza preavviso. Verifica sempre l'orario sul sito ufficiale della compagnia prima di partire.",

  seoScheduleTitle: "Orari e prezzi indicativi",
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

export function formatArrivalTime(orario: string, durataMin: number): string {
  const [h, m] = orario.split(":").map(Number);
  if (isNaN(h) || isNaN(m)) return "";
  const total = (h * 60 + m + durataMin) % (24 * 60);
  const hh = String(Math.floor(total / 60)).padStart(2, "0");
  const mm = String(total % 60).padStart(2, "0");
  return `${hh}:${mm}`;
}

export function formatVesselType(tipo: string): string {
  const map: Record<string, string> = {
    aliscafo: t.vesselAliscafo,
    traghetto: t.vesselTraghetto,
    nave_veloce: t.vesselNaveVeloce,
  };
  return map[tipo] || tipo;
}

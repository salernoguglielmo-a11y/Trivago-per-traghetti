import { Departure } from "@/lib/types";

export const departures: Departure[] = [
  // Napoli → Capri — SNAV
  { id: "nc-snav-0730", routeId: "napoli-capri", orario: "07:30", compagnia: "SNAV", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 23.40, prezzoUfficialeBambino: 14.00, stagionalita: "estate" },
  { id: "nc-snav-0930", routeId: "napoli-capri", orario: "09:30", compagnia: "SNAV", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 23.40, prezzoUfficialeBambino: 14.00, stagionalita: "estate" },
  { id: "nc-snav-1400", routeId: "napoli-capri", orario: "14:00", compagnia: "SNAV", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 23.40, prezzoUfficialeBambino: 14.00, stagionalita: "estate" },
  // Napoli → Capri — NLG (Navigazione Libera del Golfo)
  { id: "nc-nlg-0800", routeId: "napoli-capri", orario: "08:00", compagnia: "NLG", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 13.50, stagionalita: "estate" },
  { id: "nc-nlg-1045", routeId: "napoli-capri", orario: "10:45", compagnia: "NLG", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 13.50, stagionalita: "estate" },
  { id: "nc-nlg-1630", routeId: "napoli-capri", orario: "16:30", compagnia: "NLG", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 13.50, stagionalita: "estate" },
  // Napoli → Capri — Caremar
  { id: "nc-care-0615", routeId: "napoli-capri", orario: "06:15", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 15.60, prezzoUfficialeBambino: 9.40, stagionalita: "tutto_anno" },
  { id: "nc-care-1130", routeId: "napoli-capri", orario: "11:30", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 15.60, prezzoUfficialeBambino: 9.40, stagionalita: "tutto_anno" },

  // Napoli → Ischia — Alilauro
  { id: "ni-ali-0700", routeId: "napoli-ischia", orario: "07:00", compagnia: "Alilauro", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 21.80, prezzoUfficialeBambino: 13.00, stagionalita: "estate" },
  { id: "ni-ali-0900", routeId: "napoli-ischia", orario: "09:00", compagnia: "Alilauro", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 21.80, prezzoUfficialeBambino: 13.00, stagionalita: "estate" },
  { id: "ni-ali-1300", routeId: "napoli-ischia", orario: "13:00", compagnia: "Alilauro", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 21.80, prezzoUfficialeBambino: 13.00, stagionalita: "estate" },
  // Napoli → Ischia — SNAV
  { id: "ni-snav-0745", routeId: "napoli-ischia", orario: "07:45", compagnia: "SNAV", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 22.50, prezzoUfficialeBambino: 13.50, stagionalita: "estate" },
  { id: "ni-snav-1100", routeId: "napoli-ischia", orario: "11:00", compagnia: "SNAV", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 22.50, prezzoUfficialeBambino: 13.50, stagionalita: "estate" },
  // Napoli → Ischia — Caremar
  { id: "ni-care-0630", routeId: "napoli-ischia", orario: "06:30", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 13.90, prezzoUfficialeBambino: 8.30, stagionalita: "tutto_anno" },
  { id: "ni-care-1200", routeId: "napoli-ischia", orario: "12:00", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 13.90, prezzoUfficialeBambino: 8.30, stagionalita: "tutto_anno" },
  // Napoli → Ischia — Medmar
  { id: "ni-med-0800", routeId: "napoli-ischia", orario: "08:00", compagnia: "Medmar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 14.50, prezzoUfficialeBambino: 8.70, stagionalita: "tutto_anno" },

  // Pozzuoli → Procida — Medmar
  { id: "pp-med-0700", routeId: "pozzuoli-procida", orario: "07:00", compagnia: "Medmar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 12.80, prezzoUfficialeBambino: 7.50, stagionalita: "tutto_anno" },
  { id: "pp-med-0945", routeId: "pozzuoli-procida", orario: "09:45", compagnia: "Medmar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 12.80, prezzoUfficialeBambino: 7.50, stagionalita: "tutto_anno" },
  { id: "pp-med-1430", routeId: "pozzuoli-procida", orario: "14:30", compagnia: "Medmar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 12.80, prezzoUfficialeBambino: 7.50, stagionalita: "tutto_anno" },
  // Pozzuoli → Procida — Caremar
  { id: "pp-care-0800", routeId: "pozzuoli-procida", orario: "08:00", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 12.50, prezzoUfficialeBambino: 7.30, stagionalita: "tutto_anno" },
  { id: "pp-care-1100", routeId: "pozzuoli-procida", orario: "11:00", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 12.50, prezzoUfficialeBambino: 7.30, stagionalita: "tutto_anno" },
  // Pozzuoli → Procida — Gestur
  { id: "pp-ges-0715", routeId: "pozzuoli-procida", orario: "07:15", compagnia: "Gestur", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 15.00, prezzoUfficialeBambino: 9.00, stagionalita: "estate" },
  { id: "pp-ges-1300", routeId: "pozzuoli-procida", orario: "13:00", compagnia: "Gestur", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 15.00, prezzoUfficialeBambino: 9.00, stagionalita: "estate" },

  // Anzio → Ponza — Vetor
  { id: "ap-vet-0730", routeId: "anzio-ponza", orario: "07:30", compagnia: "Vetor", tipoMezzo: "nave_veloce", prezzoUfficialeAdulto: 28.00, prezzoUfficialeBambino: 18.00, stagionalita: "estate" },
  { id: "ap-vet-0900", routeId: "anzio-ponza", orario: "09:00", compagnia: "Vetor", tipoMezzo: "nave_veloce", prezzoUfficialeAdulto: 28.00, prezzoUfficialeBambino: 18.00, stagionalita: "estate" },
  { id: "ap-vet-1630", routeId: "anzio-ponza", orario: "16:30", compagnia: "Vetor", tipoMezzo: "nave_veloce", prezzoUfficialeAdulto: 28.00, prezzoUfficialeBambino: 18.00, stagionalita: "estate" },
  // Anzio → Ponza — Laziomar
  { id: "ap-laz-0800", routeId: "anzio-ponza", orario: "08:00", compagnia: "Laziomar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 20.50, prezzoUfficialeBambino: 12.30, stagionalita: "estate" },
  { id: "ap-laz-1400", routeId: "anzio-ponza", orario: "14:00", compagnia: "Laziomar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 20.50, prezzoUfficialeBambino: 12.30, stagionalita: "estate" },

  // Formia → Ponza — Laziomar
  { id: "fp-laz-0700", routeId: "formia-ponza", orario: "07:00", compagnia: "Laziomar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 13.20, stagionalita: "tutto_anno" },
  { id: "fp-laz-0900", routeId: "formia-ponza", orario: "09:00", compagnia: "Laziomar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 13.20, stagionalita: "tutto_anno" },
  { id: "fp-laz-1700", routeId: "formia-ponza", orario: "17:00", compagnia: "Laziomar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 13.20, stagionalita: "tutto_anno" },
  // Formia → Ponza — NLG
  { id: "fp-nlg-0800", routeId: "formia-ponza", orario: "08:00", compagnia: "NLG", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 29.50, prezzoUfficialeBambino: 17.70, stagionalita: "estate" },
  { id: "fp-nlg-1430", routeId: "formia-ponza", orario: "14:30", compagnia: "NLG", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 29.50, prezzoUfficialeBambino: 17.70, stagionalita: "estate" },

  // Piombino → Portoferraio — Moby
  { id: "pe-mob-0600", routeId: "piombino-portoferraio", orario: "06:00", compagnia: "Moby", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 18.00, prezzoUfficialeBambino: 10.80, stagionalita: "tutto_anno" },
  { id: "pe-mob-0830", routeId: "piombino-portoferraio", orario: "08:30", compagnia: "Moby", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 18.00, prezzoUfficialeBambino: 10.80, stagionalita: "tutto_anno" },
  { id: "pe-mob-1100", routeId: "piombino-portoferraio", orario: "11:00", compagnia: "Moby", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 18.00, prezzoUfficialeBambino: 10.80, stagionalita: "tutto_anno" },
  { id: "pe-mob-1530", routeId: "piombino-portoferraio", orario: "15:30", compagnia: "Moby", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 18.00, prezzoUfficialeBambino: 10.80, stagionalita: "tutto_anno" },
  // Piombino → Portoferraio — Toremar
  { id: "pe-tor-0700", routeId: "piombino-portoferraio", orario: "07:00", compagnia: "Toremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 16.50, prezzoUfficialeBambino: 9.90, stagionalita: "tutto_anno" },
  { id: "pe-tor-1230", routeId: "piombino-portoferraio", orario: "12:30", compagnia: "Toremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 16.50, prezzoUfficialeBambino: 9.90, stagionalita: "tutto_anno" },
  // Piombino → Portoferraio — BluNavy
  { id: "pe-blu-0800", routeId: "piombino-portoferraio", orario: "08:00", compagnia: "BluNavy", tipoMezzo: "nave_veloce", prezzoUfficialeAdulto: 20.00, prezzoUfficialeBambino: 12.00, stagionalita: "estate" },
  { id: "pe-blu-1400", routeId: "piombino-portoferraio", orario: "14:00", compagnia: "BluNavy", tipoMezzo: "nave_veloce", prezzoUfficialeAdulto: 20.00, prezzoUfficialeBambino: 12.00, stagionalita: "estate" },

  // Trapani → Favignana — Liberty Lines
  { id: "tf-lib-0730", routeId: "trapani-favignana", orario: "07:30", compagnia: "Liberty Lines", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 12.40, prezzoUfficialeBambino: 7.40, stagionalita: "tutto_anno" },
  { id: "tf-lib-0900", routeId: "trapani-favignana", orario: "09:00", compagnia: "Liberty Lines", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 12.40, prezzoUfficialeBambino: 7.40, stagionalita: "tutto_anno" },
  { id: "tf-lib-1100", routeId: "trapani-favignana", orario: "11:00", compagnia: "Liberty Lines", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 12.40, prezzoUfficialeBambino: 7.40, stagionalita: "tutto_anno" },
  { id: "tf-lib-1430", routeId: "trapani-favignana", orario: "14:30", compagnia: "Liberty Lines", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 12.40, prezzoUfficialeBambino: 7.40, stagionalita: "tutto_anno" },
  { id: "tf-lib-1700", routeId: "trapani-favignana", orario: "17:00", compagnia: "Liberty Lines", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 12.40, prezzoUfficialeBambino: 7.40, stagionalita: "estate" },
  // Trapani → Favignana — Siremar
  { id: "tf-sir-0800", routeId: "trapani-favignana", orario: "08:00", compagnia: "Siremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 9.80, prezzoUfficialeBambino: 5.90, stagionalita: "tutto_anno" },
  { id: "tf-sir-1300", routeId: "trapani-favignana", orario: "13:00", compagnia: "Siremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 9.80, prezzoUfficialeBambino: 5.90, stagionalita: "tutto_anno" },
];

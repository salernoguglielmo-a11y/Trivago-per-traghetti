import { Departure } from "@/lib/types";

// Prezzi e orari aggiornati da fonti pubbliche (estate 2026).
// Fonti: snav.it, nlg.it, caremar.it, alilauro.it, medmargroup.it,
// libertylines.it, siremar.it, laziomar.it, vetor.it, moby.it,
// toremar.it, blunavytraghetti.com — verificati luglio 2026.

export const departures: Departure[] = [
  // ═══ Napoli (Beverello) → Capri ═══

  // SNAV — aliscafo, ~45 min, da Molo Beverello
  // Tariffa: adulto 25,00 €, bambino (2-12) 15,00 €
  { id: "nc-snav-0715", routeId: "napoli-capri", orario: "07:15", compagnia: "SNAV", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 25.00, prezzoUfficialeBambino: 15.00, stagionalita: "tutto_anno" },
  { id: "nc-snav-0745", routeId: "napoli-capri", orario: "07:45", compagnia: "SNAV", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 25.00, prezzoUfficialeBambino: 15.00, stagionalita: "tutto_anno" },
  { id: "nc-snav-0925", routeId: "napoli-capri", orario: "09:25", compagnia: "SNAV", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 25.00, prezzoUfficialeBambino: 15.00, stagionalita: "tutto_anno" },
  { id: "nc-snav-0950", routeId: "napoli-capri", orario: "09:50", compagnia: "SNAV", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 25.00, prezzoUfficialeBambino: 15.00, stagionalita: "tutto_anno" },
  { id: "nc-snav-1145", routeId: "napoli-capri", orario: "11:45", compagnia: "SNAV", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 25.00, prezzoUfficialeBambino: 15.00, stagionalita: "tutto_anno" },
  { id: "nc-snav-1440", routeId: "napoli-capri", orario: "14:40", compagnia: "SNAV", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 25.00, prezzoUfficialeBambino: 15.00, stagionalita: "tutto_anno" },
  { id: "nc-snav-1550", routeId: "napoli-capri", orario: "15:50", compagnia: "SNAV", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 25.00, prezzoUfficialeBambino: 15.00, stagionalita: "tutto_anno" },
  { id: "nc-snav-1925", routeId: "napoli-capri", orario: "19:25", compagnia: "SNAV", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 25.00, prezzoUfficialeBambino: 15.00, stagionalita: "tutto_anno" },
  { id: "nc-snav-2135", routeId: "napoli-capri", orario: "21:35", compagnia: "SNAV", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 25.00, prezzoUfficialeBambino: 15.00, stagionalita: "estate" },

  // NLG — aliscafo, ~50 min, da Molo Beverello
  // Tariffa: adulto 23,50 € (I.R. 21,50 €), bambino (2-12) 16,00 €
  { id: "nc-nlg-0805", routeId: "napoli-capri", orario: "08:05", compagnia: "NLG", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 23.50, prezzoUfficialeBambino: 16.00, stagionalita: "tutto_anno" },
  { id: "nc-nlg-1135", routeId: "napoli-capri", orario: "11:35", compagnia: "NLG", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 23.50, prezzoUfficialeBambino: 16.00, stagionalita: "tutto_anno" },
  { id: "nc-nlg-1630", routeId: "napoli-capri", orario: "16:30", compagnia: "NLG", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 23.50, prezzoUfficialeBambino: 16.00, stagionalita: "tutto_anno" },
  { id: "nc-nlg-1915", routeId: "napoli-capri", orario: "19:15", compagnia: "NLG", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 21.50, prezzoUfficialeBambino: 16.00, stagionalita: "tutto_anno" },

  // Caremar — traghetto lento, ~80 min, da Calata Porta di Massa
  // Tariffa: adulto 14,00 €, bambino (4-12) 9,80 €
  { id: "nc-care-0535", routeId: "napoli-capri", orario: "05:35", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 14.00, prezzoUfficialeBambino: 9.80, stagionalita: "tutto_anno" },
  { id: "nc-care-0700", routeId: "napoli-capri", orario: "07:00", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 14.00, prezzoUfficialeBambino: 9.80, stagionalita: "tutto_anno" },
  { id: "nc-care-0920", routeId: "napoli-capri", orario: "09:20", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 14.00, prezzoUfficialeBambino: 9.80, stagionalita: "tutto_anno" },
  { id: "nc-care-1130", routeId: "napoli-capri", orario: "11:30", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 14.00, prezzoUfficialeBambino: 9.80, stagionalita: "tutto_anno" },
  { id: "nc-care-1430", routeId: "napoli-capri", orario: "14:30", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 14.00, prezzoUfficialeBambino: 9.80, stagionalita: "tutto_anno" },
  { id: "nc-care-1740", routeId: "napoli-capri", orario: "17:40", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 14.00, prezzoUfficialeBambino: 9.80, stagionalita: "tutto_anno" },
  { id: "nc-care-1940", routeId: "napoli-capri", orario: "19:40", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 14.00, prezzoUfficialeBambino: 9.80, stagionalita: "tutto_anno" },

  // Caremar — nave veloce, ~50 min
  // Tariffa: adulto 20,30 €, bambino (2-12) 13,00 €
  { id: "nc-carev-0830", routeId: "napoli-capri", orario: "08:30", compagnia: "Caremar", tipoMezzo: "nave_veloce", prezzoUfficialeAdulto: 20.30, prezzoUfficialeBambino: 13.00, stagionalita: "tutto_anno" },
  { id: "nc-carev-1630", routeId: "napoli-capri", orario: "16:30", compagnia: "Caremar", tipoMezzo: "nave_veloce", prezzoUfficialeAdulto: 20.30, prezzoUfficialeBambino: 13.00, stagionalita: "estate" },

  // ═══ Napoli → Ischia ═══

  // Alilauro — aliscafo, ~50 min, da Molo Beverello
  // Tariffa: adulto 22,00 €, bambino (2-12) 14,00 €
  { id: "ni-ali-0630", routeId: "napoli-ischia", orario: "06:30", compagnia: "Alilauro", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 14.00, stagionalita: "tutto_anno" },
  { id: "ni-ali-0830", routeId: "napoli-ischia", orario: "08:30", compagnia: "Alilauro", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 14.00, stagionalita: "tutto_anno" },
  { id: "ni-ali-1050", routeId: "napoli-ischia", orario: "10:50", compagnia: "Alilauro", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 14.00, stagionalita: "tutto_anno" },
  { id: "ni-ali-1330", routeId: "napoli-ischia", orario: "13:30", compagnia: "Alilauro", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 14.00, stagionalita: "tutto_anno" },
  { id: "ni-ali-1600", routeId: "napoli-ischia", orario: "16:00", compagnia: "Alilauro", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 14.00, stagionalita: "tutto_anno" },
  { id: "ni-ali-1830", routeId: "napoli-ischia", orario: "18:30", compagnia: "Alilauro", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 14.00, stagionalita: "estate" },

  // SNAV — aliscafo, ~50 min, Beverello → Casamicciola
  // Tariffa: adulto 23,00 €, bambino (2-12) 14,50 €
  { id: "ni-snav-0800", routeId: "napoli-ischia", orario: "08:00", compagnia: "SNAV", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 23.00, prezzoUfficialeBambino: 14.50, stagionalita: "tutto_anno" },
  { id: "ni-snav-1100", routeId: "napoli-ischia", orario: "11:00", compagnia: "SNAV", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 23.00, prezzoUfficialeBambino: 14.50, stagionalita: "tutto_anno" },
  { id: "ni-snav-1500", routeId: "napoli-ischia", orario: "15:00", compagnia: "SNAV", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 23.00, prezzoUfficialeBambino: 14.50, stagionalita: "tutto_anno" },
  { id: "ni-snav-1900", routeId: "napoli-ischia", orario: "19:00", compagnia: "SNAV", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 23.00, prezzoUfficialeBambino: 14.50, stagionalita: "estate" },

  // Caremar — traghetto, ~90 min, da Porta di Massa
  // Tariffa: adulto 13,50 €, bambino (4-12) 9,50 €
  { id: "ni-care-0600", routeId: "napoli-ischia", orario: "06:00", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 13.50, prezzoUfficialeBambino: 9.50, stagionalita: "tutto_anno" },
  { id: "ni-care-0930", routeId: "napoli-ischia", orario: "09:30", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 13.50, prezzoUfficialeBambino: 9.50, stagionalita: "tutto_anno" },
  { id: "ni-care-1230", routeId: "napoli-ischia", orario: "12:30", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 13.50, prezzoUfficialeBambino: 9.50, stagionalita: "tutto_anno" },
  { id: "ni-care-1800", routeId: "napoli-ischia", orario: "18:00", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 13.50, prezzoUfficialeBambino: 9.50, stagionalita: "tutto_anno" },

  // Medmar — traghetto, ~90 min, da Porta di Massa
  // Tariffa: adulto 14,00 €, bambino (2-12) 8,50 €
  { id: "ni-med-0700", routeId: "napoli-ischia", orario: "07:00", compagnia: "Medmar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 14.00, prezzoUfficialeBambino: 8.50, stagionalita: "tutto_anno" },
  { id: "ni-med-1100", routeId: "napoli-ischia", orario: "11:00", compagnia: "Medmar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 14.00, prezzoUfficialeBambino: 8.50, stagionalita: "tutto_anno" },
  { id: "ni-med-1500", routeId: "napoli-ischia", orario: "15:00", compagnia: "Medmar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 14.00, prezzoUfficialeBambino: 8.50, stagionalita: "tutto_anno" },
  { id: "ni-med-1930", routeId: "napoli-ischia", orario: "19:30", compagnia: "Medmar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 14.00, prezzoUfficialeBambino: 8.50, stagionalita: "tutto_anno" },

  // ═══ Pozzuoli → Procida ═══

  // Medmar — traghetto, ~40 min
  // Tariffa: adulto 10,00 €, bambino (2-12) 7,00 €
  { id: "pp-med-0645", routeId: "pozzuoli-procida", orario: "06:45", compagnia: "Medmar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 10.00, prezzoUfficialeBambino: 7.00, stagionalita: "tutto_anno" },
  { id: "pp-med-0830", routeId: "pozzuoli-procida", orario: "08:30", compagnia: "Medmar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 10.00, prezzoUfficialeBambino: 7.00, stagionalita: "tutto_anno" },
  { id: "pp-med-1120", routeId: "pozzuoli-procida", orario: "11:20", compagnia: "Medmar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 10.00, prezzoUfficialeBambino: 7.00, stagionalita: "tutto_anno" },
  { id: "pp-med-1330", routeId: "pozzuoli-procida", orario: "13:30", compagnia: "Medmar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 10.00, prezzoUfficialeBambino: 7.00, stagionalita: "tutto_anno" },
  { id: "pp-med-1640", routeId: "pozzuoli-procida", orario: "16:40", compagnia: "Medmar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 10.00, prezzoUfficialeBambino: 7.00, stagionalita: "tutto_anno" },

  // Caremar — traghetto, ~35 min
  // Tariffa: adulto 9,50 €, bambino (4-12) 6,50 €
  { id: "pp-care-0730", routeId: "pozzuoli-procida", orario: "07:30", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 9.50, prezzoUfficialeBambino: 6.50, stagionalita: "tutto_anno" },
  { id: "pp-care-0945", routeId: "pozzuoli-procida", orario: "09:45", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 9.50, prezzoUfficialeBambino: 6.50, stagionalita: "tutto_anno" },
  { id: "pp-care-1200", routeId: "pozzuoli-procida", orario: "12:00", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 9.50, prezzoUfficialeBambino: 6.50, stagionalita: "tutto_anno" },
  { id: "pp-care-1500", routeId: "pozzuoli-procida", orario: "15:00", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 9.50, prezzoUfficialeBambino: 6.50, stagionalita: "tutto_anno" },
  { id: "pp-care-1815", routeId: "pozzuoli-procida", orario: "18:15", compagnia: "Caremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 9.50, prezzoUfficialeBambino: 6.50, stagionalita: "tutto_anno" },

  // Gestur — aliscafo, ~20 min (solo estate)
  // Tariffa: adulto 15,50 €, bambino (2-12) 9,50 €
  { id: "pp-ges-0715", routeId: "pozzuoli-procida", orario: "07:15", compagnia: "Gestur", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 15.50, prezzoUfficialeBambino: 9.50, stagionalita: "estate" },
  { id: "pp-ges-1000", routeId: "pozzuoli-procida", orario: "10:00", compagnia: "Gestur", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 15.50, prezzoUfficialeBambino: 9.50, stagionalita: "estate" },
  { id: "pp-ges-1400", routeId: "pozzuoli-procida", orario: "14:00", compagnia: "Gestur", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 15.50, prezzoUfficialeBambino: 9.50, stagionalita: "estate" },

  // ═══ Anzio → Ponza ═══

  // Vetor — nave veloce, ~70 min (solo estate, da luglio)
  // Tariffa: adulto 25,00 € (A/R giornaliero 50,00 €), bambino ~15,00 €
  { id: "ap-vet-0800", routeId: "anzio-ponza", orario: "08:00", compagnia: "Vetor", tipoMezzo: "nave_veloce", prezzoUfficialeAdulto: 25.00, prezzoUfficialeBambino: 15.00, stagionalita: "estate" },
  { id: "ap-vet-0930", routeId: "anzio-ponza", orario: "09:30", compagnia: "Vetor", tipoMezzo: "nave_veloce", prezzoUfficialeAdulto: 25.00, prezzoUfficialeBambino: 15.00, stagionalita: "estate" },
  { id: "ap-vet-1700", routeId: "anzio-ponza", orario: "17:00", compagnia: "Vetor", tipoMezzo: "nave_veloce", prezzoUfficialeAdulto: 25.00, prezzoUfficialeBambino: 15.00, stagionalita: "estate" },

  // Laziomar — traghetto, ~150 min (solo estate)
  // Tariffa: adulto 20,00 €, bambino (4-12) 12,00 €
  { id: "ap-laz-0800", routeId: "anzio-ponza", orario: "08:00", compagnia: "Laziomar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 20.00, prezzoUfficialeBambino: 12.00, stagionalita: "estate" },
  { id: "ap-laz-1600", routeId: "anzio-ponza", orario: "16:00", compagnia: "Laziomar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 20.00, prezzoUfficialeBambino: 12.00, stagionalita: "estate" },

  // ═══ Formia → Ponza ═══

  // Laziomar — traghetto, ~150 min, tutto l'anno
  // Tariffa: adulto 20,00 €, bambino (4-12) 12,00 €
  { id: "fp-laz-0800", routeId: "formia-ponza", orario: "08:00", compagnia: "Laziomar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 20.00, prezzoUfficialeBambino: 12.00, stagionalita: "tutto_anno" },
  { id: "fp-laz-1430", routeId: "formia-ponza", orario: "14:30", compagnia: "Laziomar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 20.00, prezzoUfficialeBambino: 12.00, stagionalita: "tutto_anno" },
  { id: "fp-laz-1815", routeId: "formia-ponza", orario: "18:15", compagnia: "Laziomar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 20.00, prezzoUfficialeBambino: 12.00, stagionalita: "estate" },

  // Laziomar — aliscafo, ~80 min
  // Tariffa: adulto 28,00 €, bambino (4-12) 17,00 €
  { id: "fp-lazv-0900", routeId: "formia-ponza", orario: "09:00", compagnia: "Laziomar", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 28.00, prezzoUfficialeBambino: 17.00, stagionalita: "estate" },
  { id: "fp-lazv-1700", routeId: "formia-ponza", orario: "17:00", compagnia: "Laziomar", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 28.00, prezzoUfficialeBambino: 17.00, stagionalita: "estate" },

  // ═══ Piombino → Portoferraio (Elba) ═══

  // Moby — traghetto, ~60 min, tutto l'anno
  // Tariffa: adulto 22,00 € (alta stagione), bambino (4-12) 13,00 €
  { id: "pe-mob-0530", routeId: "piombino-portoferraio", orario: "05:30", compagnia: "Moby", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 13.00, stagionalita: "tutto_anno" },
  { id: "pe-mob-0730", routeId: "piombino-portoferraio", orario: "07:30", compagnia: "Moby", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 13.00, stagionalita: "tutto_anno" },
  { id: "pe-mob-0930", routeId: "piombino-portoferraio", orario: "09:30", compagnia: "Moby", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 13.00, stagionalita: "tutto_anno" },
  { id: "pe-mob-1200", routeId: "piombino-portoferraio", orario: "12:00", compagnia: "Moby", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 13.00, stagionalita: "tutto_anno" },
  { id: "pe-mob-1500", routeId: "piombino-portoferraio", orario: "15:00", compagnia: "Moby", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 13.00, stagionalita: "tutto_anno" },
  { id: "pe-mob-1800", routeId: "piombino-portoferraio", orario: "18:00", compagnia: "Moby", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 13.00, stagionalita: "tutto_anno" },
  { id: "pe-mob-2100", routeId: "piombino-portoferraio", orario: "21:00", compagnia: "Moby", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 13.00, stagionalita: "estate" },
  { id: "pe-mob-2230", routeId: "piombino-portoferraio", orario: "22:30", compagnia: "Moby", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 13.00, stagionalita: "estate" },

  // Toremar — traghetto, ~60 min
  // Tariffa: adulto 17,00 € (bassa) / 22,00 € (alta), bambino (4-12) 11,00 €
  { id: "pe-tor-0630", routeId: "piombino-portoferraio", orario: "06:30", compagnia: "Toremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 11.00, stagionalita: "tutto_anno" },
  { id: "pe-tor-0900", routeId: "piombino-portoferraio", orario: "09:00", compagnia: "Toremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 11.00, stagionalita: "tutto_anno" },
  { id: "pe-tor-1130", routeId: "piombino-portoferraio", orario: "11:30", compagnia: "Toremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 11.00, stagionalita: "tutto_anno" },
  { id: "pe-tor-1400", routeId: "piombino-portoferraio", orario: "14:00", compagnia: "Toremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 11.00, stagionalita: "tutto_anno" },
  { id: "pe-tor-1700", routeId: "piombino-portoferraio", orario: "17:00", compagnia: "Toremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 11.00, stagionalita: "tutto_anno" },
  { id: "pe-tor-2000", routeId: "piombino-portoferraio", orario: "20:00", compagnia: "Toremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 22.00, prezzoUfficialeBambino: 11.00, stagionalita: "estate" },

  // BluNavy — traghetto, ~60 min
  // Tariffa: adulto 20,00 €, bambino (4-12) 12,00 €
  { id: "pe-blu-0700", routeId: "piombino-portoferraio", orario: "07:00", compagnia: "BluNavy", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 20.00, prezzoUfficialeBambino: 12.00, stagionalita: "tutto_anno" },
  { id: "pe-blu-1030", routeId: "piombino-portoferraio", orario: "10:30", compagnia: "BluNavy", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 20.00, prezzoUfficialeBambino: 12.00, stagionalita: "tutto_anno" },
  { id: "pe-blu-1330", routeId: "piombino-portoferraio", orario: "13:30", compagnia: "BluNavy", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 20.00, prezzoUfficialeBambino: 12.00, stagionalita: "tutto_anno" },
  { id: "pe-blu-1630", routeId: "piombino-portoferraio", orario: "16:30", compagnia: "BluNavy", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 20.00, prezzoUfficialeBambino: 12.00, stagionalita: "tutto_anno" },
  { id: "pe-blu-1930", routeId: "piombino-portoferraio", orario: "19:30", compagnia: "BluNavy", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 20.00, prezzoUfficialeBambino: 12.00, stagionalita: "estate" },

  // ═══ Trapani → Favignana ═══

  // Liberty Lines — aliscafo, ~25-30 min, tutto l'anno
  // Tariffa: adulto 13,80 €, bambino (2-12) 8,30 €
  { id: "tf-lib-0700", routeId: "trapani-favignana", orario: "07:00", compagnia: "Liberty Lines", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 13.80, prezzoUfficialeBambino: 8.30, stagionalita: "tutto_anno" },
  { id: "tf-lib-0815", routeId: "trapani-favignana", orario: "08:15", compagnia: "Liberty Lines", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 13.80, prezzoUfficialeBambino: 8.30, stagionalita: "tutto_anno" },
  { id: "tf-lib-0930", routeId: "trapani-favignana", orario: "09:30", compagnia: "Liberty Lines", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 13.80, prezzoUfficialeBambino: 8.30, stagionalita: "tutto_anno" },
  { id: "tf-lib-1100", routeId: "trapani-favignana", orario: "11:00", compagnia: "Liberty Lines", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 13.80, prezzoUfficialeBambino: 8.30, stagionalita: "tutto_anno" },
  { id: "tf-lib-1230", routeId: "trapani-favignana", orario: "12:30", compagnia: "Liberty Lines", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 13.80, prezzoUfficialeBambino: 8.30, stagionalita: "estate" },
  { id: "tf-lib-1400", routeId: "trapani-favignana", orario: "14:00", compagnia: "Liberty Lines", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 13.80, prezzoUfficialeBambino: 8.30, stagionalita: "tutto_anno" },
  { id: "tf-lib-1530", routeId: "trapani-favignana", orario: "15:30", compagnia: "Liberty Lines", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 13.80, prezzoUfficialeBambino: 8.30, stagionalita: "estate" },
  { id: "tf-lib-1700", routeId: "trapani-favignana", orario: "17:00", compagnia: "Liberty Lines", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 13.80, prezzoUfficialeBambino: 8.30, stagionalita: "tutto_anno" },
  { id: "tf-lib-1830", routeId: "trapani-favignana", orario: "18:30", compagnia: "Liberty Lines", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 13.80, prezzoUfficialeBambino: 8.30, stagionalita: "estate" },
  { id: "tf-lib-2000", routeId: "trapani-favignana", orario: "20:00", compagnia: "Liberty Lines", tipoMezzo: "aliscafo", prezzoUfficialeAdulto: 13.80, prezzoUfficialeBambino: 8.30, stagionalita: "estate" },

  // Siremar — traghetto, ~70 min, tutto l'anno
  // Tariffa: adulto 11,83 €, bambino (4-12) 7,10 €
  { id: "tf-sir-0730", routeId: "trapani-favignana", orario: "07:30", compagnia: "Siremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 11.83, prezzoUfficialeBambino: 7.10, stagionalita: "tutto_anno" },
  { id: "tf-sir-1015", routeId: "trapani-favignana", orario: "10:15", compagnia: "Siremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 11.83, prezzoUfficialeBambino: 7.10, stagionalita: "tutto_anno" },
  { id: "tf-sir-1330", routeId: "trapani-favignana", orario: "13:30", compagnia: "Siremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 11.83, prezzoUfficialeBambino: 7.10, stagionalita: "tutto_anno" },
  { id: "tf-sir-1800", routeId: "trapani-favignana", orario: "18:00", compagnia: "Siremar", tipoMezzo: "traghetto", prezzoUfficialeAdulto: 11.83, prezzoUfficialeBambino: 7.10, stagionalita: "tutto_anno" },
];

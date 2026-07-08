import { Vendor } from "@/lib/types";

export const vendors: Vendor[] = [
  {
    id: "sito-compagnia",
    nome: "Sito ufficiale",
    tipo: "compagnia",
    feePercent: 0,
    feeFixed: 0,
    deepLinkTemplate: "#",
  },
  {
    id: "ferryhopper",
    nome: "Ferryhopper",
    tipo: "ota",
    feePercent: 5,
    feeFixed: 0,
    deepLinkTemplate:
      "https://www.ferryhopper.com/it/ferry-routes?from={from}&to={to}&date={date}&pax={pax}",
  },
  {
    id: "direct-ferries",
    nome: "Direct Ferries",
    tipo: "ota",
    feePercent: 8,
    feeFixed: 0,
    deepLinkTemplate:
      "https://www.directferries.it/risultati?from={from}&to={to}&date={date}&pax={pax}",
  },
  {
    id: "traghettilines",
    nome: "Traghettilines",
    tipo: "ota",
    feePercent: 0,
    feeFixed: 2.50,
    deepLinkTemplate:
      "https://www.traghettilines.it/prenota?partenza={from}&arrivo={to}&data={date}&passeggeri={pax}",
  },
  {
    id: "traghetti-com",
    nome: "Traghetti.com",
    tipo: "ota",
    feePercent: 10,
    feeFixed: 1.50,
    deepLinkTemplate:
      "https://www.traghetti.com/search?origin={from}&dest={to}&date={date}&passengers={pax}",
  },
];

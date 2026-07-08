# MOLO — Metamotore traghetti isole italiane

Confronta i prezzi dei traghetti e aliscafi per le isole minori italiane, modello Trivago.
MOLO non vende biglietti: confronta i prezzi dello stesso biglietto presso venditori diversi
e reindirizza con deep-link.

## Quick start

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build produzione
```

## Come aggiornare le tariffe stagionali

I prezzi ufficiali delle compagnie stanno in `src/data/departures.ts`.
Ogni record `Departure` ha i campi `prezzoUfficialeAdulto` e `prezzoUfficialeBambino`.

Per aggiornare i prezzi di una stagione:

1. Aprire `src/data/departures.ts`
2. Modificare i campi prezzo delle corse interessate
3. Il campo `stagionalita` (`"estate"` | `"inverno"` | `"tutto_anno"`) indica quando la corsa è attiva

Per aggiungere una nuova corsa, aggiungere un oggetto `Departure` all'array.
Per aggiungere una nuova tratta, aggiungere prima un `Route` in `src/data/routes.ts`
e poi le corse corrispondenti.

## Come aggiungere un venditore

I venditori (OTA) stanno in `src/data/vendors.ts`. Ogni vendor ha:

- `feePercent`: markup percentuale (es. 8 = 8%)
- `feeFixed`: fee fissa in euro (sommata dopo il %)
- `deepLinkTemplate`: URL con placeholder `{from}`, `{to}`, `{date}`, `{pax}`

Aggiungere un nuovo oggetto all'array `vendors` con i parametri di fee stimati.

## Dove agganciare le future API affiliate

Il codice usa un pattern **PriceProvider** (interfaccia in `src/lib/types.ts`):

```
PriceProvider
├── StaticPriceProvider   ← attuale, calcola prezzi da fee statiche
└── ApiPriceProvider      ← futuro, chiama API affiliate in tempo reale
```

Per passare a prezzi live:

1. Creare una classe `ApiPriceProvider` in `src/lib/price-provider.ts` che implementa `PriceProvider`
2. Nella sua `getPrices()`, chiamare l'API del programma affiliato del vendor
3. Cambiare l'export `priceProvider` per usare la nuova implementazione
4. I deep-link template nei vendor diventerebbero link affiliati reali con tracking ID

## Struttura progetto

```
src/
├── app/
│   ├── page.tsx              # Home con search + tratte popolari
│   ├── search/page.tsx       # Risultati ricerca con confronto venditori
│   └── tratta/[slug]/page.tsx # Pagina SEO per tratta
├── components/
│   ├── SearchForm.tsx        # Form di ricerca
│   ├── RouteCard.tsx         # Card tratta homepage
│   └── DepartureCard.tsx     # Card corsa con tabella confronto
├── data/
│   ├── routes.ts             # Tratte
│   ├── departures.ts         # Corse con prezzi ufficiali
│   └── vendors.ts            # Venditori con fee
└── lib/
    ├── types.ts              # TypeScript types + interfaccia PriceProvider
    ├── price-provider.ts     # StaticPriceProvider
    ├── search.ts             # Logica di ricerca
    └── i18n.ts               # Stringhe centralizzate (pronte per i18n)
```

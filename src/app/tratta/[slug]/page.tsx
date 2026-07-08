import { Metadata } from "next";
import { notFound } from "next/navigation";
import { routes } from "@/data/routes";
import { departures } from "@/data/departures";
import {
  getRouteBySlug,
  getCompaniesForRoute,
  getPriceRangeForRoute,
} from "@/lib/search";
import { formatArrivalTime, formatPrice, formatVesselType, t } from "@/lib/i18n";
import SearchForm from "@/components/SearchForm";

export function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug }));
}

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const route = getRouteBySlug(params.slug);
  if (!route) return {};
  const [minP, maxP] = getPriceRangeForRoute(route.id);
  return {
    title: `Traghetto ${route.portoPartenza} ${route.portoArrivo} — Orari e prezzi da ${formatPrice(minP)}`,
    description: `Confronta orari, prezzi e compagnie per la tratta ${route.portoPartenza} → ${route.portoArrivo}. Aliscafi e traghetti da ${formatPrice(minP)} a ${formatPrice(maxP)}.`,
    alternates: { canonical: `/tratta/${route.slug}` },
  };
}

export default function TrattaPage({ params }: Props) {
  const route = getRouteBySlug(params.slug);
  if (!route) notFound();

  const routeDeps = departures
    .filter((d) => d.routeId === route.id)
    .sort((a, b) => a.orario.localeCompare(b.orario));
  const companies = getCompaniesForRoute(route.id);
  const [minP, maxP] = getPriceRangeForRoute(route.id);

  const faq = [
    {
      q: `Quanto costa il traghetto ${route.portoPartenza} → ${route.portoArrivo}?`,
      a: `Il prezzo per un adulto varia da ${formatPrice(minP)} a ${formatPrice(maxP)} a seconda della compagnia e del tipo di mezzo (traghetto o aliscafo). I prezzi OTA possono includere commissioni aggiuntive.`,
    },
    {
      q: `Quanto dura la traversata ${route.portoPartenza} → ${route.portoArrivo}?`,
      a: `La durata media è di circa ${route.durataMin} minuti. Il tempo può variare in base al tipo di mezzo e alle condizioni meteo.`,
    },
    {
      q: `Quali compagnie operano sulla tratta ${route.portoPartenza} → ${route.portoArrivo}?`,
      a: `Le compagnie operative sono: ${companies.join(", ")}.`,
    },
    {
      q: `Come posso risparmiare sul biglietto?`,
      a: `Usa MOLO per confrontare i prezzi tra il sito ufficiale della compagnia e i rivenditori online. Il sito della compagnia ha spesso il prezzo migliore, ma non sempre: le OTA possono offrire promozioni o pacchetti.`,
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h1 className="font-display text-2xl sm:text-3xl font-bold mb-1">
        {route.portoPartenza} → {route.portoArrivo}
      </h1>
      <p className="text-ink/50 text-sm mb-6">
        Isola: {route.isola} · ~{route.durataMin} min
        {route.note && ` · ${route.note}`}
      </p>

      <div className="bg-white rounded-xl p-4 border border-ink/10 mb-8">
        <SearchForm compact />
      </div>

      <section className="mb-8">
        <h2 className="font-display text-lg font-bold mb-3">{t.seoScheduleTitle}</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-ink/10 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-ink/[0.04] text-left">
                <th className="px-3 py-2 font-medium">{t.departure}</th>
                <th className="px-3 py-2 font-medium">{t.arrival}</th>
                <th className="px-3 py-2 font-medium">{t.company}</th>
                <th className="px-3 py-2 font-medium">{t.vessel}</th>
                <th className="px-3 py-2 font-medium">{t.season}</th>
                <th className="px-3 py-2 font-medium text-right">Adulto</th>
                <th className="px-3 py-2 font-medium text-right">Bambino</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/5">
              {routeDeps.map((d) => (
                <tr key={d.id} className="hover:bg-signal/5">
                  <td className="px-3 py-2 font-tabellone font-bold">{d.orario}</td>
                  <td className="px-3 py-2 font-tabellone text-ink/60">
                    {formatArrivalTime(d.orario, d.durataMin ?? route.durataMin)}
                  </td>
                  <td className="px-3 py-2">{d.compagnia}</td>
                  <td className="px-3 py-2 text-ink/60">{formatVesselType(d.tipoMezzo)}</td>
                  <td className="px-3 py-2 text-ink/60">
                    {d.stagionalita === "estate" ? t.seasonSummer : t.seasonAllYear}
                  </td>
                  <td className="px-3 py-2 font-tabellone text-right">{formatPrice(d.prezzoUfficialeAdulto)}</td>
                  <td className="px-3 py-2 font-tabellone text-right">{formatPrice(d.prezzoUfficialeBambino)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-ink/40 mt-2">{t.scheduleNotice}</p>
      </section>

      <section className="mb-8 grid sm:grid-cols-2 gap-4">
        <div className="bg-white border border-ink/10 rounded-xl p-4">
          <h3 className="font-display font-bold text-sm mb-2">{t.seoCompanies}</h3>
          <div className="flex flex-wrap gap-2">
            {companies.map((c) => (
              <span key={c} className="bg-ink/5 text-sm px-3 py-1 rounded-full">
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-white border border-ink/10 rounded-xl p-4">
          <h3 className="font-display font-bold text-sm mb-2">{t.seoPriceRange}</h3>
          <p className="font-tabellone text-lg">
            {formatPrice(minP)} — {formatPrice(maxP)}
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-display text-lg font-bold mb-4">{t.seoFaqTitle}</h2>
        <div className="space-y-4">
          {faq.map((item, i) => (
            <details key={i} className="bg-white border border-ink/10 rounded-xl overflow-hidden group">
              <summary className="px-4 py-3 cursor-pointer font-display font-medium text-sm hover:bg-signal/5 transition-colors">
                {item.q}
              </summary>
              <p className="px-4 py-3 text-sm text-ink/70 border-t border-ink/5">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <p className="text-xs text-ink/40 p-3 bg-ink/[0.03] rounded-lg">
        {t.disclaimer}
      </p>
    </div>
  );
}

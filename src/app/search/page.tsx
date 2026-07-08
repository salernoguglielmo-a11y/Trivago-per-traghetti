import { Metadata } from "next";
import { getSeasonForDate, searchDepartures } from "@/lib/search";
import SearchForm from "@/components/SearchForm";
import DepartureCard from "@/components/DepartureCard";
import { t } from "@/lib/i18n";

interface Props {
  searchParams: { from?: string; to?: string; date?: string; pax?: string };
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const from = searchParams.from || "";
  const to = searchParams.to || "";
  if (!from || !to) {
    return { title: t.searchButton, description: t.siteTagline };
  }
  return {
    title: `${t.resultsTitle} ${from} → ${to}`,
    description: `${t.siteTagline}: ${from} → ${to}`,
  };
}

function formatDateIt(date: string): string {
  const parsed = new Date(`${date}T12:00:00`);
  if (isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("it-IT", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function SearchPage({ searchParams }: Props) {
  const from = searchParams.from || "";
  const to = searchParams.to || "";
  const date = searchParams.date || new Date().toISOString().split("T")[0];
  const pax = Number(searchParams.pax) || 1;

  const results = await searchDepartures(from, to, date, pax);
  const season = getSeasonForDate(date);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="mb-6 bg-white rounded-xl p-4 border border-ink/10">
        <SearchForm compact />
      </div>

      {results.length > 0 ? (
        <>
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
            <h1 className="font-display text-xl font-bold">
              {from} → {to}
            </h1>
            <span className="text-sm text-ink/50">
              {results.length} {t.resultsSubtitle}
            </span>
          </div>
          <p className="text-sm text-ink/50 mb-4 capitalize">{formatDateIt(date)}</p>

          {season === "inverno" && (
            <p className="text-xs text-ink/60 mb-4 p-3 bg-signal/10 rounded-lg">
              Per questa data mostriamo solo le corse attive in bassa stagione: le
              corse estive riprendono da giugno a settembre.
            </p>
          )}

          <div className="space-y-4">
            {results.map((r) => (
              <DepartureCard key={r.departure.id} data={r} />
            ))}
          </div>

          <p className="text-xs text-ink/40 mt-6 p-3 bg-ink/[0.03] rounded-lg">
            {t.scheduleNotice} {t.disclaimer}
          </p>
        </>
      ) : (
        <div className="text-center py-16">
          <p className="text-ink/50 font-display">{t.noResults}</p>
          <p className="text-sm text-ink/30 mt-2">
            Prova a selezionare una tratta dalla homepage.
          </p>
        </div>
      )}
    </div>
  );
}

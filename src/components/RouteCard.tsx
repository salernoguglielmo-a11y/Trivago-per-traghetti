import Link from "next/link";
import { Route } from "@/lib/types";
import { formatPrice } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { getMinPriceForRoute, getCompaniesForRoute } from "@/lib/search";

export default function RouteCard({ route }: { route: Route }) {
  const minPrice = getMinPriceForRoute(route.id);
  const companies = getCompaniesForRoute(route.id);

  return (
    <Link
      href={`/tratta/${route.slug}`}
      className="block border border-ink/10 rounded-xl p-4 hover:border-signal hover:shadow-md transition-all bg-white group"
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-display font-bold text-base group-hover:text-ink-light">
            {route.portoPartenza} → {route.portoArrivo}
          </h3>
          <p className="text-xs text-ink/50 mt-0.5">{route.isola}</p>
        </div>
        <div className="text-right">
          <span className="text-xs text-ink/50">{t.fromPrice}</span>
          <span className="block font-tabellone text-lg font-bold text-ink">
            {formatPrice(minPrice)}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {companies.map((c) => (
          <span
            key={c}
            className="text-[10px] bg-ink/5 text-ink/70 px-2 py-0.5 rounded-full"
          >
            {c}
          </span>
        ))}
      </div>
      <p className="text-xs text-ink/40 mt-2">
        ~{route.durataMin} min
      </p>
    </Link>
  );
}

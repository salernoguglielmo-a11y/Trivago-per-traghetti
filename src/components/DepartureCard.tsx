import { DepartureWithPrices } from "@/lib/types";
import { formatPrice, formatVesselType, t } from "@/lib/i18n";

export default function DepartureCard({ data }: { data: DepartureWithPrices }) {
  const { departure, vendorPrices } = data;

  return (
    <div className="border border-ink/10 rounded-xl bg-white overflow-hidden">
      <div className="px-4 py-3 bg-ink/[0.03] border-b border-ink/10 flex flex-wrap items-center gap-x-4 gap-y-1">
        <span className="font-tabellone text-2xl font-bold">{departure.orario}</span>
        <span className="font-display font-semibold text-sm">{departure.compagnia}</span>
        <span className="text-xs bg-ink/10 text-ink/70 px-2 py-0.5 rounded-full">
          {formatVesselType(departure.tipoMezzo)}
        </span>
        <span className="text-xs text-ink/50 ml-auto">
          ~{data.route.durataMin} min
        </span>
      </div>

      <div className="divide-y divide-ink/5">
        {vendorPrices.map((vp) => (
          <div
            key={vp.vendor.id}
            className={`px-4 py-3 flex items-center gap-3 ${
              vp.isBestPrice ? "bg-signal/10" : ""
            }`}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium truncate">{vp.vendor.nome}</span>
                {vp.isBestPrice && (
                  <span className="text-[10px] font-bold bg-signal text-ink px-2 py-0.5 rounded-full whitespace-nowrap">
                    {t.bestPrice}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-ink/40">
                {vp.vendor.tipo === "compagnia" ? "Sito ufficiale" : "OTA"}
              </span>
            </div>

            <div className="text-right shrink-0">
              <span className="font-tabellone text-base font-bold block">
                {formatPrice(vp.prezzoAdulto)}
              </span>
              <span className="text-[10px] text-ink/50">{t.perPerson}</span>
              {vp.isBestPrice && vp.risparmio > 0 && (
                <span className="block text-[10px] font-semibold text-green-700">
                  {t.savings} {formatPrice(vp.risparmio)}
                </span>
              )}
            </div>

            <a
              href={vp.deepLink}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="shrink-0 bg-ink text-white text-xs font-display font-semibold px-3 py-2 rounded-lg hover:bg-ink-light transition-colors whitespace-nowrap"
            >
              {t.goToSite}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

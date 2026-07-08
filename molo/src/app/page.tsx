import SearchForm from "@/components/SearchForm";
import RouteCard from "@/components/RouteCard";
import { routes } from "@/data/routes";
import { t } from "@/lib/i18n";

export default function HomePage() {
  return (
    <>
      <section className="bg-ink text-white py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="font-display text-3xl sm:text-5xl font-bold mb-2 tracking-tight">
            {t.searchTitle}
          </h1>
          <p className="text-white/60 mb-8 text-sm sm:text-base max-w-xl">
            {t.siteDescription}
          </p>
          <div className="bg-white rounded-xl p-4 sm:p-6 text-ink">
            <SearchForm />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="font-display text-xl font-bold mb-6">{t.popularRoutes}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {routes.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
        </div>
      </section>
    </>
  );
}

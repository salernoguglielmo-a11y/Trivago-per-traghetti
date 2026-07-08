"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { t } from "@/lib/i18n";
import { routes } from "@/data/routes";

export default function SearchForm({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const partenze = [...new Set(routes.map((r) => r.portoPartenza))];
  const arrivi = [...new Set(routes.map((r) => r.portoArrivo))];

  const today = new Date().toISOString().split("T")[0];
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(today);
  const [pax, setPax] = useState(1);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!from || !to) return;
    const params = new URLSearchParams({ from, to, date, pax: String(pax) });
    router.push(`/search?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "" : ""}>
      <div className={`grid gap-3 ${compact ? "grid-cols-2 sm:grid-cols-5" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"}`}>
        <div className={compact ? "" : "sm:col-span-1"}>
          <label className="block text-xs font-medium mb-1 uppercase tracking-wider text-ink/60">
            {t.searchFrom}
          </label>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
            className="w-full border border-ink/20 rounded-lg px-3 py-2.5 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-signal"
          >
            <option value="">—</option>
            {partenze.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium mb-1 uppercase tracking-wider text-ink/60">
            {t.searchTo}
          </label>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
            className="w-full border border-ink/20 rounded-lg px-3 py-2.5 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-signal"
          >
            <option value="">—</option>
            {arrivi.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium mb-1 uppercase tracking-wider text-ink/60">
            {t.searchDate}
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full border border-ink/20 rounded-lg px-3 py-2.5 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-signal"
          />
        </div>

        <div>
          <label className="block text-xs font-medium mb-1 uppercase tracking-wider text-ink/60">
            {t.searchPax}
          </label>
          <input
            type="number"
            min={1}
            max={9}
            value={pax}
            onChange={(e) => setPax(Number(e.target.value))}
            className="w-full border border-ink/20 rounded-lg px-3 py-2.5 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-signal"
          />
        </div>

        <div className={`flex items-end ${compact ? "" : ""}`}>
          <button
            type="submit"
            className="w-full bg-signal hover:bg-signal-dark text-ink font-display font-bold py-2.5 px-4 rounded-lg transition-colors text-sm"
          >
            {t.searchButton}
          </button>
        </div>
      </div>
    </form>
  );
}

"use client";

import { useState, useCallback } from "react";

interface Route {
  id: string; portoPartenza: string; portoArrivo: string; isola: string;
  durataMin: number; slug: string; note?: string;
}
interface Departure {
  id: string; routeId: string; orario: string; compagnia: string;
  tipoMezzo: string; prezzoUfficialeAdulto: number; prezzoUfficialeBambino: number;
  stagionalita: string;
}
interface Vendor {
  id: string; nome: string; tipo: string; feePercent: number;
  feeFixed: number; deepLinkTemplate: string;
}

type Tab = "departures" | "routes" | "vendors";

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState<Tab>("departures");
  const [routes, setRoutes] = useState<Route[]>([]);
  const [departures, setDepartures] = useState<Departure[]>([]);
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [status, setStatus] = useState("");
  const [filterRoute, setFilterRoute] = useState("");

  const headers = useCallback(() => ({
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  }), [token]);

  async function loadData() {
    const res = await fetch("/api/admin/data", { headers: headers() });
    if (!res.ok) { setStatus("Errore autenticazione"); return; }
    const d = await res.json();
    setRoutes(d.routes); setDepartures(d.departures); setVendors(d.vendors);
    setAuthed(true); setStatus("Dati caricati");
  }

  async function saveEntity(entity: string, data: unknown) {
    setStatus("Salvataggio in corso...");
    const res = await fetch("/api/admin/data", {
      method: "PUT", headers: headers(),
      body: JSON.stringify({ entity, data }),
    });
    const result = await res.json();
    if (result.saved) {
      setStatus(result.message);
    } else {
      setStatus(result.error || "Errore");
      if (result.json) {
        const blob = new Blob([result.json], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = `${entity}.json`; a.click();
        setStatus("GITHUB_TOKEN non configurato. File JSON scaricato — committalo manualmente.");
      }
    }
  }

  // Departure editing
  function updateDep(index: number, field: keyof Departure, value: string | number) {
    setDepartures(prev => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  }

  function addDeparture() {
    const routeId = filterRoute || routes[0]?.id || "";
    setDepartures(prev => [...prev, {
      id: `new-${Date.now()}`, routeId, orario: "08:00", compagnia: "",
      tipoMezzo: "traghetto", prezzoUfficialeAdulto: 0, prezzoUfficialeBambino: 0,
      stagionalita: "tutto_anno",
    }]);
  }

  function deleteDep(index: number) {
    setDepartures(prev => prev.filter((_, i) => i !== index));
  }

  // Route editing
  function updateRoute(index: number, field: keyof Route, value: string | number) {
    setRoutes(prev => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  }

  // Vendor editing
  function updateVendor(index: number, field: keyof Vendor, value: string | number) {
    setVendors(prev => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  }

  function addVendor() {
    setVendors(prev => [...prev, {
      id: `new-${Date.now()}`, nome: "", tipo: "ota",
      feePercent: 0, feeFixed: 0, deepLinkTemplate: "",
    }]);
  }

  const filteredDeps = filterRoute
    ? departures.filter(d => d.routeId === filterRoute)
    : departures;

  if (!authed) {
    return (
      <div className="min-h-screen bg-ink flex items-center justify-center">
        <div className="bg-white rounded-xl p-8 max-w-sm w-full mx-4">
          <h1 className="font-display text-xl font-bold mb-4">
            <span className="text-signal">◈</span> MOLO Admin
          </h1>
          <input
            type="password"
            placeholder="Token admin"
            value={token}
            onChange={e => setToken(e.target.value)}
            className="w-full border border-ink/20 rounded-lg px-3 py-2 mb-3 text-sm"
            onKeyDown={e => e.key === "Enter" && loadData()}
          />
          <button onClick={loadData}
            className="w-full bg-signal text-ink font-bold py-2 rounded-lg text-sm">
            Accedi
          </button>
          {status && <p className="text-xs text-red-600 mt-2">{status}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-carta">
      <div className="bg-ink text-white px-4 py-3 flex items-center justify-between">
        <h1 className="font-display font-bold">
          <span className="text-signal">◈</span> MOLO Admin
        </h1>
        <span className="text-xs text-white/50">{status}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          {(["departures", "routes", "vendors"] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-lg text-sm font-display font-semibold transition-colors ${
                tab === t ? "bg-ink text-white" : "bg-white border border-ink/10 text-ink/60 hover:text-ink"
              }`}>
              {t === "departures" ? `Corse (${departures.length})` :
               t === "routes" ? `Tratte (${routes.length})` :
               `Venditori (${vendors.length})`}
            </button>
          ))}
        </div>

        {/* DEPARTURES TAB */}
        {tab === "departures" && (
          <>
            <div className="flex flex-wrap gap-2 mb-4 items-center">
              <select value={filterRoute} onChange={e => setFilterRoute(e.target.value)}
                className="border border-ink/20 rounded-lg px-3 py-2 text-sm bg-white">
                <option value="">Tutte le tratte</option>
                {routes.map(r => (
                  <option key={r.id} value={r.id}>{r.portoPartenza} → {r.portoArrivo}</option>
                ))}
              </select>
              <button onClick={addDeparture}
                className="bg-signal text-ink px-3 py-2 rounded-lg text-sm font-semibold">
                + Aggiungi corsa
              </button>
              <button onClick={() => saveEntity("departures", departures)}
                className="bg-ink text-white px-4 py-2 rounded-lg text-sm font-semibold ml-auto">
                Pubblica corse
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs bg-white border border-ink/10 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-ink/[0.04] text-left">
                    <th className="px-2 py-2">Orario</th>
                    <th className="px-2 py-2">Compagnia</th>
                    <th className="px-2 py-2">Tratta</th>
                    <th className="px-2 py-2">Mezzo</th>
                    <th className="px-2 py-2">Adulto €</th>
                    <th className="px-2 py-2">Bambino €</th>
                    <th className="px-2 py-2">Stagione</th>
                    <th className="px-2 py-2"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/5">
                  {filteredDeps.map((d) => {
                    const realIndex = departures.indexOf(d);
                    return (
                    <tr key={d.id + realIndex} className="hover:bg-signal/5">
                      <td className="px-2 py-1">
                        <input type="time" value={d.orario}
                          onChange={e => updateDep(realIndex, "orario", e.target.value)}
                          className="border border-ink/10 rounded px-1 py-0.5 w-20 font-mono" />
                      </td>
                      <td className="px-2 py-1">
                        <input value={d.compagnia}
                          onChange={e => updateDep(realIndex, "compagnia", e.target.value)}
                          className="border border-ink/10 rounded px-1 py-0.5 w-28" />
                      </td>
                      <td className="px-2 py-1">
                        <select value={d.routeId}
                          onChange={e => updateDep(realIndex, "routeId", e.target.value)}
                          className="border border-ink/10 rounded px-1 py-0.5 w-36">
                          {routes.map(r => (
                            <option key={r.id} value={r.id}>{r.portoPartenza}→{r.portoArrivo}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-2 py-1">
                        <select value={d.tipoMezzo}
                          onChange={e => updateDep(realIndex, "tipoMezzo", e.target.value)}
                          className="border border-ink/10 rounded px-1 py-0.5">
                          <option value="aliscafo">Aliscafo</option>
                          <option value="traghetto">Traghetto</option>
                          <option value="nave_veloce">Nave veloce</option>
                        </select>
                      </td>
                      <td className="px-2 py-1">
                        <input type="number" step="0.01" value={d.prezzoUfficialeAdulto}
                          onChange={e => updateDep(realIndex, "prezzoUfficialeAdulto", parseFloat(e.target.value) || 0)}
                          className="border border-ink/10 rounded px-1 py-0.5 w-16 font-mono text-right" />
                      </td>
                      <td className="px-2 py-1">
                        <input type="number" step="0.01" value={d.prezzoUfficialeBambino}
                          onChange={e => updateDep(realIndex, "prezzoUfficialeBambino", parseFloat(e.target.value) || 0)}
                          className="border border-ink/10 rounded px-1 py-0.5 w-16 font-mono text-right" />
                      </td>
                      <td className="px-2 py-1">
                        <select value={d.stagionalita}
                          onChange={e => updateDep(realIndex, "stagionalita", e.target.value)}
                          className="border border-ink/10 rounded px-1 py-0.5">
                          <option value="tutto_anno">Tutto anno</option>
                          <option value="estate">Estate</option>
                          <option value="inverno">Inverno</option>
                        </select>
                      </td>
                      <td className="px-2 py-1">
                        <button onClick={() => deleteDep(realIndex)}
                          className="text-red-500 hover:text-red-700 text-xs">✕</button>
                      </td>
                    </tr>
                  );})}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* ROUTES TAB */}
        {tab === "routes" && (
          <>
            <div className="flex justify-end mb-4">
              <button onClick={() => saveEntity("routes", routes)}
                className="bg-ink text-white px-4 py-2 rounded-lg text-sm font-semibold">
                Pubblica tratte
              </button>
            </div>
            <div className="space-y-3">
              {routes.map((r, i) => (
                <div key={r.id} className="bg-white border border-ink/10 rounded-xl p-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                    <div>
                      <label className="text-[10px] text-ink/50 uppercase">Porto partenza</label>
                      <input value={r.portoPartenza} onChange={e => updateRoute(i, "portoPartenza", e.target.value)}
                        className="w-full border border-ink/10 rounded px-2 py-1" />
                    </div>
                    <div>
                      <label className="text-[10px] text-ink/50 uppercase">Porto arrivo</label>
                      <input value={r.portoArrivo} onChange={e => updateRoute(i, "portoArrivo", e.target.value)}
                        className="w-full border border-ink/10 rounded px-2 py-1" />
                    </div>
                    <div>
                      <label className="text-[10px] text-ink/50 uppercase">Isola</label>
                      <input value={r.isola} onChange={e => updateRoute(i, "isola", e.target.value)}
                        className="w-full border border-ink/10 rounded px-2 py-1" />
                    </div>
                    <div>
                      <label className="text-[10px] text-ink/50 uppercase">Durata (min)</label>
                      <input type="number" value={r.durataMin} onChange={e => updateRoute(i, "durataMin", parseInt(e.target.value) || 0)}
                        className="w-full border border-ink/10 rounded px-2 py-1" />
                    </div>
                  </div>
                  <div className="mt-2">
                    <label className="text-[10px] text-ink/50 uppercase">Note</label>
                    <input value={r.note || ""} onChange={e => updateRoute(i, "note", e.target.value)}
                      className="w-full border border-ink/10 rounded px-2 py-1 text-sm" />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* VENDORS TAB */}
        {tab === "vendors" && (
          <>
            <div className="flex justify-between mb-4">
              <button onClick={addVendor}
                className="bg-signal text-ink px-3 py-2 rounded-lg text-sm font-semibold">
                + Aggiungi venditore
              </button>
              <button onClick={() => saveEntity("vendors", vendors)}
                className="bg-ink text-white px-4 py-2 rounded-lg text-sm font-semibold">
                Pubblica venditori
              </button>
            </div>
            <div className="space-y-3">
              {vendors.map((v, i) => (
                <div key={v.id} className="bg-white border border-ink/10 rounded-xl p-4">
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-sm">
                    <div>
                      <label className="text-[10px] text-ink/50 uppercase">Nome</label>
                      <input value={v.nome} onChange={e => updateVendor(i, "nome", e.target.value)}
                        className="w-full border border-ink/10 rounded px-2 py-1" />
                    </div>
                    <div>
                      <label className="text-[10px] text-ink/50 uppercase">Tipo</label>
                      <select value={v.tipo} onChange={e => updateVendor(i, "tipo", e.target.value)}
                        className="w-full border border-ink/10 rounded px-2 py-1">
                        <option value="compagnia">Compagnia</option>
                        <option value="ota">OTA</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] text-ink/50 uppercase">Fee %</label>
                      <input type="number" step="0.1" value={v.feePercent}
                        onChange={e => updateVendor(i, "feePercent", parseFloat(e.target.value) || 0)}
                        className="w-full border border-ink/10 rounded px-2 py-1" />
                    </div>
                    <div>
                      <label className="text-[10px] text-ink/50 uppercase">Fee fissa €</label>
                      <input type="number" step="0.01" value={v.feeFixed}
                        onChange={e => updateVendor(i, "feeFixed", parseFloat(e.target.value) || 0)}
                        className="w-full border border-ink/10 rounded px-2 py-1" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="text-[10px] text-ink/50 uppercase">ID</label>
                      <input value={v.id} onChange={e => updateVendor(i, "id", e.target.value)}
                        className="w-full border border-ink/10 rounded px-2 py-1 text-ink/50" />
                    </div>
                  </div>
                  <div className="mt-2">
                    <label className="text-[10px] text-ink/50 uppercase">Deep link template</label>
                    <input value={v.deepLinkTemplate} onChange={e => updateVendor(i, "deepLinkTemplate", e.target.value)}
                      className="w-full border border-ink/10 rounded px-2 py-1 text-sm font-mono" />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

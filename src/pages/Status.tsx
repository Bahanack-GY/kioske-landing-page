import PageLayout from "../components/PageLayout";

const services = [
  { name: "Serveurs", status: "Opérationnel", uptime: "99.98%" },
  { name: "Dashboard", status: "Opérationnel", uptime: "99.95%" },
  { name: "Caisse (POS)", status: "Opérationnel", uptime: "99.99%" },
  { name: "Paiements", status: "Opérationnel", uptime: "99.97%" },
  { name: "Base de données", status: "Opérationnel", uptime: "99.99%" },
];

const incidents = [
  {
    date: "12 Février 2026",
    title: "Latence élevée sur les serveurs",
    description:
      "Une augmentation temporaire de la latence a été observée sur les serveurs entre 14h00 et 14h45 GMT. Le problème a été identifié et résolu.",
    status: "Résolu",
    duration: "45 min",
  },
  {
    date: "3 Février 2026",
    title: "Maintenance planifiée - Base de données",
    description:
      "Migration de base de données planifiée. Le service a été indisponible pendant une courte période.",
    status: "Résolu",
    duration: "20 min",
  },
  {
    date: "18 Janvier 2026",
    title: "Interruption du service de paiement",
    description:
      "Le fournisseur de paiement mobile money a rencontré des difficultés techniques. Le service a été rétabli après intervention.",
    status: "Résolu",
    duration: "1h 15min",
  },
  {
    date: "5 Janvier 2026",
    title: "Mise à jour du Dashboard",
    description:
      "Déploiement d'une nouvelle version du Dashboard. Quelques utilisateurs ont rencontré des erreurs de chargement temporaires.",
    status: "Résolu",
    duration: "10 min",
  },
];

export default function Status() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-sm font-semibold text-emerald-700">
              Tous les systèmes sont opérationnels
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            État des services
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Surveillez en temps réel la disponibilité et les performances de
            l'ensemble des services Kioské.
          </p>
        </div>
      </section>

      {/* Overall uptime */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
            <p className="text-sm font-medium text-emerald-600 mb-1">
              Disponibilité globale (30 derniers jours)
            </p>
            <p className="text-5xl font-bold text-emerald-700 font-display">
              99.9%
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">
            Services
          </h2>
          <div className="space-y-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-6 py-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <span className="font-medium text-slate-900">
                    {service.name}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-500">
                    {service.uptime} uptime
                  </span>
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                    {service.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uptime bars */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">
            Historique de disponibilité (90 jours)
          </h2>
          <div className="space-y-6">
            {services.map((service) => (
              <div key={service.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">
                    {service.name}
                  </span>
                  <span className="text-sm text-slate-500">
                    {service.uptime}
                  </span>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 90 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-8 flex-1 rounded-sm ${
                        i === 42 || i === 58
                          ? "bg-amber-400"
                          : "bg-emerald-400"
                      }`}
                      title={
                        i === 42 || i === 58
                          ? "Incident mineur"
                          : "Opérationnel"
                      }
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-slate-400">90 jours</span>
                  <span className="text-xs text-slate-400">Aujourd'hui</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-emerald-400" />
              <span className="text-xs text-slate-500">Opérationnel</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-amber-400" />
              <span className="text-xs text-slate-500">Incident mineur</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-red-400" />
              <span className="text-xs text-slate-500">Panne</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recent incidents */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">
            Incidents récents
          </h2>
          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="font-display font-semibold text-slate-900">
                    {incident.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400">
                      Durée : {incident.duration}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                      {incident.status}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-2">
                  {incident.description}
                </p>
                <p className="text-xs text-slate-400">{incident.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
            <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
              Recevez les notifications de statut
            </h3>
            <p className="text-slate-600 mb-6">
              Soyez informé en temps réel des incidents et maintenances
              planifiées.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <button className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

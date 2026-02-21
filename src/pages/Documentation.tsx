import PageLayout from "../components/PageLayout";

const quickStartDocs = [
  {
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Installation",
    description: "Configurez votre compte Kioské et commencez à vendre en moins de 10 minutes.",
    href: "#",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 110 4m0-4a2 2 0 100 4m-6 8a2 2 0 110-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 110-4m0 4a2 2 0 100-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Configuration",
    description: "Personnalisez votre boutique, ajoutez vos produits et configurez vos moyens de paiement.",
    href: "#",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Premier paiement",
    description: "Acceptez votre premier paiement mobile money ou carte bancaire en quelques étapes.",
    href: "#",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Sécurité du compte",
    description: "Activez l'authentification à deux facteurs et sécurisez votre espace marchand.",
    href: "#",
  },
];

const guides = [
  {
    icon: (
      <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: "Gestion des produits",
    description: "Ajoutez, modifiez et organisez votre catalogue produits avec catégories et variantes.",
    href: "#",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Tableau de bord & Analytiques",
    description: "Comprenez vos ventes, suivez vos performances et identifiez les tendances.",
    href: "#",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Gestion des employés",
    description: "Créez des comptes employés, attribuez des rôles et gérez les permissions d'accès.",
    href: "#",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Paiements & Retraits",
    description: "Configurez vos moyens de paiement et gérez vos retraits vers votre compte bancaire.",
    href: "#",
  },
];


export default function Documentation() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Documentation
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour maîtriser Kioské.
            Guides, tutoriels et ressources complètes.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Rechercher dans la documentation..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Démarrage rapide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Démarrage rapide
            </h2>
            <p className="text-slate-600">
              Lancez-vous avec Kioské en quelques minutes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartDocs.map((doc) => (
              <a
                key={doc.title}
                href={doc.href}
                className="group block rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                  {doc.icon}
                </div>
                <h3 className="font-display font-semibold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {doc.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {doc.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Guides
            </h2>
            <p className="text-slate-600">
              Apprenez à tirer le meilleur parti de chaque fonctionnalité.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((doc) => (
              <a
                key={doc.title}
                href={doc.href}
                className="group block rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-200 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                  {doc.icon}
                </div>
                <h3 className="font-display font-semibold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {doc.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {doc.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Help banner */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
            <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
              Vous ne trouvez pas ce que vous cherchez ?
            </h3>
            <p className="text-slate-600 mb-6">
              Notre équipe de support est disponible pour vous aider.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              Contacter le support
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

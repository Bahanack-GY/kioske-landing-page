import PageLayout from "../components/PageLayout";

export default function APropos() {
  const values = [
    {
      title: "Innovation",
      description:
        "Nous repoussons les limites de la technologie pour créer des solutions adaptées aux réalités du commerce africain.",
      icon: (
        <svg
          className="w-8 h-8 text-emerald-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </svg>
      ),
    },
    {
      title: "Simplicité",
      description:
        "Chaque fonctionnalité est pensée pour être intuitive, accessible et efficace, même pour les utilisateurs les moins technophiles.",
      icon: (
        <svg
          className="w-8 h-8 text-emerald-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z"
          />
        </svg>
      ),
    },
    {
      title: "Impact",
      description:
        "Nous mesurons notre succès à l'aune de l'impact réel que nous avons sur la vie des commerçants et de leurs communautés.",
      icon: (
        <svg
          className="w-8 h-8 text-emerald-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
          />
        </svg>
      ),
    },
  ];

  const milestones = [
    { year: "2024", event: "Fondation de Kioské à Yaoundé" },
    { year: "2024", event: "Lancement de la plateforme et premiers commerçants" },
    { year: "2025", event: "Expansion dans 3 nouvelles villes camerounaises" },
    { year: "2026", event: "Cap sur l'Afrique de l'Ouest" },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-emerald-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            À propos de Kioské
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Nous construisons l'infrastructure numérique qui permet aux
            commerçants africains de prospérer.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="border border-slate-200 rounded-2xl shadow-sm bg-white p-10 md:p-14">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-4">
              Notre mission
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Simplifier le commerce en Afrique
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Fondée en 2024 à Yaoundé, Kioské est née d'un constat simple : les
              commerçants africains méritent des outils modernes, fiables et
              accessibles pour gérer et développer leur activité. Notre
              plateforme leur donne les moyens de digitaliser leurs opérations,
              de mieux comprendre leurs clients et de croître sereinement.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Depuis notre création, nous travaillons main dans la main avec les
              acteurs du commerce de proximité pour bâtir des solutions qui
              répondent à leurs besoins réels, dans un contexte qu'ils
              connaissent.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">
              Ce qui nous guide
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
              Nos valeurs
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 text-center"
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-5">
                  {value.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
              Notre parcours
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
              Les grandes étapes
            </h2>
          </div>
          <div className="space-y-0">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex items-start gap-6 relative"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {milestone.year.slice(-2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-16 bg-slate-200" />
                  )}
                </div>
                <div className="pt-1.5 pb-10">
                  <p className="text-sm font-semibold text-emerald-600 mb-1">
                    {milestone.year}
                  </p>
                  <p className="text-lg text-slate-700 font-medium">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">
            L'équipe
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Une équipe passionnée basée au Cameroun
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
            Ingénieurs, designers, commerciaux et passionnés de terrain — nous
            partageons tous la même conviction : la technologie peut
            transformer le commerce en Afrique, à condition d'être pensée pour
            ceux qui l'utilisent.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Membres", value: "15+" },
              { label: "Nationalités", value: "4" },
              { label: "Villes", value: "Yaoundé" },
              { label: "Café / jour", value: "∞" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-slate-200 rounded-xl shadow-sm p-6"
              >
                <p className="font-display text-2xl font-bold text-emerald-700">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

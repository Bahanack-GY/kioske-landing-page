import PageLayout from "../components/PageLayout";

const pressMentions = [
  {
    publication: "Jeune Afrique",
    quote:
      "Kioské s'impose comme la solution de référence pour les commerçants de proximité au Cameroun, avec une approche résolument terrain.",
    date: "Janvier 2026",
    logo: "JA",
  },
  {
    publication: "TechCrunch Africa",
    quote:
      "The Yaoundé-based startup is building what could become the Shopify of Central Africa, with a deep understanding of local commerce dynamics.",
    date: "Décembre 2025",
    logo: "TC",
  },
  {
    publication: "Cameroon Tribune",
    quote:
      "Avec plus de 2 000 commerçants utilisateurs, Kioské prouve que la digitalisation du commerce informel est non seulement possible, mais rentable.",
    date: "Novembre 2025",
    logo: "CT",
  },
  {
    publication: "Le Monde Afrique",
    quote:
      "Parmi les startups camerounaises à suivre en 2026, Kioské se distingue par sa croissance rapide et son modèle centré sur l'impact.",
    date: "Octobre 2025",
    logo: "LM",
  },
];

export default function Presse() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-emerald-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Kioské dans la presse
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Retrouvez les articles, interviews et mentions de Kioské dans les
            médias.
          </p>
        </div>
      </section>

      {/* Press Mentions */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
              Revue de presse
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
              Ce qu'ils disent de nous
            </h2>
          </div>
          <div className="space-y-6">
            {pressMentions.map((mention) => (
              <div
                key={mention.publication}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Publication Logo Placeholder */}
                  <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                    <span className="font-display text-lg font-bold text-slate-500">
                      {mention.logo}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="font-display text-lg font-bold text-slate-900">
                        {mention.publication}
                      </h3>
                      <span className="text-sm text-slate-400 mt-1 sm:mt-0">
                        {mention.date}
                      </span>
                    </div>
                    <blockquote className="text-slate-600 leading-relaxed text-lg italic border-l-4 border-emerald-200 pl-5">
                      "{mention.quote}"
                    </blockquote>
                    <a
                      href="#"
                      className="inline-flex items-center text-emerald-600 font-semibold text-sm mt-4 hover:text-emerald-700"
                    >
                      Lire l'article complet
                      <span className="ml-1">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Figures */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">
              Chiffres clés
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
              Kioské en quelques chiffres
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "2 000+", label: "Commerçants actifs" },
              { value: "3", label: "Villes couvertes" },
              { value: "50K+", label: "Transactions / mois" },
              { value: "98%", label: "Satisfaction client" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 text-center"
              >
                <p className="font-display text-3xl font-bold text-emerald-700 mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 to-amber-50 border border-slate-200 rounded-2xl shadow-sm p-10 md:p-14 text-center">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
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
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </div>
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">
              Kit presse
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-lg mx-auto">
              Téléchargez notre kit presse complet : logos, photos, fiches
              produit et informations clés sur Kioské.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl text-lg hover:bg-emerald-700 transition-colors shadow-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Télécharger le kit presse
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">
            Contact presse
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Pour toute demande d'interview, d'information ou de partenariat
            média, contactez notre équipe communication.
          </p>
          <a
            href="mailto:presse@kioske.co"
            className="text-emerald-600 font-semibold text-lg hover:text-emerald-700"
          >
            presse@kioske.co
          </a>
        </div>
      </section>
    </PageLayout>
  );
}

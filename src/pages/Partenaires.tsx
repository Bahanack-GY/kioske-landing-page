import PageLayout from "../components/PageLayout";

const partnerTypes = [
  {
    title: "Revendeur",
    description:
      "Distribuez Kioské auprès de votre réseau de commerçants et générez des revenus récurrents grâce à notre programme de commission.",
    benefits: [
      "Commissions attractives sur chaque abonnement",
      "Formation complète sur la plateforme",
      "Support dédié et outils de vente",
      "Tableau de bord partenaire personnalisé",
    ],
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
          d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0 0 20.25 9.35m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
        />
      </svg>
    ),
    accent: "emerald",
  },
  {
    title: "Intégrateur",
    description:
      "Intégrez Kioské dans vos solutions existantes et proposez à vos clients une expérience commerce unifiée et performante.",
    benefits: [
      "Accès complet à la plateforme",
      "Documentation technique détaillée",
      "Environnement de test dédié",
      "Accompagnement technique personnalisé",
    ],
    icon: (
      <svg
        className="w-8 h-8 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
        />
      </svg>
    ),
    accent: "amber",
  },
  {
    title: "Technologique",
    description:
      "Connectez votre solution à l'écosystème Kioské et accédez à un réseau croissant de commerçants en Afrique de l'Ouest.",
    benefits: [
      "Co-développement de fonctionnalités",
      "Visibilité sur notre marketplace",
      "Partage de données anonymisées",
      "Programme de co-marketing",
    ],
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
          d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>
    ),
    accent: "emerald",
  },
];

export default function Partenaires() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-amber-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Devenez partenaire Kioské
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Rejoignez notre écosystème et participez à la transformation du
            commerce en Afrique.
          </p>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
              Programmes partenaires
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
              Choisissez votre programme
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((partner) => (
              <div
                key={partner.title}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 flex flex-col"
              >
                <div
                  className={`w-14 h-14 ${
                    partner.accent === "amber"
                      ? "bg-amber-50"
                      : "bg-emerald-50"
                  } rounded-xl flex items-center justify-center mb-5`}
                >
                  {partner.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">
                  {partner.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {partner.description}
                </p>
                <div className="mt-auto">
                  <p className="text-sm font-semibold text-slate-700 mb-3">
                    Avantages :
                  </p>
                  <ul className="space-y-2.5">
                    {partner.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2.5 text-sm text-slate-600"
                      >
                        <svg
                          className={`w-5 h-5 shrink-0 ${
                            partner.accent === "amber"
                              ? "text-amber-500"
                              : "text-emerald-500"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">
              Processus
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
              Comment devenir partenaire
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Contactez-nous",
                description:
                  "Remplissez le formulaire de contact partenaire avec les informations sur votre entreprise et vos objectifs.",
              },
              {
                step: "02",
                title: "Échangeons",
                description:
                  "Notre équipe partenariats vous contacte sous 48h pour un premier échange et évaluer les synergies.",
              },
              {
                step: "03",
                title: "Collaborons",
                description:
                  "Nous définissons ensemble les termes du partenariat et vous intégrez l'écosystème Kioské.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 text-center"
              >
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="font-display text-sm font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Partners */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
              Ils nous font confiance
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
              Nos partenaires
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "FinTech CI",
              "PayGate Africa",
              "LogiPro",
              "DigiCommerce",
            ].map((name) => (
              <div
                key={name}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 flex items-center justify-center"
              >
                <span className="font-display text-lg font-bold text-slate-300">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à devenir partenaire ?
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-xl mx-auto">
            Contactez notre équipe partenariats pour discuter des opportunités
            de collaboration et rejoindre l'écosystème Kioské.
          </p>
          <a
            href="mailto:partenaires@kioske.co"
            className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl text-lg hover:bg-emerald-50 transition-colors shadow-lg"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </PageLayout>
  );
}

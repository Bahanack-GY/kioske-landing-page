import PageLayout from "../components/PageLayout";

const tiers = [
  {
    name: "Starter",
    price: "Gratuit",
    priceSuffix: "",
    description: "Ideal pour demarrer et tester Kioske sans engagement.",
    highlighted: false,
    badge: null,
    features: [
      "1 point de vente",
      "Jusqu'a 100 produits",
      "Caisse & encaissements",
      "Rapports de base",
      "Support par email",
    ],
    cta: "Commencer gratuitement",
    ctaStyle:
      "bg-slate-900 text-white hover:bg-slate-800",
  },
  {
    name: "Pro",
    price: "19 900 FCFA",
    priceSuffix: "/mois",
    description: "Pour les commerces en croissance qui veulent aller plus loin.",
    highlighted: true,
    badge: "Populaire",
    features: [
      "Jusqu'a 3 points de vente",
      "Produits illimites",
      "Caisse & encaissements",
      "Rapports & analytics avances",
      "Assistant IA",
      "Integrations mobile money",
      "Gestion des clients & fidelite",
      "Support prioritaire",
    ],
    cta: "Essayer 14 jours gratuit",
    ctaStyle:
      "bg-emerald-600 text-white hover:bg-emerald-700",
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    priceSuffix: "",
    description: "Pour les grandes enseignes et les besoins specifiques.",
    highlighted: false,
    badge: null,
    features: [
      "Points de vente illimites",
      "Produits illimites",
      "Toutes les fonctionnalites Pro",
      "Automatisations avancées",
      "Account manager dedie",
      "SLA garanti",
      "Formation sur site",
    ],
    cta: "Contacter l'equipe",
    ctaStyle:
      "bg-slate-900 text-white hover:bg-slate-800",
  },
];

export default function Tarifs() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Des tarifs simples et transparents
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Choisissez le plan qui correspond a la taille de votre activite.
            Evoluez a votre rythme, sans surprise.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-2xl p-8 shadow-sm ${
                tier.highlighted
                  ? "border-2 border-emerald-500 shadow-lg"
                  : "border border-slate-200"
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  {tier.badge}
                </span>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">
                  {tier.name}
                </h3>
                <div className="mb-3">
                  <span className="font-display text-4xl font-bold text-slate-900">
                    {tier.price}
                  </span>
                  {tier.priceSuffix && (
                    <span className="text-slate-500 text-base ml-1">
                      {tier.priceSuffix}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-600">{tier.description}</p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={`block w-full text-center font-semibold px-6 py-3 rounded-xl transition-colors ${tier.ctaStyle}`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
            Des questions sur nos tarifs?
          </h2>
          <p className="text-slate-600 mb-6">
            Contactez notre equipe commerciale pour obtenir une offre
            personnalisee ou consultez notre centre d'aide.
          </p>
          <a
            href="#"
            className="inline-block border border-slate-300 text-slate-700 font-semibold px-8 py-3 rounded-xl hover:bg-slate-100 transition-colors"
          >
            Voir la FAQ
          </a>
        </div>
      </section>
    </PageLayout>
  );
}

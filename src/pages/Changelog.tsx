import PageLayout from "../components/PageLayout";

type BadgeType = "Nouveau" | "Amelioration" | "Correction";

interface ChangeEntry {
  badge: BadgeType;
  text: string;
}

interface VersionEntry {
  version: string;
  date: string;
  title: string;
  changes: ChangeEntry[];
}

const badgeStyles: Record<BadgeType, string> = {
  Nouveau: "bg-emerald-100 text-emerald-700",
  Amelioration: "bg-blue-100 text-blue-700",
  Correction: "bg-amber-100 text-amber-700",
};

const changelog: VersionEntry[] = [
  {
    version: "v2.4.0",
    date: "15 fevrier 2026",
    title: "Assistant IA et rapports avances",
    changes: [
      {
        badge: "Nouveau",
        text: "Assistant IA pour recommandations de reapprovisionnement et detection d'anomalies.",
      },
      {
        badge: "Nouveau",
        text: "Nouveaux graphiques interactifs dans les rapports de vente.",
      },
      {
        badge: "Amelioration",
        text: "Performance amelioree du tableau de bord avec chargement 40% plus rapide.",
      },
      {
        badge: "Correction",
        text: "Correction de l'export PDF qui tronquait les noms de produits longs.",
      },
    ],
  },
  {
    version: "v2.3.0",
    date: "20 janvier 2026",
    title: "Integration MTN Mobile Money",
    changes: [
      {
        badge: "Nouveau",
        text: "Support de MTN Mobile Money comme moyen de paiement en caisse.",
      },
      {
        badge: "Amelioration",
        text: "Interface de caisse redessinee pour une prise en main plus intuitive.",
      },
      {
        badge: "Amelioration",
        text: "Les notifications WhatsApp supportent maintenant les images de produits.",
      },
      {
        badge: "Correction",
        text: "Correction d'un bug de synchronisation multi-boutique lors de transferts de stock.",
      },
    ],
  },
  {
    version: "v2.2.0",
    date: "5 decembre 2025",
    title: "Programme de fidelite clients",
    changes: [
      {
        badge: "Nouveau",
        text: "Programme de fidelite avec points et recompenses configurables par boutique.",
      },
      {
        badge: "Nouveau",
        text: "Segmentation avancee des clients par volume d'achat et frequence.",
      },
      {
        badge: "Amelioration",
        text: "Amelioration de la recherche de produits avec filtres par categorie et fournisseur.",
      },
      {
        badge: "Correction",
        text: "Correction du calcul de TVA pour les produits en promotion.",
      },
    ],
  },
  {
    version: "v2.1.0",
    date: "10 novembre 2025",
    title: "Mode hors ligne ameliore",
    changes: [
      {
        badge: "Nouveau",
        text: "Mode hors ligne complet : enregistrez des ventes meme sans connexion internet.",
      },
      {
        badge: "Amelioration",
        text: "Synchronisation automatique des donnees des la reconnexion, sans perte.",
      },
      {
        badge: "Amelioration",
        text: "Export des rapports au format Excel (.xlsx) en plus du PDF.",
      },
      {
        badge: "Correction",
        text: "Correction de l'affichage des dates dans le fuseau horaire de l'utilisateur.",
      },
    ],
  },
  {
    version: "v2.0.0",
    date: "1 octobre 2025",
    title: "Kioske 2.0 - Refonte majeure",
    changes: [
      {
        badge: "Nouveau",
        text: "Nouvelle interface utilisateur entierement redessinee, plus moderne et rapide.",
      },
      {
        badge: "Nouveau",
        text: "Support multi-boutique : gerez plusieurs points de vente depuis un seul compte.",
      },
      {
        badge: "Amelioration",
        text: "Migration vers une nouvelle architecture pour des performances 3x superieures.",
      },
      {
        badge: "Correction",
        text: "Plus de 50 corrections de bugs issus des retours de la communaute.",
      },
    ],
  },
];

export default function Changelog() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Changelog
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Suivez l'evolution de Kioske. Nouvelles fonctionnalites,
            ameliorations et corrections a chaque mise a jour.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-200" />

            <div className="space-y-12">
              {changelog.map((entry) => (
                <div key={entry.version} className="relative pl-14">
                  {/* Dot on timeline */}
                  <div className="absolute left-2.5 top-1.5 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-sm" />

                  {/* Version Header */}
                  <div className="mb-4">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span className="font-display text-xl font-bold text-slate-900">
                        {entry.version}
                      </span>
                      <span className="text-sm text-slate-500">
                        {entry.date}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-slate-700">
                      {entry.title}
                    </h3>
                  </div>

                  {/* Changes */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <ul className="space-y-3">
                      {entry.changes.map((change, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span
                            className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mt-0.5 shrink-0 ${
                              badgeStyles[change.badge]
                            }`}
                          >
                            {change.badge}
                          </span>
                          <span className="text-sm text-slate-700 leading-relaxed">
                            {change.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
            Restez informe des nouveautes
          </h2>
          <p className="text-slate-600 mb-6">
            Abonnez-vous a notre newsletter pour recevoir les mises a jour
            directement dans votre boite mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <button className="bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors text-sm">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

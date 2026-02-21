import PageLayout from "../components/PageLayout";

const articles = [
  {
    id: 1,
    category: "Produit",
    title: "Kioské 2.0 : une nouvelle interface pensée pour la rapidité",
    excerpt:
      "Découvrez les améliorations majeures de notre dernière mise à jour, conçue pour accélérer chaque interaction au quotidien.",
    date: "15 Fév 2026",
    gradient: "from-emerald-400 to-emerald-600",
    categoryColor: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 2,
    category: "Commerce",
    title: "5 stratégies pour augmenter vos ventes en saison creuse",
    excerpt:
      "Les périodes calmes ne sont pas une fatalité. Voici comment les commerçants les plus performants maintiennent leur chiffre d'affaires.",
    date: "8 Fév 2026",
    gradient: "from-amber-400 to-amber-600",
    categoryColor: "bg-amber-100 text-amber-700",
  },
  {
    id: 3,
    category: "Tutoriel",
    title: "Comment configurer votre inventaire en moins de 10 minutes",
    excerpt:
      "Un guide pas à pas pour importer, organiser et suivre votre stock efficacement avec Kioské.",
    date: "1 Fév 2026",
    gradient: "from-emerald-500 to-teal-600",
    categoryColor: "bg-slate-100 text-slate-700",
  },
  {
    id: 4,
    category: "Commerce",
    title: "Le mobile money, levier de croissance pour les commerces de proximité",
    excerpt:
      "Comment l'adoption du paiement mobile transforme les habitudes d'achat et booste la fidélisation client.",
    date: "25 Jan 2026",
    gradient: "from-amber-500 to-orange-500",
    categoryColor: "bg-amber-100 text-amber-700",
  },
  {
    id: 5,
    category: "Produit",
    title: "Nouveau : les rapports de vente automatisés",
    excerpt:
      "Recevez chaque semaine un résumé clair de vos performances, directement dans votre boîte de réception.",
    date: "18 Jan 2026",
    gradient: "from-emerald-400 to-cyan-500",
    categoryColor: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 6,
    category: "Tutoriel",
    title: "Gérer plusieurs points de vente depuis un seul tableau de bord",
    excerpt:
      "Apprenez à centraliser la gestion de vos boutiques pour gagner en visibilité et en efficacité.",
    date: "10 Jan 2026",
    gradient: "from-amber-400 to-yellow-500",
    categoryColor: "bg-slate-100 text-slate-700",
  },
];

export default function Blog() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-emerald-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Blog Kioské
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Conseils, actualités produit et tendances du commerce en Afrique.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 px-6 border-b border-slate-200">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-3">
          <span className="text-sm text-slate-500 font-medium mr-2">
            Filtrer :
          </span>
          {["Tous", "Produit", "Commerce", "Tutoriel"].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                cat === "Tous"
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-white text-slate-600 border-slate-200 hover:border-emerald-300 hover:text-emerald-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden group"
              >
                {/* Gradient Thumbnail */}
                <div
                  className={`h-48 bg-gradient-to-br ${article.gradient} relative`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${article.categoryColor}`}
                    >
                      {article.category}
                    </span>
                    <span className="text-sm text-slate-400">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-5">
                    {article.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-emerald-600 font-semibold text-sm group-hover:text-emerald-700"
                  >
                    Lire l'article
                    <span className="ml-1">&rarr;</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">
            Restez informé
          </h2>
          <p className="text-slate-600 mb-8">
            Recevez nos derniers articles et conseils directement dans votre
            boîte mail. Pas de spam, promis.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 px-4 py-3 border border-slate-200 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

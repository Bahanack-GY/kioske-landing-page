import { useState, useMemo } from "react";
import PageLayout from "../components/PageLayout";
import demoVideo from "../assets/Video/demo.mp4";

const categories = [
  { id: "all", label: "Tout" },
  { id: "demarrage", label: "Démarrage" },
  { id: "produits", label: "Produits & Stocks" },
  { id: "equipe", label: "Équipe" },
  { id: "ventes", label: "Ventes & Caisse" },
  { id: "rapports", label: "Rapports" },
  { id: "clients", label: "Clients" },
];

const videos = [
  {
    id: 1,
    title: "Comment créer votre compte Kioské",
    description: "Inscrivez-vous et configurez votre boutique en moins de 5 minutes.",
    duration: "3:24",
    category: "demarrage",
    thumbnail: "emerald",
  },
  {
    id: 2,
    title: "Comment ajouter un employé",
    description: "Invitez vos collaborateurs et définissez leurs rôles et permissions.",
    duration: "4:12",
    category: "equipe",
    thumbnail: "amber",
  },
  {
    id: 3,
    title: "Comment ajouter un produit",
    description: "Créez vos fiches produits avec photos, variantes et prix.",
    duration: "5:38",
    category: "produits",
    thumbnail: "emerald",
  },
  {
    id: 4,
    title: "Comment gérer votre stock",
    description: "Suivez vos niveaux de stock, entrées, sorties et alertes de réapprovisionnement.",
    duration: "6:15",
    category: "produits",
    thumbnail: "amber",
  },
  {
    id: 5,
    title: "Comment effectuer une vente",
    description: "Utilisez la caisse pour encaisser vos clients rapidement.",
    duration: "4:47",
    category: "ventes",
    thumbnail: "emerald",
  },
  {
    id: 6,
    title: "Comment consulter les rapports de ventes",
    description: "Analysez vos performances avec les tableaux de bord et graphiques.",
    duration: "5:02",
    category: "rapports",
    thumbnail: "amber",
  },
  {
    id: 7,
    title: "Comment gérer vos clients fidèles",
    description: "Créez des profils clients, consultez l'historique d'achat et les crédits.",
    duration: "3:56",
    category: "clients",
    thumbnail: "emerald",
  },
  {
    id: 8,
    title: "Comment configurer les permissions",
    description: "Définissez ce que chaque employé peut voir et modifier dans l'application.",
    duration: "4:33",
    category: "equipe",
    thumbnail: "amber",
  },
  {
    id: 9,
    title: "Comment appliquer un rabais ou une remise",
    description: "Appliquez des réductions par produit ou sur l'ensemble du panier.",
    duration: "2:48",
    category: "ventes",
    thumbnail: "emerald",
  },
  {
    id: 10,
    title: "Comment exporter vos données",
    description: "Exportez vos rapports, listes de produits et données clients en CSV ou PDF.",
    duration: "3:10",
    category: "rapports",
    thumbnail: "amber",
  },
  {
    id: 11,
    title: "Comment paramétrer votre boutique",
    description: "Personnalisez le nom, logo, devise et informations de votre commerce.",
    duration: "4:20",
    category: "demarrage",
    thumbnail: "emerald",
  },
  {
    id: 12,
    title: "Comment utiliser l'assistant IA",
    description: "Posez des questions et obtenez des suggestions intelligentes pour votre commerce.",
    duration: "5:45",
    category: "rapports",
    thumbnail: "amber",
  },
];

export default function CentreAide() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [playingId, setPlayingId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return videos.filter((v) => {
      const matchCategory =
        activeCategory === "all" || v.category === activeCategory;
      const matchSearch =
        search === "" ||
        v.title.toLowerCase().includes(search.toLowerCase()) ||
        v.description.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-[#fafbfc] pt-16 pb-12 lg:pt-24 lg:pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-400/8 rounded-full blur-[140px]" />

        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold tracking-wide uppercase mb-5">
            Centre d'aide
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Comment pouvons-nous{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-400 to-amber-500 bg-clip-text text-transparent">
              vous aider ?
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            Trouvez des tutoriels vidéo pour maîtriser toutes les
            fonctionnalités de Kioské.
          </p>

          {/* Search bar */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 via-emerald-300/10 to-amber-400/15 rounded-2xl blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center bg-white rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-900/[0.04] overflow-hidden transition-all duration-300 group-focus-within:border-emerald-300 group-focus-within:shadow-emerald-500/10">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-slate-400 ml-5 flex-shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher un tutoriel... ex: ajouter un employé"
                  className="w-full px-4 py-4.5 text-sm text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="mr-4 p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories + Videos */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                    : "bg-white text-slate-500 border border-slate-200/80 hover:border-slate-300 hover:text-slate-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Results count */}
          {search && (
            <p className="text-sm text-slate-400 mb-6 text-center">
              {filtered.length} résultat{filtered.length !== 1 ? "s" : ""} pour
              "{search}"
            </p>
          )}

          {/* Video grid */}
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((video) => (
                <article
                  key={video.id}
                  className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-slate-900/[0.06] transition-all duration-300 overflow-hidden hover:-translate-y-0.5"
                >
                  {/* Thumbnail / Video */}
                  <div className="relative aspect-video bg-slate-950 overflow-hidden">
                    {playingId === video.id ? (
                      <video
                        src={demoVideo}
                        className="w-full h-full object-cover"
                        autoPlay
                        controls
                        playsInline
                        onEnded={() => setPlayingId(null)}
                      />
                    ) : (
                      <>
                        <div
                          className={`absolute inset-0 ${
                            video.thumbnail === "emerald"
                              ? "bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-700"
                              : "bg-gradient-to-br from-amber-500 via-amber-400 to-amber-600"
                          }`}
                        />
                        {/* Grid decoration */}
                        <div className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                            backgroundSize: "24px 24px",
                          }}
                        />
                        {/* Play icon */}
                        <button
                          onClick={() => setPlayingId(video.id)}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <svg
                              viewBox="0 0 24 24"
                              className="w-6 h-6 text-white ml-0.5"
                              fill="currentColor"
                            >
                              <path d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36A1 1 0 008 5.14z" />
                            </svg>
                          </div>
                        </button>
                        {/* Duration badge */}
                        <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
                          {video.duration}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[11px] font-medium uppercase tracking-wide mb-2.5">
                      {categories.find((c) => c.id === video.category)?.label}
                    </span>
                    <h3 className="font-display font-semibold text-slate-900 leading-snug group-hover:text-emerald-600 transition-colors">
                      {video.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-5">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 text-slate-400">
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-slate-900">
                Aucun résultat trouvé
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Essayez avec d'autres mots-clés ou explorez les catégories.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("all");
                }}
                className="mt-5 text-sm font-medium text-emerald-600 hover:text-emerald-500 transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}

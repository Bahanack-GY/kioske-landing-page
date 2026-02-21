import PageLayout from "../components/PageLayout";

const positions = [
  {
    title: "Développeur Full-Stack",
    department: "Ingénierie",
    location: "Yaoundé",
    type: "CDI",
    description:
      "Concevez et développez les fonctionnalités clés de notre plateforme, du backend au frontend, dans un environnement agile et collaboratif.",
  },
  {
    title: "Designer UI/UX",
    department: "Design",
    location: "Yaoundé",
    type: "CDI",
    description:
      "Créez des interfaces intuitives et élégantes qui simplifient la vie de milliers de commerçants au quotidien.",
  },
  {
    title: "Commercial Terrain",
    department: "Commercial",
    location: "Yaoundé",
    type: "CDI",
    description:
      "Allez à la rencontre des commerçants, comprenez leurs besoins et accompagnez-les dans l'adoption de Kioské.",
  },
  {
    title: "Customer Success Manager",
    department: "Support",
    location: "Remote",
    type: "CDI",
    description:
      "Assurez la satisfaction et la fidélisation de nos clients en les accompagnant dans l'utilisation optimale de la plateforme.",
  },
];

const perks = [
  {
    title: "Flexibilité",
    description:
      "Travail hybride avec possibilité de télétravail. Nous faisons confiance à notre équipe.",
    icon: (
      <svg
        className="w-7 h-7 text-emerald-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Formation continue",
    description:
      "Budget dédié à votre développement professionnel : conférences, cours en ligne, certifications.",
    icon: (
      <svg
        className="w-7 h-7 text-emerald-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    title: "Impact réel",
    description:
      "Votre travail touche directement des milliers de commerçants. Ici, chaque contribution compte.",
    icon: (
      <svg
        className="w-7 h-7 text-emerald-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    ),
  },
  {
    title: "Équipement fourni",
    description:
      "MacBook, écran, et tout le matériel nécessaire pour travailler dans les meilleures conditions.",
    icon: (
      <svg
        className="w-7 h-7 text-emerald-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
        />
      </svg>
    ),
  },
];

export default function Carrieres() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-amber-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Rejoignez l'aventure Kioské
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Construisez avec nous l'avenir du commerce en Afrique. Nous
            cherchons des talents passionnés et ambitieux.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
              Postes ouverts
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
              Nos offres actuelles
            </h2>
          </div>
          <div className="space-y-5">
            {positions.map((position) => (
              <div
                key={position.title}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm p-7 hover:border-emerald-200 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
                      {position.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {position.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 bg-slate-50 px-3 py-1 rounded-full">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                          />
                        </svg>
                        {position.location}
                      </span>
                      <span className="inline-flex items-center text-sm text-slate-500 bg-slate-50 px-3 py-1 rounded-full">
                        {position.type}
                      </span>
                      <span className="inline-flex items-center text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full font-medium">
                        {position.department}
                      </span>
                    </div>
                  </div>
                  <div className="md:ml-4 shrink-0">
                    <a
                      href="#"
                      className="inline-flex items-center px-5 py-2.5 bg-emerald-600 text-white font-semibold rounded-xl text-sm hover:bg-emerald-700 transition-colors"
                    >
                      Postuler
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">
              Avantages
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
              Pourquoi nous rejoindre
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm p-7 flex gap-5"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                  {perk.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Vous ne trouvez pas votre poste ?
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-xl mx-auto">
            Envoyez-nous une candidature spontanée. Nous sommes toujours à la
            recherche de profils exceptionnels.
          </p>
          <a
            href="mailto:careers@kioske.co"
            className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl text-lg hover:bg-emerald-50 transition-colors shadow-lg"
          >
            Candidature spontanée
          </a>
        </div>
      </section>
    </PageLayout>
  );
}

import PageLayout from "../components/PageLayout";

const channels = [
  {
    name: "Forum Kioské",
    description:
      "Posez vos questions, partagez vos retours d'expérience et aidez d'autres commerçants de la communauté.",
    members: "2 400+",
    cta: "Rejoindre le forum",
    href: "#",
    color: "emerald",
    icon: (
      <svg
        className="w-7 h-7 text-emerald-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
  },
  {
    name: "Discord",
    description:
      "Rejoignez notre serveur Discord pour des discussions en temps réel, de l'entraide et des annonces exclusives.",
    members: "1 850+",
    cta: "Rejoindre Discord",
    href: "#",
    color: "indigo",
    icon: (
      <svg
        className="w-7 h-7 text-indigo-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
      </svg>
    ),
  },
  {
    name: "Groupe WhatsApp",
    description:
      "Échangez directement avec d'autres commerçants Kioské au Cameroun et dans toute l'Afrique Centrale.",
    members: "980+",
    cta: "Rejoindre le groupe",
    href: "#",
    color: "green",
    icon: (
      <svg
        className="w-7 h-7 text-green-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    description:
      "Contribuez au développement de Kioské, signalez des bugs et proposez de nouvelles fonctionnalités.",
    members: "350+",
    cta: "Voir sur GitHub",
    href: "#",
    color: "slate",
    icon: (
      <svg
        className="w-7 h-7 text-slate-700"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

const colorMap: Record<string, { bg: string; border: string; cta: string; ctaHover: string; badge: string; badgeText: string }> = {
  emerald: {
    bg: "bg-emerald-50",
    border: "hover:border-emerald-200",
    cta: "bg-emerald-600",
    ctaHover: "hover:bg-emerald-700",
    badge: "bg-emerald-50 border-emerald-200",
    badgeText: "text-emerald-700",
  },
  indigo: {
    bg: "bg-indigo-50",
    border: "hover:border-indigo-200",
    cta: "bg-indigo-600",
    ctaHover: "hover:bg-indigo-700",
    badge: "bg-indigo-50 border-indigo-200",
    badgeText: "text-indigo-700",
  },
  green: {
    bg: "bg-green-50",
    border: "hover:border-green-200",
    cta: "bg-green-600",
    ctaHover: "hover:bg-green-700",
    badge: "bg-green-50 border-green-200",
    badgeText: "text-green-700",
  },
  slate: {
    bg: "bg-slate-100",
    border: "hover:border-slate-300",
    cta: "bg-slate-800",
    ctaHover: "hover:bg-slate-900",
    badge: "bg-slate-100 border-slate-300",
    badgeText: "text-slate-700",
  },
};

export default function Communaute() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Communauté Kioské
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Rejoignez des milliers de commerçants qui partagent leurs
            expériences, s'entraident et grandissent ensemble.
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {channels.map((channel) => {
              const colors = colorMap[channel.color];
              return (
                <div
                  key={channel.name}
                  className={`rounded-2xl border border-slate-200 bg-white p-8 shadow-sm ${colors.border} transition-all`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-5`}
                  >
                    {channel.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
                    {channel.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {channel.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center rounded-full ${colors.badge} border px-3 py-1 text-xs font-semibold ${colors.badgeText}`}
                    >
                      <svg
                        className="w-3.5 h-3.5 mr-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {channel.members} membres
                    </span>
                    <a
                      href={channel.href}
                      className={`inline-flex items-center rounded-xl ${colors.cta} ${colors.ctaHover} px-4 py-2 text-sm font-semibold text-white transition-colors`}
                    >
                      {channel.cta}
                      <svg
                        className="w-4 h-4 ml-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Une communauté en pleine croissance
            </h2>
            <p className="text-slate-600">
              Des commerçants de toute l'Afrique de l'Ouest se rejoignent chaque
              jour.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Membres actifs", value: "5 500+" },
              { label: "Messages / mois", value: "12 000+" },
              { label: "Pays représentés", value: "8" },
              { label: "Questions résolues", value: "3 200+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-emerald-600 font-display mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-10 text-center">
            <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
              Devenez ambassadeur Kioské
            </h3>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto">
              Aidez d'autres commerçants à se lancer, partagez votre expertise
              et bénéficiez d'avantages exclusifs.
            </p>
            <a
              href="#"
              className="inline-block rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition-colors"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

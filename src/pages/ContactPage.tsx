import PageLayout from "../components/PageLayout";

export default function ContactPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Une question, une suggestion ou besoin d'aide ? Notre équipe est à
            votre disposition pour vous accompagner.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
                  Envoyez-nous un message
                </h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Votre nom"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Adresse e-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="vous@exemple.com"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="general">Question générale</option>
                      <option value="support">Support technique</option>
                      <option value="sales">Commercial / Ventes</option>
                      <option value="partnership">Partenariat</option>
                      <option value="billing">Facturation</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Décrivez votre demande en détail..."
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto rounded-xl bg-emerald-600 px-8 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>

            {/* Side info */}
            <div className="space-y-6">
              {/* Email */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-slate-900 mb-1">
                  E-mail
                </h3>
                <p className="text-slate-600 text-sm mb-2">
                  Réponse sous 24 heures
                </p>
                <a
                  href="mailto:contact@kioske.shop"
                  className="text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors"
                >
                  contact@kioske.shop
                </a>
              </div>

              {/* Phone */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-slate-900 mb-1">
                  Téléphone
                </h3>
                <p className="text-slate-600 text-sm mb-2">
                  Lun - Ven, 8h - 18h (GMT)
                </p>
                <a
                  href="tel:+237600000000"
                  className="text-amber-600 font-medium text-sm hover:text-amber-700 transition-colors"
                >
                  +237 6 00 00 00 00
                </a>
              </div>

              {/* Address */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-slate-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-slate-900 mb-1">
                  Adresse
                </h3>
                <p className="text-slate-600 text-sm">
                  Yaoundé, Cameroun
                </p>
              </div>

              {/* Response time */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <h3 className="font-display font-semibold text-emerald-900 mb-2">
                  Temps de réponse moyen
                </h3>
                <p className="text-3xl font-bold text-emerald-700 mb-1">
                  &lt; 4h
                </p>
                <p className="text-emerald-600 text-sm">
                  Durant les heures ouvrables
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
            <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
              Consultez notre centre d'aide
            </h3>
            <p className="text-slate-600 mb-6">
              Trouvez des réponses rapides dans notre FAQ et nos guides.
            </p>
            <a
              href="/centre-aide"
              className="inline-block rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
            >
              Voir le centre d'aide
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

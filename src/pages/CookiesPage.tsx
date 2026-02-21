import PageLayout from "../components/PageLayout";

export default function CookiesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Politique de cookies
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Cette politique explique comment Kioské utilise les cookies et
            technologies similaires sur sa plateforme.
          </p>
          <p className="text-sm text-slate-400 mt-4">
            Dernière mise à jour : 1er janvier 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                1. Qu'est-ce qu'un cookie ?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Un cookie est un petit fichier texte déposé sur votre appareil
                (ordinateur, tablette, smartphone) lors de votre visite sur un
                site web. Les cookies permettent au site de reconnaître votre
                appareil et de mémoriser certaines informations relatives à votre
                visite, comme vos préférences de langue ou vos identifiants de
                connexion.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Les cookies ne contiennent pas de programmes malveillants et ne
                peuvent pas accéder aux données stockées sur votre appareil. Ils
                sont largement utilisés pour faire fonctionner les sites web de
                manière plus efficace et pour fournir des informations aux
                propriétaires du site.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                2. Types de cookies utilisés
              </h2>

              {/* Essentiels */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Toujours actifs
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    Cookies essentiels
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  Ces cookies sont indispensables au fonctionnement de la
                  Plateforme. Ils permettent d'utiliser les fonctionnalités de
                  base comme la navigation entre les pages et l'accès aux zones
                  sécurisées.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead>
                      <tr className="border-b border-slate-100">
                        <th className="py-2 pr-4 font-semibold text-slate-700">
                          Cookie
                        </th>
                        <th className="py-2 pr-4 font-semibold text-slate-700">
                          Finalité
                        </th>
                        <th className="py-2 font-semibold text-slate-700">
                          Durée
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-600">
                      <tr className="border-b border-slate-50">
                        <td className="py-2 pr-4 font-mono text-xs">
                          kioske_session
                        </td>
                        <td className="py-2 pr-4">Session utilisateur</td>
                        <td className="py-2">Session</td>
                      </tr>
                      <tr className="border-b border-slate-50">
                        <td className="py-2 pr-4 font-mono text-xs">
                          kioske_csrf
                        </td>
                        <td className="py-2 pr-4">Protection CSRF</td>
                        <td className="py-2">Session</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-mono text-xs">
                          kioske_consent
                        </td>
                        <td className="py-2 pr-4">
                          Préférences de consentement
                        </td>
                        <td className="py-2">12 mois</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Analytiques */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-semibold text-amber-700">
                    Optionnels
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    Cookies analytiques
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  Ces cookies nous aident à comprendre comment les visiteurs
                  interagissent avec la Plateforme en collectant des
                  informations de manière anonyme. Ils nous permettent
                  d'améliorer continuellement l'expérience utilisateur.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead>
                      <tr className="border-b border-slate-100">
                        <th className="py-2 pr-4 font-semibold text-slate-700">
                          Cookie
                        </th>
                        <th className="py-2 pr-4 font-semibold text-slate-700">
                          Finalité
                        </th>
                        <th className="py-2 font-semibold text-slate-700">
                          Durée
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-600">
                      <tr className="border-b border-slate-50">
                        <td className="py-2 pr-4 font-mono text-xs">_ga</td>
                        <td className="py-2 pr-4">
                          Google Analytics - Identification
                        </td>
                        <td className="py-2">24 mois</td>
                      </tr>
                      <tr className="border-b border-slate-50">
                        <td className="py-2 pr-4 font-mono text-xs">_gid</td>
                        <td className="py-2 pr-4">
                          Google Analytics - Session
                        </td>
                        <td className="py-2">24 heures</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-mono text-xs">
                          _gat
                        </td>
                        <td className="py-2 pr-4">
                          Google Analytics - Limitation de débit
                        </td>
                        <td className="py-2">1 minute</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Marketing */}
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-slate-100 border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700">
                    Optionnels
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    Cookies marketing
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  Ces cookies sont utilisés pour suivre les visiteurs sur
                  différents sites web afin de leur proposer des publicités
                  pertinentes. Ils sont déposés par des partenaires
                  publicitaires tiers avec notre autorisation.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead>
                      <tr className="border-b border-slate-100">
                        <th className="py-2 pr-4 font-semibold text-slate-700">
                          Cookie
                        </th>
                        <th className="py-2 pr-4 font-semibold text-slate-700">
                          Finalité
                        </th>
                        <th className="py-2 font-semibold text-slate-700">
                          Durée
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-600">
                      <tr className="border-b border-slate-50">
                        <td className="py-2 pr-4 font-mono text-xs">_fbp</td>
                        <td className="py-2 pr-4">Facebook Pixel</td>
                        <td className="py-2">3 mois</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-mono text-xs">
                          _gcl_au
                        </td>
                        <td className="py-2 pr-4">
                          Google Ads - Conversion
                        </td>
                        <td className="py-2">3 mois</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                3. Gestion des cookies
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Vous pouvez gérer vos préférences en matière de cookies de
                plusieurs façons :
              </p>

              <h3 className="font-display text-lg font-semibold text-slate-800 mb-2">
                Bannière de consentement
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Lors de votre première visite, une bannière vous permet
                d'accepter ou de refuser les cookies non essentiels. Vous pouvez
                modifier vos choix à tout moment en cliquant sur le lien «
                Paramètres des cookies » situé en bas de chaque page.
              </p>

              <h3 className="font-display text-lg font-semibold text-slate-800 mb-2">
                Paramètres du navigateur
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Vous pouvez configurer votre navigateur pour accepter ou refuser
                les cookies. Voici les liens vers les pages de configuration des
                principaux navigateurs :
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700">
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700">
                    Safari
                  </a>
                </li>
                <li>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700">
                    Microsoft Edge
                  </a>
                </li>
              </ul>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 mt-4">
                <p className="text-amber-800 text-sm">
                  <strong>Note :</strong> Le blocage de certains cookies peut
                  affecter le fonctionnement de la Plateforme. Les cookies
                  essentiels ne peuvent pas être désactivés car ils sont
                  nécessaires au bon fonctionnement du service.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                4. Contact
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Pour toute question relative à cette politique de cookies ou à
                la gestion de vos données :
              </p>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-slate-700 mb-1">
                  <strong>Kioské SAS</strong>
                </p>
                <p className="text-slate-600 text-sm">
                  Délégué à la protection des données
                </p>
                <p className="text-slate-600 text-sm mt-2">
                  E-mail :{" "}
                  <a
                    href="mailto:privacy@kioske.shop"
                    className="text-emerald-600 hover:text-emerald-700"
                  >
                    privacy@kioske.shop
                  </a>
                </p>
                <p className="text-slate-600 text-sm">
                  Adresse : Yaoundé, Cameroun
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

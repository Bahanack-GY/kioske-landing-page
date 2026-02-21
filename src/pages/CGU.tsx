import PageLayout from "../components/PageLayout";

export default function CGU() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Les présentes conditions régissent l'utilisation de la plateforme
            Kioské. En utilisant nos services, vous acceptez ces conditions dans
            leur intégralité.
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
            {/* Article 1 */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                Article 1 - Objet
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Les présentes Conditions Générales d'Utilisation (ci-après «
                CGU ») ont pour objet de définir les modalités et conditions
                d'utilisation de la plateforme Kioské (ci-après « la Plateforme
                »), éditée par Kioské SAS, société de droit camerounais, dont le
                siège social est situé à Yaoundé, Cameroun.
              </p>
              <p className="text-slate-600 leading-relaxed">
                La Plateforme propose une solution de gestion commerciale
                complète destinée aux commerçants, incluant la gestion des
                ventes, des stocks, des paiements et des statistiques.
              </p>
            </div>

            {/* Article 2 */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                Article 2 - Inscription
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                L'accès aux services de la Plateforme nécessite la création d'un
                compte utilisateur. Pour créer un compte, l'utilisateur doit :
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>
                  Être une personne physique majeure ou une personne morale
                  dûment constituée.
                </li>
                <li>
                  Fournir des informations exactes, complètes et à jour lors de
                  l'inscription.
                </li>
                <li>
                  Choisir un mot de passe sécurisé et en préserver la
                  confidentialité.
                </li>
                <li>
                  Accepter les présentes CGU et la politique de confidentialité.
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                L'utilisateur est responsable de toute activité effectuée depuis
                son compte. Il s'engage à informer immédiatement Kioské de toute
                utilisation non autorisée de son compte.
              </p>
            </div>

            {/* Article 3 */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                Article 3 - Utilisation de la Plateforme
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                L'utilisateur s'engage à utiliser la Plateforme conformément à
                sa destination et aux présentes CGU. Il est notamment interdit
                de :
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>
                  Utiliser la Plateforme à des fins illicites ou contraires aux
                  bonnes moeurs.
                </li>
                <li>
                  Tenter d'accéder de manière non autorisée aux systèmes ou
                  données de Kioské.
                </li>
                <li>
                  Diffuser des virus, logiciels malveillants ou tout code
                  nuisible.
                </li>
                <li>
                  Reproduire, copier ou exploiter tout ou partie de la
                  Plateforme sans autorisation.
                </li>
                <li>
                  Utiliser des robots, scripts ou tout moyen automatisé pour
                  accéder à la Plateforme.
                </li>
                <li>
                  Revendre ou céder l'accès à son compte à un tiers.
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                Kioské se réserve le droit de suspendre ou de résilier l'accès
                de tout utilisateur ne respectant pas ces conditions, sans
                préavis ni indemnité.
              </p>
            </div>

            {/* Article 4 */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                Article 4 - Responsabilités
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong>Responsabilité de Kioské :</strong> Kioské s'engage à
                fournir un service de qualité et à assurer la disponibilité de
                la Plateforme dans les meilleures conditions. Toutefois, Kioské
                ne saurait être tenu responsable :
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>
                  Des interruptions temporaires de service liées à des
                  opérations de maintenance ou à des cas de force majeure.
                </li>
                <li>
                  Des dommages indirects résultant de l'utilisation ou de
                  l'impossibilité d'utiliser la Plateforme.
                </li>
                <li>
                  Des actions de tiers, notamment des partenaires de paiement.
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                <strong>Responsabilité de l'utilisateur :</strong> L'utilisateur
                est seul responsable de l'utilisation qu'il fait de la
                Plateforme, des données qu'il y saisit et des transactions qu'il
                effectue. Il garantit la conformité de son activité commerciale
                avec la réglementation en vigueur.
              </p>
            </div>

            {/* Article 5 */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                Article 5 - Propriété intellectuelle
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                L'ensemble des éléments constituant la Plateforme (textes,
                graphismes, logiciels, images, vidéos, sons, bases de données,
                marques, logos) sont la propriété exclusive de Kioské SAS ou de
                ses concédants de licence.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Toute reproduction, représentation, modification, distribution
                ou exploitation de tout ou partie de ces éléments, par quelque
                procédé et sur quelque support que ce soit, sans l'autorisation
                écrite préalable de Kioské, est strictement interdite et
                constitue un acte de contrefaçon sanctionné par le Code de la
                propriété intellectuelle.
              </p>
            </div>

            {/* Article 6 */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                Article 6 - Tarification et paiement
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Les tarifs des services Kioské sont indiqués sur la page de
                tarification de la Plateforme. Kioské se réserve le droit de
                modifier ses tarifs à tout moment, sous réserve d'en informer
                les utilisateurs avec un préavis de 30 jours.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Le paiement des abonnements est effectué selon les modalités
                choisies lors de la souscription (mensuel ou annuel). En cas de
                non-paiement, Kioské se réserve le droit de suspendre l'accès
                aux services premium après un rappel de 15 jours.
              </p>
            </div>

            {/* Article 7 */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                Article 7 - Résiliation
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                L'utilisateur peut résilier son compte à tout moment depuis les
                paramètres de son compte ou en contactant le support. La
                résiliation prend effet :
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>
                  Immédiatement pour les comptes gratuits.
                </li>
                <li>
                  À la fin de la période d'abonnement en cours pour les comptes
                  payants.
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                Kioské peut résilier le compte d'un utilisateur en cas de
                violation des présentes CGU, après mise en demeure restée sans
                effet pendant 15 jours. En cas de manquement grave, la
                résiliation peut être immédiate.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                Après résiliation, les données de l'utilisateur sont conservées
                pendant 30 jours, période pendant laquelle il peut demander leur
                exportation. Passé ce délai, les données sont supprimées.
              </p>
            </div>

            {/* Article 8 */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                Article 8 - Droit applicable et juridiction compétente
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Les présentes CGU sont régies par le droit camerounais. En cas de
                litige relatif à l'interprétation ou à l'exécution des présentes
                CGU, les parties s'efforceront de trouver une solution amiable.
              </p>
              <p className="text-slate-600 leading-relaxed">
                À défaut d'accord amiable dans un délai de 30 jours, le litige
                sera soumis aux tribunaux compétents de Yaoundé, Cameroun.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                Contact
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Pour toute question relative aux présentes CGU :
              </p>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-slate-700 mb-1">
                  <strong>Kioské SAS</strong>
                </p>
                <p className="text-slate-600 text-sm mt-2">
                  E-mail :{" "}
                  <a
                    href="mailto:legal@kioske.shop"
                    className="text-emerald-600 hover:text-emerald-700"
                  >
                    legal@kioske.shop
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

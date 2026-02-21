import PageLayout from "../components/PageLayout";

export default function Confidentialite() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Nous prenons la protection de vos données personnelles très au
            sérieux. Cette politique décrit comment nous collectons, utilisons et
            protégeons vos informations.
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
                1. Collecte des données
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Dans le cadre de l'utilisation de la plateforme Kioské, nous
                collectons les données personnelles suivantes :
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>
                  <strong>Données d'identification :</strong> nom, prénom,
                  adresse e-mail, numéro de téléphone.
                </li>
                <li>
                  <strong>Données commerciales :</strong> informations relatives
                  à votre activité commerciale, produits, transactions.
                </li>
                <li>
                  <strong>Données de connexion :</strong> adresse IP, type de
                  navigateur, pages consultées, durée de visite.
                </li>
                <li>
                  <strong>Données de paiement :</strong> informations bancaires
                  et de paiement mobile money (traitées de manière sécurisée par
                  nos partenaires de paiement).
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                Ces données sont collectées lorsque vous créez un compte,
                utilisez nos services, ou nous contactez directement.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                2. Utilisation des données
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Vos données personnelles sont utilisées pour les finalités
                suivantes :
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>
                  Fournir, maintenir et améliorer nos services de gestion
                  commerciale.
                </li>
                <li>
                  Traiter vos transactions et gérer votre compte marchand.
                </li>
                <li>
                  Vous envoyer des communications relatives à votre compte et à
                  nos services (notifications, mises à jour, alertes de
                  sécurité).
                </li>
                <li>
                  Personnaliser votre expérience et vous proposer des
                  fonctionnalités adaptées.
                </li>
                <li>
                  Assurer la sécurité de la plateforme et prévenir les fraudes.
                </li>
                <li>
                  Respecter nos obligations légales et réglementaires.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                3. Partage des données
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Nous ne vendons jamais vos données personnelles. Nous pouvons
                partager vos informations dans les cas suivants :
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>
                  <strong>Prestataires de services :</strong> hébergement,
                  traitement des paiements, envoi d'e-mails. Ces partenaires
                  sont contractuellement tenus de protéger vos données.
                </li>
                <li>
                  <strong>Obligations légales :</strong> en réponse à une
                  demande d'une autorité judiciaire ou administrative
                  compétente.
                </li>
                <li>
                  <strong>Protection des droits :</strong> lorsque nécessaire
                  pour protéger les droits, la propriété ou la sécurité de
                  Kioské, de nos utilisateurs ou du public.
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                4. Sécurité des données
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Nous mettons en oeuvre des mesures techniques et
                organisationnelles appropriées pour protéger vos données
                personnelles contre tout accès non autorisé, modification,
                divulgation ou destruction :
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>
                  Chiffrement des données en transit (TLS/SSL) et au repos.
                </li>
                <li>
                  Authentification à deux facteurs disponible pour tous les
                  comptes.
                </li>
                <li>
                  Audits de sécurité réguliers et tests de pénétration.
                </li>
                <li>
                  Accès restreint aux données personnelles selon le principe du
                  moindre privilège.
                </li>
                <li>
                  Sauvegardes régulières et plan de reprise d'activité.
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                5. Vos droits
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Conformément à la réglementation applicable en matière de
                protection des données personnelles, vous disposez des droits
                suivants :
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>
                  <strong>Droit d'accès :</strong> obtenir la confirmation que
                  vos données sont traitées et en obtenir une copie.
                </li>
                <li>
                  <strong>Droit de rectification :</strong> demander la
                  correction de données inexactes ou incomplètes.
                </li>
                <li>
                  <strong>Droit de suppression :</strong> demander l'effacement
                  de vos données dans les conditions prévues par la loi.
                </li>
                <li>
                  <strong>Droit d'opposition :</strong> vous opposer au
                  traitement de vos données pour des motifs légitimes.
                </li>
                <li>
                  <strong>Droit à la portabilité :</strong> recevoir vos données
                  dans un format structuré et couramment utilisé.
                </li>
                <li>
                  <strong>Droit de limitation :</strong> demander la limitation
                  du traitement de vos données.
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                Pour exercer ces droits, contactez-nous à l'adresse indiquée
                ci-dessous. Nous nous engageons à répondre dans un délai de 30
                jours.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                6. Conservation des données
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Vos données personnelles sont conservées pendant la durée de
                votre utilisation de nos services, puis pendant la durée
                nécessaire au respect de nos obligations légales (notamment
                comptables et fiscales). Les données de connexion sont conservées
                pendant une durée maximale de 12 mois. À l'expiration de ces
                délais, vos données sont supprimées ou anonymisées de manière
                irréversible.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                7. Contact
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Pour toute question relative à cette politique de
                confidentialité ou pour exercer vos droits, vous pouvez nous
                contacter :
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

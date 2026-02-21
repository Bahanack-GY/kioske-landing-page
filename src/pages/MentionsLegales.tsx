import PageLayout from "../components/PageLayout";

export default function MentionsLegales() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Mentions légales
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Informations légales relatives à l'éditeur, à l'hébergement et aux
            conditions d'utilisation du site kioske.shop.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            {/* Éditeur */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                1. Éditeur du site
              </h2>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <div className="space-y-3 text-slate-600">
                  <div>
                    <span className="font-semibold text-slate-700">
                      Raison sociale :
                    </span>{" "}
                    Kioské SAS
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">
                      Forme juridique :
                    </span>{" "}
                    Société par Actions Simplifiée (SAS)
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">
                      Siège social :
                    </span>{" "}
                    Yaoundé, Cameroun
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">
                      Capital social :
                    </span>{" "}
                    1 000 000 FCFA
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">
                      Numéro RCCM :
                    </span>{" "}
                    CM-YAO-2025-B-12345
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">
                      Numéro CC :
                    </span>{" "}
                    2512345 A
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">
                      Téléphone :
                    </span>{" "}
                    <a
                      href="tel:+237600000000"
                      className="text-emerald-600 hover:text-emerald-700"
                    >
                      +237 6 00 00 00 00
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">
                      E-mail :
                    </span>{" "}
                    <a
                      href="mailto:contact@kioske.shop"
                      className="text-emerald-600 hover:text-emerald-700"
                    >
                      contact@kioske.shop
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Directeur de publication */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                2. Directeur de la publication
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Le directeur de la publication du site kioske.shop est le
                représentant légal de la société Kioské SAS, en sa qualité de
                Président.
              </p>
              <p className="text-slate-600 leading-relaxed mt-2">
                Contact :{" "}
                <a
                  href="mailto:direction@kioske.shop"
                  className="text-emerald-600 hover:text-emerald-700"
                >
                  direction@kioske.shop
                </a>
              </p>
            </div>

            {/* Hébergement */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                3. Hébergement
              </h2>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <div className="space-y-3 text-slate-600">
                  <div>
                    <span className="font-semibold text-slate-700">
                      Hébergeur :
                    </span>{" "}
                    Vercel Inc.
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">
                      Adresse :
                    </span>{" "}
                    440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">
                      Site web :
                    </span>{" "}
                    <a
                      href="https://vercel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700"
                    >
                      vercel.com
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mt-4">
                Les données de la plateforme sont hébergées dans des centres de
                données conformes aux normes internationales de sécurité, avec
                des sauvegardes régulières et un chiffrement des données au
                repos et en transit.
              </p>
            </div>

            {/* ART */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                4. Protection des données personnelles (ART)
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Conformément à la loi n° 2010/012 du 21 décembre 2010 relative à la
                cybersécurité et la cybercriminalité au Cameroun,
                Kioské s'engage à respecter la vie privée de ses utilisateurs et
                à protéger leurs données personnelles.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Le traitement de données personnelles mis en oeuvre par Kioské a
                fait l'objet d'une déclaration auprès de l'Agence de
                Régulation des Télécommunications du Cameroun (ART).
              </p>
              <p className="text-slate-600 leading-relaxed">
                Pour plus d'informations sur la collecte et le traitement de vos
                données personnelles, veuillez consulter notre{" "}
                <a
                  href="/confidentialite"
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  politique de confidentialité
                </a>
                .
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                Vous disposez d'un droit d'accès, de rectification, de
                suppression et d'opposition concernant vos données personnelles.
                Pour exercer ces droits, contactez-nous à l'adresse :{" "}
                <a
                  href="mailto:privacy@kioske.shop"
                  className="text-emerald-600 hover:text-emerald-700"
                >
                  privacy@kioske.shop
                </a>
              </p>
            </div>

            {/* Propriété intellectuelle */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                5. Propriété intellectuelle
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                L'ensemble du contenu du site kioske.shop (textes, images,
                vidéos, graphismes, logo, icônes, sons, logiciels, bases de
                données...) est protégé par le droit d'auteur et le droit de la
                propriété intellectuelle, tant en droit camerounais qu'en droit
                international.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                La marque « Kioské » ainsi que le logo associé sont des marques
                déposées de Kioské SAS. Toute reproduction ou utilisation non
                autorisée de ces marques est strictement interdite.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Toute reproduction, représentation, diffusion ou redistribution,
                totale ou partielle, du contenu de ce site par quelque procédé
                que ce soit, sans l'autorisation expresse et préalable de Kioské
                SAS, est interdite et constituerait une contrefaçon sanctionnée
                par les articles L.335-2 et suivants du Code de la Propriété
                Intellectuelle.
              </p>
            </div>

            {/* Liens hypertextes */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                6. Liens hypertextes
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Le site kioske.shop peut contenir des liens hypertextes vers
                d'autres sites internet. Kioské n'exerce aucun contrôle sur ces
                sites et décline toute responsabilité quant à leur contenu,
                leurs pratiques en matière de confidentialité ou leur
                disponibilité.
              </p>
              <p className="text-slate-600 leading-relaxed">
                La mise en place de liens hypertextes vers le site kioske.shop
                est autorisée sans accord préalable, à condition que ces liens
                ne portent pas atteinte à l'image de Kioské et qu'ils ne soient
                pas utilisés à des fins commerciales ou publicitaires sans
                autorisation.
              </p>
            </div>

            {/* Limitation de responsabilité */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                7. Limitation de responsabilité
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Kioské s'efforce de fournir des informations aussi précises que
                possible sur le site kioske.shop. Toutefois, Kioské ne saurait
                être tenu responsable des omissions, inexactitudes ou carences
                dans la mise à jour de ces informations, qu'elles soient de son
                fait ou du fait de tiers partenaires.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Kioské ne saurait être tenu responsable des dommages directs ou
                indirects résultant de l'accès au site ou de l'impossibilité d'y
                accéder, ainsi que de l'utilisation du site et/ou du crédit
                accordé à une quelconque information provenant directement ou
                indirectement de ce dernier.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                8. Contact
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Pour toute question relative aux présentes mentions légales :
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
                  Téléphone :{" "}
                  <a
                    href="tel:+237600000000"
                    className="text-emerald-600 hover:text-emerald-700"
                  >
                    +237 6 00 00 00 00
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

import { useState, useRef, useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useInView,
  useScroll,
  useMotionValueEvent,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "motion/react";

import logoSrc from "../assets/Logo-1.png";
import dashboardImg from "../assets/img/Dashboard.png";
import dashboardMobileImg from "../assets/img/Dashboard-mobile.png";
import caisseImg from "../assets/img/Caisse.png";
import stocksImg from "../assets/img/Gestion de stocks.png";
import clientsImg from "../assets/img/Gestion des clients.png";
import rapportsImg from "../assets/img/Rapports.png";
import demoVideo from "../assets/Video/demo.mp4";
import assistantImg from "../assets/img/Assistant IA.png";

/* ════════════════════════════════════════════════════════════
   ANIMATION WRAPPERS
   ════════════════════════════════════════════════════════════ */

function Reveal({
  children,
  className = "",
  delay = 0,
  y = 50,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function RevealX({
  children,
  className = "",
  delay = 0,
  x = 60,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  x?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Animated counter */
function Counter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}

/* ════════════════════════════════════════════════════════════
   DATA
   ════════════════════════════════════════════════════════════ */

const features = [
  {
    title: "Tableau de bord",
    desc: "Visualisez vos performances en temps réel. Ventes, marges, clients — tout en un coup d'œil.",
    img: dashboardImg,
    url: "admin.kioske.shop/dashboard",
    accentColor: "text-emerald-600",
    details: {
      headline: "Pilotez votre activité depuis un seul écran",
      description:
        "Le tableau de bord Kioské vous offre une vue d'ensemble complète et en temps réel de votre activité commerciale. Prenez des décisions éclairées grâce à des indicateurs clés actualisés en continu.",
      bullets: [
        "Indicateurs clés : ventes totales, transactions, marge brute, bénéfice net",
        "Graphiques interactifs des ventes horaires et quotidiennes",
        "Suivi des clients nouveaux vs récurrents",
        "Filtrage par période personnalisable (aujourd'hui, 7j, 30j, personnalisé)",
        "Mobile Money et solde caisse en temps réel",
        "Vue d'ensemble des charges et dépenses",
      ],
    },
  },
  {
    title: "Point de vente",
    desc: "Caisse intuitive et rapide, optimisée pour le tactile. Encaissez en quelques secondes.",
    img: caisseImg,
    url: "caisse.kioske.shop",
    accentColor: "text-amber-600",
    details: {
      headline: "Une caisse moderne pensée pour la vitesse",
      description:
        "L'interface de caisse Kioské est conçue pour les commerçants qui veulent aller vite. Optimisée pour les écrans tactiles, elle transforme chaque vente en une expérience fluide et professionnelle.",
      bullets: [
        "Recherche et ajout de produits en un clic",
        "Gestion des remises et promotions en temps réel",
        "Panier intelligent avec calcul automatique",
        "Support de multiples modes de paiement (espèces, mobile money)",
        "Gestion des clients directement depuis la caisse",
        "Clôture de caisse et bilan de fin de journée",
      ],
    },
  },
  {
    title: "Gestion des stocks",
    desc: "Suivez votre inventaire en temps réel. Alertes automatiques quand le stock est bas.",
    img: stocksImg,
    url: "admin.kioske.shop/stocks",
    accentColor: "text-blue-600",
    details: {
      headline: "Ne manquez plus jamais de stock",
      description:
        "La gestion des stocks Kioské vous donne une visibilité totale sur votre inventaire. Chaque mouvement est tracé, chaque alerte est paramétrée pour que vous ne soyez jamais pris au dépourvu.",
      bullets: [
        "Suivi en temps réel des niveaux de stock par produit",
        "Alertes automatiques configurables pour les seuils bas",
        "Historique complet des mouvements de stock",
        "Gestion des fournisseurs intégrée",
        "Commandes de réapprovisionnement simplifiées",
        "Catégorisation avancée des produits",
      ],
    },
  },
  {
    title: "Gestion des clients",
    desc: "CRM intégré pour fidéliser vos clients. Historique d'achats, contacts et analyses.",
    img: clientsImg,
    url: "admin.kioske.shop/clients",
    accentColor: "text-violet-600",
    details: {
      headline: "Connaissez vos clients, fidélisez-les",
      description:
        "Le CRM intégré de Kioské transforme chaque transaction en une opportunité de fidélisation. Gardez une trace de chaque interaction et personnalisez votre relation client.",
      bullets: [
        "Base de données clients complète avec profils détaillés",
        "Historique d'achats détaillé par client",
        "Segmentation et catégorisation des clients",
        "Communication directe via WhatsApp et email",
        "Suivi des créances et paiements en attente",
        "Analyses du comportement d'achat et tendances",
      ],
    },
  },
  {
    title: "Rapports détaillés",
    desc: "Analyses avancées pour prendre les meilleures décisions. Export PDF et visualisations.",
    img: rapportsImg,
    url: "admin.kioske.shop/rapports",
    accentColor: "text-rose-600",
    details: {
      headline: "Des données qui parlent, des décisions qui comptent",
      description:
        "Les rapports Kioské vont au-delà des simples chiffres. Visualisez vos tendances, identifiez vos produits phares et comprenez votre rentabilité en profondeur.",
      bullets: [
        "Rapports de ventes quotidiens, hebdomadaires et mensuels",
        "Analyse des marges par produit et catégorie",
        "Export PDF professionnel de tous vos rapports",
        "Graphiques interactifs et visualisations claires",
        "Suivi des objectifs de performance",
        "Comparaison entre périodes pour mesurer la croissance",
      ],
    },
  },
  {
    title: "Assistant IA",
    desc: "Intelligence artificielle intégrée pour analyser vos données et optimiser vos ventes.",
    img: assistantImg,
    url: "admin.kioske.shop/assistant",
    accentColor: "text-teal-600",
    details: {
      headline: "Votre conseiller commercial, disponible 24/7",
      description:
        "L'assistant IA de Kioské analyse vos données en continu pour vous fournir des recommandations personnalisées. Posez vos questions en langage naturel et obtenez des réponses instantanées.",
      bullets: [
        "Chatbot intelligent intégré à votre tableau de bord",
        "Analyse prédictive des tendances de vente",
        "Recommandations d'optimisation du stock",
        "Réponses instantanées sur vos données commerciales",
        "Aide à la prise de décision basée sur l'historique",
        "Détection d'anomalies et alertes proactives",
      ],
    },
  },
];

const pricingPlans = [
  {
    name: "Essentiel",
    price: "15 000",
    period: "/mois",
    desc: "Idéal pour les petits commerces qui démarrent.",
    popular: false,
    cta: "Commencer",
    features: [
      "1 point de vente",
      "Jusqu'à 500 produits",
      "Gestion des stocks",
      "Gestion des clients",
      "Rapports de base",
      "Support par email",
    ],
  },
  {
    name: "Professionnel",
    price: "35 000",
    period: "/mois",
    desc: "Pour les commerces en croissance qui veulent plus.",
    popular: true,
    cta: "Commencer",
    features: [
      "3 points de vente",
      "Produits illimités",
      "Gestion des employés",
      "Assistant IA",
      "Rapports avancés",
      "Gestion des livraisons",
      "Intégration WhatsApp",
      "Support prioritaire",
    ],
  },
  {
    name: "Entreprise",
    price: "Sur mesure",
    period: "",
    desc: "Solutions personnalisées pour les grandes structures.",
    popular: false,
    cta: "Nous contacter",
    features: [
      "Points de vente illimités",
      "Employés illimités",
      "Automatisation avancée",
      "Support dédié 24/7",
      "Marque blanche",
      "Account manager dédié",
      "Support 24/7",
      "Formation sur site",
    ],
  },
];

const faqItems = [
  {
    q: "Qu'est-ce que Kioské ?",
    a: "Kioské est une plateforme SaaS complète de gestion commerciale. Elle combine un tableau de bord administratif, un système de point de vente, la gestion des stocks, des clients, des employés et bien plus encore — le tout dans une seule solution accessible depuis n'importe quel appareil.",
  },
  {
    q: "L'essai gratuit est-il vraiment gratuit ?",
    a: "Oui, vous bénéficiez de 3 jours d'essai gratuit avec accès à toutes les fonctionnalités du plan Professionnel. Aucune carte bancaire n'est requise pour commencer.",
  },
  {
    q: "Puis-je changer de forfait à tout moment ?",
    a: "Absolument. Vous pouvez passer à un forfait supérieur ou inférieur à tout moment. Le changement prend effet immédiatement et la facturation est ajustée au prorata.",
  },
  {
    q: "Mes données sont-elles sécurisées ?",
    a: "La sécurité est notre priorité. Vos données sont chiffrées en transit et au repos, sauvegardées quotidiennement, et hébergées sur des serveurs sécurisés. Nous utilisons les meilleures pratiques de l'industrie.",
  },
  {
    q: "Kioské fonctionne-t-il sur mobile et tablette ?",
    a: "Oui, Kioské est entièrement responsive. L'interface s'adapte parfaitement aux smartphones, tablettes et ordinateurs. L'application de caisse est spécialement optimisée pour les écrans tactiles.",
  },
  {
    q: "Proposez-vous un accompagnement à la mise en place ?",
    a: "Oui, notre équipe vous accompagne à chaque étape. Le plan Entreprise inclut une formation sur site et un account manager dédié pour une transition en douceur.",
  },
];

const steps = [
  {
    num: "01",
    title: "Créez votre compte",
    desc: "Inscrivez-vous en quelques minutes. Aucune installation nécessaire, tout est accessible depuis votre navigateur.",
  },
  {
    num: "02",
    title: "Configurez votre boutique",
    desc: "Ajoutez vos produits, paramétrez votre inventaire et personnalisez votre espace de travail.",
  },
  {
    num: "03",
    title: "Vendez et analysez",
    desc: "Utilisez votre point de vente, suivez vos performances en temps réel et développez votre activité.",
  },
];

/* ════════════════════════════════════════════════════════════
   NAVBAR
   ════════════════════════════════════════════════════════════ */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  const navLinks = [
    { label: "Fonctionnalités", href: "#fonctionnalites" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "FAQ", href: "#faq" },
    { label: "Aide", href: "/centre-aide", isRoute: true },
    { label: "À propos", href: "/a-propos", isRoute: true },
  ] as const;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-2xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-slate-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <a href="#" className="flex-shrink-0 relative z-10">
            <img
              src={logoSrc}
              alt="Kioské"
              className={`transition-all duration-300 ${scrolled ? "h-7" : "h-8"}`}
            />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const cls = `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  : "text-slate-500 hover:text-slate-800 hover:bg-slate-900/5"
              }`;
              return "isRoute" in link && link.isRoute ? (
                <Link key={link.label} to={link.href} className={cls}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} className={cls}>
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
           
            <a
              href="#"
              className="text-sm font-semibold px-5 py-2.5 rounded-xl bg-emerald-500 text-white hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/30 hover:-translate-y-px"
            >
              Essai gratuit
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-10 p-2 -mr-2"
            aria-label="Menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <motion.span
                animate={
                  menuOpen
                    ? { rotate: 45, y: 7, backgroundColor: "#1e293b" }
                    : { rotate: 0, y: 0, backgroundColor: "#1e293b" }
                }
                transition={{ duration: 0.3 }}
                className="block h-[2px] w-full rounded-full origin-center"
              />
              <motion.span
                animate={
                  menuOpen
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.2 }}
                className="block h-[2px] w-full rounded-full origin-center"
                style={{ backgroundColor: "#1e293b" }}
              />
              <motion.span
                animate={
                  menuOpen
                    ? { rotate: -45, y: -7, backgroundColor: "#1e293b" }
                    : { rotate: 0, y: 0, backgroundColor: "#1e293b" }
                }
                transition={{ duration: 0.3 }}
                className="block h-[2px] w-full rounded-full origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200/60 overflow-hidden"
          >
            <div className="px-5 py-5 space-y-1">
              {navLinks.map((link, i) =>
                "isRoute" in link && link.isRoute ? (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className="block text-slate-700 font-medium py-3 px-3 rounded-lg hover:bg-slate-50 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="block text-slate-700 font-medium py-3 px-3 rounded-lg hover:bg-slate-50 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                )
              )}
              <div className="pt-4 mt-3 border-t border-slate-100 space-y-2">
                <a
                  href="#"
                  className="block text-center py-2.5 text-slate-600 font-medium"
                >
                  Connexion
                </a>
                <a
                  href="#"
                  className="block text-center py-3 rounded-xl bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-500/25"
                >
                  Essai gratuit
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* ════════════════════════════════════════════════════════════
   HERO
   ════════════════════════════════════════════════════════════ */

function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 150 });
  const glowOpacity = useMotionValue(0);
  const smoothOpacity = useSpring(glowOpacity, { damping: 20, stiffness: 200 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    glowOpacity.set(1);
  }

  function handleMouseLeave() {
    glowOpacity.set(0);
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen bg-[#fafbfc] overflow-hidden flex items-center"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern-light" />
      <div className="absolute inset-0 noise-light" />

      {/* Cursor-following glow */}
      <motion.div
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2"
        style={{
          left: smoothX,
          top: smoothY,
          opacity: smoothOpacity,
          background: "radial-gradient(circle, rgba(16,185,129,0.18) 0%, rgba(52,211,153,0.08) 40%, transparent 70%)",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-40 w-[550px] h-[550px] bg-emerald-400/20 rounded-full blur-[140px]" />
      <div
        className="absolute bottom-1/3 right-0 w-[450px] h-[450px] bg-amber-400/15 rounded-full blur-[120px]"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-300/10 rounded-full blur-[180px]" />

      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
             
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-8 font-display text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-slate-900 tracking-tight"
            >
              Gérez votre{" "}
              <br className="hidden sm:block" />
              commerce{" "}
              <span className="gradient-text">
                avec intelligence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6 text-lg sm:text-xl text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Stocks, ventes, clients et finances — tout dans une seule
              plateforme intelligente conçue pour les commerçants.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#"
                className="group w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-500 text-white font-semibold text-center hover:bg-emerald-400 transition-all duration-300 shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-400/35 hover:-translate-y-0.5"
              >
                Démarrer gratuitement
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#demo"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-slate-300 text-slate-600 font-medium text-center hover:border-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300"
              >
                Voir la démo
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 text-sm text-slate-400 flex items-center justify-center lg:justify-start gap-4"
            >
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 text-emerald-500">
                  <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm3.844-8.791a.75.75 0 00-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 10-1.114 1.004l2.25 2.5a.75.75 0 001.15-.043l4.25-5.5z" />
                </svg>
                3 jours gratuits
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 text-emerald-500">
                  <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm3.844-8.791a.75.75 0 00-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 10-1.114 1.004l2.25 2.5a.75.75 0 001.15-.043l4.25-5.5z" />
                </svg>
                Aucune carte requise
              </span>
            </motion.p>
          </div>

          {/* Dashboard Mockups */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative hidden md:block"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-emerald-400/20 via-emerald-300/15 to-amber-400/15 rounded-3xl blur-3xl" />

              <BrowserFrame url="admin.kioske.shop">
                <img
                  src={dashboardImg}
                  alt="Kioské Dashboard"
                  className="w-full block"
                  loading="eager"
                />
              </BrowserFrame>
            </div>

            {/* Mobile frame overlapping bottom-right */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="absolute -bottom-8 -right-6 lg:-right-10 w-[140px] lg:w-[170px] z-10"
            >
              <div className="absolute -inset-3 bg-gradient-to-b from-emerald-400/20 to-amber-400/15 rounded-[1.25rem] blur-xl" />
              <div className="relative rounded-[1.1rem] overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-900/10 bg-white">
                {/* Phone notch */}
                <div className="bg-slate-100/80 px-2 py-1.5 flex items-center justify-center border-b border-slate-200/60">
                  <div className="w-10 h-[3px] bg-slate-300/60 rounded-full" />
                </div>
                <img
                  src={dashboardMobileImg}
                  alt="Kioské Dashboard Mobile"
                  className="w-full block"
                  loading="eager"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   STATS BAR
   ════════════════════════════════════════════════════════════ */

function Stats() {
  const stats = [
    { value: 1200, suffix: "+", label: "Commerçants actifs" },
    { value: 2, suffix: "M+", label: "Transactions traitées" },
    { value: 15, suffix: "+", label: "Pays en Afrique" },
    { value: 99, suffix: ".9%", label: "Disponibilité" },
  ];

  return (
    <section className="relative bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm sm:text-base text-slate-500 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Divider */}
        <div className="mt-16 lg:mt-20 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   DEMO VIDEO
   ════════════════════════════════════════════════════════════ */

function Demo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  return (
    <section id="demo" className="relative bg-white py-20 lg:py-28 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-400/8 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-400/6 rounded-full blur-[140px]" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <Reveal>
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold tracking-wide uppercase mb-5">
              Démo
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Voyez Kioské{" "}
              <span className="gradient-text">en action</span>
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
              Découvrez en quelques minutes comment Kioské simplifie la gestion de votre commerce au quotidien.
            </p>
          </div>
        </Reveal>

        {/* Video player */}
        <Reveal>
          <div ref={containerRef} className="relative group">
            {/* Glow behind video */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/15 via-emerald-300/10 to-amber-400/10 rounded-[2rem] blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-70" />

            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-900/[0.08] bg-slate-950">
              <video
                ref={videoRef}
                src={demoVideo}
                className="w-full block"
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />

              {/* Play / Pause overlay */}
              <button
                onClick={handlePlay}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  isPlaying
                    ? "opacity-0 hover:opacity-100"
                    : "opacity-100"
                }`}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-[2px]" />
                <div className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isPlaying
                    ? "bg-white/20 backdrop-blur-md scale-90"
                    : "bg-white shadow-2xl shadow-slate-900/20 hover:scale-105"
                }`}>
                  {isPlaying ? (
                    <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16" rx="1" />
                      <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="w-7 h-7 text-emerald-600 ml-1" fill="currentColor">
                      <path d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36A1 1 0 008 5.14z" />
                    </svg>
                  )}
                </div>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Contact CTA below video */}
        <Reveal delay={0.15}>
          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-300 text-slate-600 font-medium hover:border-emerald-400 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all duration-300"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4.5 h-4.5">
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
              Nous contacter
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   BROWSER FRAME (reusable)
   ════════════════════════════════════════════════════════════ */

function BrowserFrame({
  url,
  children,
  dark = false,
}: {
  url: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl overflow-hidden border shadow-2xl ${
        dark
          ? "border-white/[0.08] shadow-black/40 glow-emerald"
          : "border-slate-200/80 shadow-slate-900/[0.08]"
      }`}
    >
      <div
        className={`px-4 py-3 flex items-center gap-3 border-b ${
          dark
            ? "bg-slate-900/90 backdrop-blur border-white/[0.06]"
            : "bg-slate-100/80 border-slate-200/60"
        }`}
      >
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center">
          <span
            className={`text-xs px-4 py-1 rounded-md font-mono ${
              dark
                ? "text-slate-500 bg-slate-800/80"
                : "text-slate-400 bg-white/80 border border-slate-200/60"
            }`}
          >
            {url}
          </span>
        </div>
        <div className="w-14" />
      </div>
      {children}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   FEATURE MODAL
   ════════════════════════════════════════════════════════════ */

function FeatureModal({
  feature,
  onClose,
}: {
  feature: (typeof features)[number];
  onClose: () => void;
}) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl shadow-2xl shadow-slate-900/20 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-colors"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>

        {/* Screenshot in browser frame */}
        <div className="p-5 sm:p-8 pb-0">
          <BrowserFrame url={feature.url}>
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full block"
            />
          </BrowserFrame>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8 pt-6 sm:pt-8">
          {/* Header */}
          <div className="mb-5">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {feature.title}
            </h3>
            <p className={`text-sm font-semibold mt-1 ${feature.accentColor}`}>
              {feature.details.headline}
            </p>
          </div>

          <p className="text-slate-600 leading-relaxed mb-6 text-base">
            {feature.details.description}
          </p>

          {/* Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {feature.details.bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-3">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  />
                </svg>
                <span className="text-sm text-slate-600 leading-relaxed">
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="#"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-500 text-white font-semibold text-center hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/30 hover:-translate-y-px text-sm"
            >
              Essayer gratuitement
            </a>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-slate-200 text-slate-600 font-medium text-center hover:bg-slate-50 transition-all duration-300 text-sm"
            >
              Fermer
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════
   FEATURES (Z-pattern layout)
   ════════════════════════════════════════════════════════════ */

function Features() {
  const [activeFeature, setActiveFeature] = useState<
    (typeof features)[number] | null
  >(null);

  return (
    <section id="fonctionnalites" className="relative bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">
              Fonctionnalités
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Tout ce dont votre{" "}
              <span className="gradient-text">commerce</span> a besoin
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Une suite d'outils puissants conçus pour simplifier votre quotidien
              et accélérer votre croissance.
            </p>
          </Reveal>
        </div>

        {/* Z-pattern rows */}
        <div className="space-y-20 lg:space-y-32">
          {features.map((f, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <div
                key={f.title}
                className={`flex flex-col gap-10 lg:gap-16 items-center ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Text side */}
                <RevealX
                  x={isReversed ? 50 : -50}
                  delay={0.1}
                  className="flex-1 w-full lg:w-auto"
                >
                  <div className="max-w-lg">
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                      {f.title}
                    </h3>

                    <p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-6">
                      {f.desc}
                    </p>

                    {/* Quick bullets (first 3) */}
                    <ul className="space-y-3 mb-8">
                      {f.details.bullets.slice(0, 3).map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            />
                          </svg>
                          <span className="text-sm text-slate-600">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setActiveFeature(f)}
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-500 transition-colors cursor-pointer"
                    >
                      En savoir plus
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        />
                      </svg>
                    </button>
                  </div>
                </RevealX>

                {/* Image side (in browser frame) */}
                <RevealX
                  x={isReversed ? -50 : 50}
                  delay={0.2}
                  className="flex-1 w-full lg:w-auto"
                >
                  <div className="relative group">
                    {/* Soft glow behind */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/[0.06] via-transparent to-amber-500/[0.04] rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative">
                      <BrowserFrame url={f.url}>
                        <img
                          src={f.img}
                          alt={f.title}
                          className="w-full block transition-transform duration-700 group-hover:scale-[1.01]"
                          loading="lazy"
                        />
                      </BrowserFrame>
                    </div>
                  </div>
                </RevealX>
              </div>
            );
          })}
        </div>
      </div>

      {/* Feature Detail Modal */}
      <AnimatePresence>
        {activeFeature && (
          <FeatureModal
            feature={activeFeature}
            onClose={() => setActiveFeature(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   HOW IT WORKS
   ════════════════════════════════════════════════════════════ */

function HowItWorks() {
  return (
    <section className="relative bg-slate-50 py-20 lg:py-28 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">
              Comment ça marche
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Opérationnel en{" "}
              <span className="gradient-text">3 étapes</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Pas besoin d'être un expert. Kioské est conçu pour être simple et
              intuitif dès le premier jour.
            </p>
          </Reveal>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.15}>
              <div className="relative text-center md:text-left">
                {/* Connector line (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] right-[calc(-50%+40px)] h-px bg-gradient-to-r from-emerald-300 to-emerald-100" />
                )}

                {/* Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border-2 border-emerald-200 shadow-lg shadow-emerald-500/10 mb-6 relative">
                  <span className="font-display text-xl font-bold text-emerald-600">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed max-w-xs mx-auto md:mx-0">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   PRICING
   ════════════════════════════════════════════════════════════ */

function Pricing() {
  return (
    <section id="tarifs" className="relative bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">
              Tarifs
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Des tarifs adaptés à{" "}
              <span className="gradient-text">chaque commerce</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Commencez gratuitement pendant 3 jours. Évoluez quand vous êtes
              prêt.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.12}>
              <div
                className={`relative rounded-3xl p-8 transition-all duration-500 h-full ${
                  plan.popular
                    ? "bg-slate-950 text-white shadow-2xl shadow-slate-900/30 ring-1 ring-white/10 scale-[1.02] md:scale-105"
                    : "bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-500/30 uppercase tracking-wider">
                      <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                        <path d="M8 2l1.5 4.5H14l-3.5 2.8 1.3 4.5L8 11.2l-3.8 2.6 1.3-4.5L2 6.5h4.5z" />
                      </svg>
                      Populaire
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3
                    className={`font-display text-lg font-bold mb-2 ${
                      plan.popular ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 ${
                      plan.popular ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {plan.desc}
                  </p>

                  <div className="flex items-baseline gap-1">
                    <span
                      className={`font-display text-4xl lg:text-5xl font-bold tracking-tight ${
                        plan.popular ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        className={`text-sm font-medium ${
                          plan.popular ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        {" "}FCFA{plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <a
                  href="#"
                  className={`block w-full py-3.5 rounded-xl text-center font-semibold text-sm transition-all duration-300 mb-8 ${
                    plan.popular
                      ? "bg-emerald-500 text-white hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/30 hover:-translate-y-px"
                      : "bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-px"
                  }`}
                >
                  {plan.cta}
                </a>

                <ul className="space-y-3.5">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.popular ? "text-emerald-400" : "text-emerald-500"
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   TESTIMONIALS (infinite marquee)
   ════════════════════════════════════════════════════════════ */

const testimonials = [
  {
    name: "Aminata Diallo",
    role: "Gérante, Boutique Amina",
    location: "Dakar, Sénégal",
    text: "Kioské a complètement transformé la gestion de ma boutique. Avant, je perdais des heures à compter le stock manuellement. Maintenant, tout est automatisé et je peux me concentrer sur mes clients.",
    rating: 5,
  },
  {
    name: "Kouamé Jean-Baptiste",
    role: "Directeur, MegaShop CI",
    location: "Yaoundé, Cameroun",
    text: "Avec 3 points de vente, j'avais besoin d'une solution centralisée. Kioské me donne une vue d'ensemble en temps réel sur chaque boutique. Le tableau de bord est incroyablement complet.",
    rating: 5,
  },
  {
    name: "Fatou Bintou Ndiaye",
    role: "Propriétaire, Cosmétiques FBN",
    location: "Bamako, Mali",
    text: "Le point de vente est super rapide et mes caissières l'ont adopté en une journée. La gestion des clients fidèles a fait grimper nos ventes de 30% en trois mois.",
    rating: 5,
  },
  {
    name: "Oumar Sanogo",
    role: "Fondateur, Digital Market",
    location: "Ouagadougou, Burkina Faso",
    text: "L'assistant IA est bluffant. Il m'a aidé à identifier mes produits les plus rentables et à optimiser mes commandes. C'est comme avoir un conseiller business disponible 24h/24.",
    rating: 5,
  },
  {
    name: "Adèle Mensah",
    role: "Gérante, Pharmacie Espoir",
    location: "Lomé, Togo",
    text: "La gestion des stocks avec les alertes automatiques est un vrai game-changer. Plus de ruptures de stock, plus de pertes. Mes clients trouvent toujours ce qu'ils cherchent.",
    rating: 4,
  },
  {
    name: "Moussa Keita",
    role: "Co-fondateur, Keita & Fils",
    location: "Conakry, Guinée",
    text: "Les rapports détaillés m'aident à prendre des décisions éclairées chaque semaine. J'ai pu réduire mes charges de 20% en identifiant les dépenses inutiles grâce aux analyses.",
    rating: 5,
  },
  {
    name: "Rachelle Ouédraogo",
    role: "Directrice, Mode Express",
    location: "Niamey, Niger",
    text: "L'intégration WhatsApp est géniale pour garder le contact avec nos clients. On envoie les factures, les promos, tout depuis Kioské. Nos clients adorent le service personnalisé.",
    rating: 5,
  },
  {
    name: "Sékou Camara",
    role: "Gérant, TechZone",
    location: "Cotonou, Bénin",
    text: "En tant que commerce de produits électroniques, le suivi précis des stocks est vital. Kioské gère parfaitement les numéros de série et les garanties. Je recommande à 100%.",
    rating: 5,
  },
];

function TestimonialCard({
  t,
}: {
  t: (typeof testimonials)[number];
}) {
  return (
    <div className="flex-shrink-0 w-[360px] sm:w-[400px] bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-200/60 hover:shadow-lg hover:shadow-emerald-500/[0.04] transition-all duration-500">
      {/* Stars */}
      <div>
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 20 20"
              fill={i < t.rating ? "#F0A830" : "#e2e8f0"}
              className="w-4.5 h-4.5"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-600 leading-relaxed text-[15px]">
          "{t.text}"
        </p>
      </div>

      {/* Author */}
      <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0">
          {t.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <p className="font-display font-semibold text-slate-900 text-sm leading-tight">
            {t.name}
          </p>
          <p className="text-xs text-slate-400 mt-0.5">
            {t.role} · {t.location}
          </p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="relative bg-slate-50 py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-14 lg:mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">
              Témoignages
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Ils nous font{" "}
              <span className="gradient-text">confiance</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Des commerçants à travers l'Afrique utilisent Kioské pour
              développer leur activité au quotidien.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Single row marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 animate-marquee-left">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`t-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   FAQ
   ════════════════════════════════════════════════════════════ */

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-center justify-between text-left gap-4 group"
      >
        <span className="font-display text-base sm:text-lg font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-shrink-0"
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-slate-400"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-500 leading-relaxed pr-8">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQ() {
  return (
    <section id="faq" className="relative bg-slate-50 py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14 lg:mb-16">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">
              FAQ
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Questions fréquentes
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="bg-white rounded-2xl border border-slate-200 px-6 sm:px-8 divide-slate-200">
            {faqItems.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   CTA
   ════════════════════════════════════════════════════════════ */

function CallToAction() {
  return (
    <section className="relative bg-slate-950 py-24 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 dot-pattern" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/8 rounded-full blur-[100px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Prêt à transformer{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">votre commerce ?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl mx-auto">
            Rejoignez des milliers de commerçants qui utilisent Kioské pour
            développer leur activité au quotidien.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="group w-full sm:w-auto px-10 py-4 rounded-2xl bg-emerald-500 text-white font-semibold text-center hover:bg-emerald-400 transition-all duration-300 shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-400/35 hover:-translate-y-0.5"
            >
              Commencer maintenant
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#"
              className="w-full sm:w-auto px-10 py-4 rounded-2xl border border-slate-700 text-slate-300 font-medium text-center hover:border-slate-500 hover:text-white transition-all duration-300"
            >
              Parler à un expert
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-6 text-sm text-slate-500">
            Essai gratuit de 3 jours · Configuration en 5 minutes
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   CONTACT
   ════════════════════════════════════════════════════════════ */

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative bg-[#fafbfc] py-20 lg:py-28 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-emerald-400/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-amber-400/8 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <Reveal>
          <div className="text-center mb-14 lg:mb-18">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold tracking-wide uppercase mb-5">
              Contact
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Nous contacter
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
              Une question, un projet ou besoin d'aide ? Notre équipe vous répond sous 24h.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Info cards */}
          <div className="lg:col-span-2 space-y-5">
            <Reveal delay={0.05}>
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-emerald-600">
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-slate-900">Email</h3>
                <p className="mt-1 text-sm text-slate-500">contact@kioske.shop</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-amber-600">
                    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-slate-900">Téléphone</h3>
                <p className="mt-1 text-sm text-slate-500">+237 695 083 389</p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-emerald-600">
                    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.145 15.945 15.945 0 002.004-1.29c1.517-1.106 3.381-2.874 3.381-5.487 0-3.015-2.5-5.5-5.5-5.5a5.5 5.5 0 00-5.5 5.5c0 2.613 1.864 4.381 3.381 5.487a15.953 15.953 0 002.004 1.29 8.837 8.837 0 00.281.145l.018.008.006.003zM10 13a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-slate-900">Adresse</h3>
                <p className="mt-1 text-sm text-slate-500">Yaounde, Cameroun</p>
              </div>
            </Reveal>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-emerald-400/10 via-transparent to-amber-400/10 rounded-[1.75rem] blur-xl" />
                <div className="relative p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/80 shadow-lg shadow-slate-900/[0.04]">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-5">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-emerald-500">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <h3 className="font-display text-xl font-bold text-slate-900">Message envoyé !</h3>
                      <p className="mt-2 text-slate-500">Nous vous répondrons dans les plus brefs délais.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Nom complet
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            placeholder="Votre nom"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Email
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            placeholder="vous@exemple.com"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Sujet
                        </label>
                        <input
                          id="contact-subject"
                          type="text"
                          required
                          placeholder="Comment pouvons-nous vous aider ?"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Message
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={5}
                          placeholder="Décrivez votre besoin..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 text-sm resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="group w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/30 hover:-translate-y-px"
                      >
                        Envoyer le message
                        <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   FOOTER
   ════════════════════════════════════════════════════════════ */

const footerRoutes: Record<string, string> = {
  "Fonctionnalités": "/fonctionnalites",
  "Tarifs": "/tarifs",
  "Changelog": "/changelog",
  "À propos": "/a-propos",
  "Blog": "/blog",
  "Carrières": "/carrieres",
  "Presse": "/presse",
  "Partenaires": "/partenaires",
  "Centre d'aide": "/centre-aide",
  "Documentation": "/documentation",
  "Contact": "/contact",
  "Status": "/status",
  "Communauté": "/communaute",
  "Confidentialité": "/confidentialite",
  "CGU": "/cgu",
  "Cookies": "/cookies",
  "Mentions légales": "/mentions-legales",
};

function Footer() {
  const linkGroups = [
    {
      title: "Produit",
      links: ["Fonctionnalités", "Tarifs", "Changelog"],
    },
    {
      title: "Entreprise",
      links: ["À propos", "Blog", "Carrières", "Presse", "Partenaires"],
    },
    {
      title: "Support",
      links: ["Centre d'aide", "Documentation", "Contact", "Status", "Communauté"],
    },
    {
      title: "Légal",
      links: [
        "Confidentialité",
        "CGU",
        "Cookies",
        "Mentions légales",
      ],
    },
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <img src={logoSrc} alt="Kioské" className="h-8 brightness-0 invert" />
            <p className="mt-5 text-sm text-slate-400 leading-relaxed max-w-xs">
              La plateforme tout-en-un pour gérer votre commerce avec
              intelligence. Stocks, ventes, clients et finances.
            </p>
            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {["twitter", "linkedin", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  aria-label={social}
                >
                  {social === "twitter" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {social === "linkedin" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {social === "instagram" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-display text-sm font-semibold text-white mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((label) => (
                  <li key={label}>
                    <Link
                      to={footerRoutes[label] || "#"}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Kioské. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-sm text-slate-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Tous les systèmes opérationnels
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════════════════════════
   MAIN PAGE
   ════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <div className="font-body antialiased">
      <Navbar />
      <Hero />
      <Stats />
      <Demo />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}

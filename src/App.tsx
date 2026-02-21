import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Home from "./pages/Home";

// Lazy-load sub-pages for better initial load
const Fonctionnalites = lazy(() => import("./pages/Fonctionnalites"));
const Tarifs = lazy(() => import("./pages/Tarifs"));
const Changelog = lazy(() => import("./pages/Changelog"));
const APropos = lazy(() => import("./pages/APropos"));
const Blog = lazy(() => import("./pages/Blog"));
const Carrieres = lazy(() => import("./pages/Carrieres"));
const Presse = lazy(() => import("./pages/Presse"));
const Partenaires = lazy(() => import("./pages/Partenaires"));
const CentreAide = lazy(() => import("./pages/CentreAide"));
const Documentation = lazy(() => import("./pages/Documentation"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Status = lazy(() => import("./pages/Status"));
const Communaute = lazy(() => import("./pages/Communaute"));
const Confidentialite = lazy(() => import("./pages/Confidentialite"));
const CGU = lazy(() => import("./pages/CGU"));
const CookiesPage = lazy(() => import("./pages/CookiesPage"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafbfc]">
      <div className="w-8 h-8 border-3 border-emerald-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Produit */}
        <Route path="/fonctionnalites" element={<Fonctionnalites />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/changelog" element={<Changelog />} />

        {/* Entreprise */}
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/carrieres" element={<Carrieres />} />
        <Route path="/presse" element={<Presse />} />
        <Route path="/partenaires" element={<Partenaires />} />

        {/* Support */}
        <Route path="/centre-aide" element={<CentreAide />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/status" element={<Status />} />
        <Route path="/communaute" element={<Communaute />} />

        {/* Légal */}
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
    </Suspense>
  );
}

export default App;

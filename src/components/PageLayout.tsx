import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import logoSrc from "../assets/Logo-1.png";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="font-body antialiased min-h-screen flex flex-col bg-[#fafbfc]">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-2xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex-shrink-0">
              <img src={logoSrc} alt="Kioské" className="h-7" />
            </Link>
            <Link
              to="/"
              className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1.5"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path
                  fillRule="evenodd"
                  d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                  clipRule="evenodd"
                />
              </svg>
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </nav>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Simple footer */}
      <footer className="border-t border-slate-200/60 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Kioské. Tous droits réservés.
          </p>
          <Link
            to="/"
            className="text-sm text-slate-400 hover:text-emerald-600 transition-colors"
          >
            kioske.shop
          </Link>
        </div>
      </footer>
    </div>
  );
}

import { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand">
            <span className="brand-mark">🏥</span>
            <div className="brand-text">
              <span className="brand-name">
                ETHNIC INTEGRATIVE MEDICAL CLINIC LTD
              </span>
              <span className="brand-tagline">
                Integrative • Natural • Rehabilitation Care
              </span>
            </div>
          </Link>
          <nav className="main-nav">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              About
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Services
            </NavLink>
            <NavLink to="/team" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Our Team
            </NavLink>
            <NavLink
              to="/appointments"
              className={({ isActive }) =>
                isActive ? "nav-link nav-cta active" : "nav-link nav-cta"
              }
            >
              Book Appointment
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <div className="container">{children}</div>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-title">
              Ethnic Integrative Medical Clinic Ltd
            </p>
            <p className="footer-text">
              90 Shyllon Street, Ilupeju Palm Grove, Lagos
            </p>
            <p className="footer-text">
              Tel: <a href="tel:08037208445">08037208445</a> |{" "}
              <a href="tel:08023806149">08023806149</a>
            </p>
          </div>
          <div className="footer-links">
            <Link to="/privacy" className="footer-link">
              Privacy Policy &amp; Disclaimer
            </Link>
            <p className="footer-text small">
              For medical emergencies, call your local emergency number (e.g.,
              911 in the United States) immediately. Do not use this website
              for emergency care.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Ethnic Integrative Medical Clinic Ltd. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}


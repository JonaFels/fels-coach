import { Component, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const fallbackStyles = {
  wrap: { minHeight: "100vh", background: "hsl(270 30% 96%)", color: "hsl(270 35% 12%)", fontFamily: "Montserrat,'Montserrat Fallback',ui-sans-serif,system-ui,sans-serif" } as const,
  header: { padding: "1rem clamp(1rem,4vw,3rem)", borderBottom: "1px solid hsl(270 22% 80%)", display: "flex", gap: "1rem", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" } as const,
  brand: { fontFamily: "'Playfair Display','Playfair Fallback',Georgia,serif", fontSize: "clamp(1rem,2vw,1.25rem)", fontWeight: 600, textDecoration: "none", color: "inherit" } as const,
  nav: { display: "flex", gap: ".75rem 1rem", alignItems: "center", flexWrap: "wrap", fontSize: ".95rem" } as const,
  navLink: { color: "inherit", textDecoration: "underline", textUnderlineOffset: ".25em" } as const,
  main: { width: "min(960px,100%)", margin: "0 auto", padding: "clamp(3rem,9vw,7rem) clamp(1.25rem,4vw,3rem)" } as const,
  eyebrow: { margin: "0 0 1rem", textTransform: "uppercase", letterSpacing: ".08em", fontSize: ".78rem", fontWeight: 700, color: "hsl(275 25% 30%)" } as const,
  h1: { margin: "0 0 1.5rem", fontFamily: "'Playfair Display','Playfair Fallback',Georgia,serif", fontSize: "clamp(2.25rem,7vw,4.5rem)", lineHeight: 1.08 } as const,
  lead: { maxWidth: "42rem", margin: "0 0 2rem", fontSize: "clamp(1.05rem,2vw,1.25rem)", lineHeight: 1.8 } as const,
  ctas: { display: "flex", gap: ".875rem", flexWrap: "wrap" } as const,
  ctaPrimary: { display: "inline-flex", alignItems: "center", minHeight: "3rem", padding: ".85rem 1.15rem", borderRadius: "999px", background: "hsl(270 45% 22%)", color: "hsl(270 30% 98%)", fontWeight: 700, textDecoration: "none" } as const,
  ctaSecondary: { display: "inline-flex", alignItems: "center", minHeight: "3rem", padding: ".85rem 1.15rem", borderRadius: "999px", border: "1px solid hsl(270 22% 70%)", color: "inherit", fontWeight: 700, textDecoration: "none" } as const,
};

const StaticFallback = () => (
  <div style={fallbackStyles.wrap}>
    <header style={fallbackStyles.header}>
      <a href="/" style={fallbackStyles.brand}>Systemisches Coaching &amp; Familienaufstellung</a>
      <nav style={fallbackStyles.nav} aria-label="Hauptnavigation">
        <a style={fallbackStyles.navLink} href="/systemische-familienaufstellung-freiburg">Familienaufstellung</a>
        <a style={fallbackStyles.navLink} href="/ueber-mich">Über mich</a>
        <a style={fallbackStyles.navLink} href="/angebote">Termine &amp; Preise</a>
        <a style={fallbackStyles.navLink} href="/blog">Blog</a>
        <a style={fallbackStyles.navLink} href="/kontakt">Kontakt</a>
      </nav>
    </header>
    <main style={fallbackStyles.main}>
      <p style={fallbackStyles.eyebrow}>Systemisches Coaching &amp; Familienaufstellung in Freiburg</p>
      <h1 style={fallbackStyles.h1}>„Unklar, zu viel im Kopf, Orientierungslos.“</h1>
      <p style={fallbackStyles.lead}>Die Seite konnte nicht vollständig geladen werden. Du kannst trotzdem direkt zur Terminbuchung oder zu den wichtigsten Seiten weitergehen.</p>
      <div style={fallbackStyles.ctas}>
        <a style={fallbackStyles.ctaPrimary} href="/kontakt">Kostenloses Erstgespräch</a>
        <a style={fallbackStyles.ctaSecondary} href="/angebote">Termine &amp; Preise</a>
      </div>
    </main>
  </div>
);

class RootErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("App render failed", error);
  }

  render() {
    return this.state.hasError ? <StaticFallback /> : this.props.children;
  }
}

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  );
}

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const StaticFallback = () => (
  <div className="min-h-screen bg-background text-foreground">
    <header className="border-b border-border px-4 py-4 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <a href="/" className="font-serif text-lg font-semibold text-primary sm:text-xl">
          Systemisches Coaching &amp; Familienaufstellung
        </a>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium" aria-label="Hauptnavigation">
          <a className="underline decoration-secondary underline-offset-4" href="/systemische-familienaufstellung-freiburg">
            Familienaufstellung
          </a>
          <a className="underline decoration-secondary underline-offset-4" href="/ueber-mich">
            Über mich
          </a>
          <a className="underline decoration-secondary underline-offset-4" href="/angebote">
            Termine &amp; Preise
          </a>
          <a className="underline decoration-secondary underline-offset-4" href="/blog">
            Blog
          </a>
          <a className="underline decoration-secondary underline-offset-4" href="/kontakt">
            Kontakt
          </a>
        </nav>
      </div>
    </header>
    <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-secondary">
        Systemisches Coaching &amp; Familienaufstellung in Freiburg
      </p>
      <h1 className="mb-6 font-serif text-4xl leading-tight text-primary sm:text-6xl">
        „Unklar, zu viel im Kopf, Orientierungslos.“
      </h1>
      <p className="mb-8 max-w-2xl text-lg leading-8 text-foreground/85">
        Die Seite konnte nicht vollständig geladen werden. Du kannst trotzdem direkt zur Terminbuchung oder zu den wichtigsten Seiten weitergehen.
      </p>
      <div className="flex flex-wrap gap-3">
        <a className="inline-flex min-h-12 items-center rounded-full bg-primary px-5 font-semibold text-primary-foreground" href="/kontakt">
          Kostenloses Erstgespräch
        </a>
        <a className="inline-flex min-h-12 items-center rounded-full border border-border px-5 font-semibold" href="/angebote">
          Termine &amp; Preise
        </a>
      </div>
    </main>
  </div>
);

class RootErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
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

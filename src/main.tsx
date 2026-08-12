import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

const AppReady = () => {
  useEffect(() => {
    document.getElementById("static-fallback")?.remove();

    const url = new URL(window.location.href);
    if (url.searchParams.has("_r")) {
      url.searchParams.delete("_r");
      window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    }

    try {
      window.sessionStorage.removeItem("fels-recovery-attempt");
    } catch {
      // Storage kann durch Browser-Datenschutz blockiert sein.
    }
  }, []);

  return <App />;
};

if (rootElement) {
  createRoot(rootElement).render(<AppReady />);
}

import { useEffect } from "react";
import { BookingSections } from "@/components/BookingSections";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";

const Appointment = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Book your appointment | Jona Fels";
    const meta = document.querySelector('meta[name="robots"]');
    const created = !meta;
    const tag = meta ?? document.createElement("meta");
    tag.setAttribute("name", "robots");
    tag.setAttribute("content", "noindex, nofollow");
    if (created) document.head.appendChild(tag);
    return () => {
      document.title = prev;
      if (created) tag.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="py-6 border-b border-border/40">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <img
            src={profilBild}
            alt="Jona Fels"
            className="w-10 h-10 rounded-full object-cover object-[center_18%]"
          />
          <span className="font-serif text-base text-foreground">
            Jona Fels · Systemic Constellation Facilitator
          </span>
        </div>
      </header>

      <main id="main-content">
        <section className="pt-28 pb-24 md:pt-44 md:pb-32">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-secondary mb-5">
              Welcome
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Good to have you here.
              <span className="block text-secondary mt-2">Let's get started.</span>
            </h1>
          </div>
        </section>

        <section className="pb-32 md:pb-44">
          <div className="container mx-auto px-4 max-w-3xl">
            <BookingModeTabs
              copy={{
                onsiteLabel: "In person in Freiburg",
                onlineLabel: "Online via video",
                onsiteHint:
                  "Practice room Karlstraße 51, 79104 Freiburg · 90 minutes · €110",
                onlineHint: "Video call from anywhere · 90 minutes · €110",
                onsiteUrl:
                  "https://cal.meetergo.com/jona/systemic-constellation?lang=en",
                onlineUrl:
                  "https://cal.meetergo.com/jona/systemic-constellation-1?lang=en",
                iframeTitle: "Booking – Systemic 1:1 Constellation",
              }}
            />
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border/40">
        <div className="container mx-auto px-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Jona Fels · Systemic Constellation Work
        </div>
      </footer>
    </div>
  );
};

export default Appointment;

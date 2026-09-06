import { useEffect } from "react";
import { BookingSections } from "@/components/BookingSections";
import { BookingOptionCards } from "@/components/BookingOptionCards";
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
        <section className="pt-24 pb-10 md:pt-36 md:pb-14">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-secondary mb-4">
              Welcome
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4">
              Book your Systemic 1:1 Constellation
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              90 minutes · €110 · Choose in person in Freiburg or online via video.
            </p>
          </div>
        </section>

        <section className="pb-32 md:pb-44">
          <div className="container mx-auto px-4 max-w-3xl">
            <BookingOptionCards
              heading="Step 1"
              subheading="How would you like to meet?"
              choices={[
                {
                  kind: "onsite",
                  icon: "map",
                  title: "In person in Freiburg",
                  subtitle: "At the practice room",
                  details: "Karlstraße 51, 79104 Freiburg · 90 min · €110",
                  cta: "Book in person",
                },
                {
                  kind: "online",
                  icon: "video",
                  title: "Online via video",
                  subtitle: "From anywhere",
                  details: "Video call · 90 min · €110",
                  cta: "Book online",
                },
              ]}
            />
            <BookingSections
              options={[
                {
                  kind: "onsite",
                  label: "In person in Freiburg",
                  hint: "Practice room Karlstraße 51, 79104 Freiburg · 90 minutes · €110",
                  url: "https://cal.meetergo.com/jona/systemic-constellation?lang=en",
                  iframeTitle: "Booking – Systemic 1:1 Constellation in person",
                },
                {
                  kind: "online",
                  label: "Online via video",
                  hint: "Video call from anywhere · 90 minutes · €110",
                  url: "https://cal.meetergo.com/jona/systemic-constellation-1?lang=en",
                  iframeTitle: "Booking – Systemic 1:1 Constellation online",
                },
              ]}
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

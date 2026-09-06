import { useEffect } from "react";
import { MapPin, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
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
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
              This is where you book your Systemic 1:1 Constellation (90 minutes, €110).
              Your choice: <strong className="text-foreground font-medium">in person in Freiburg</strong> or{" "}
              <strong className="text-foreground font-medium">online via video</strong> – both calendars are below.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="#termin-onsite">
                  <MapPin className="h-4 w-4 mr-2" aria-hidden="true" />
                  Book in person
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href="#termin-online">
                  <Video className="h-4 w-4 mr-2" aria-hidden="true" />
                  Book online
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="pb-32 md:pb-44">
          <div className="container mx-auto px-4 max-w-3xl">
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

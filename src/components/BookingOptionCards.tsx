import { MapPin, Video, ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface BookingChoice {
  kind: "onsite" | "online";
  icon: "map" | "video";
  title: string;
  subtitle: string;
  details: string;
  cta: string;
}

interface BookingOptionCardsProps {
  heading: string;
  subheading: string;
  choices: BookingChoice[];
}

export const BookingOptionCards = ({
  heading,
  subheading,
  choices,
}: BookingOptionCardsProps) => (
  <div className="text-center mb-10 md:mb-14">
    <p className="text-xs font-medium tracking-[0.2em] uppercase text-secondary mb-3">
      {heading}
    </p>
    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
      {subheading}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto mt-6">
      {choices.map((choice) => (
        <Card
          key={choice.kind}
          className="relative overflow-hidden border-border/60 rounded-xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-shadow duration-300"
        >
          <CardContent className="p-6 flex flex-col items-center text-center h-full">
            <div
              className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                choice.kind === "onsite"
                  ? "bg-secondary/10 text-secondary"
                  : "bg-primary/10 text-primary"
              }`}
            >
              {choice.icon === "map" ? (
                <MapPin className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Video className="h-5 w-5" aria-hidden="true" />
              )}
            </div>
            <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-1">
              {choice.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-1">{choice.subtitle}</p>
            <p className="text-xs text-muted-foreground/80 mb-5">{choice.details}</p>
            <Button
              asChild
              variant={choice.kind === "onsite" ? "default" : "outline"}
              className="w-full mt-auto"
            >
              <a href={`#termin-${choice.kind}`}>
                {choice.cta}
                <ArrowDown className="h-4 w-4 ml-2" aria-hidden="true" />
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

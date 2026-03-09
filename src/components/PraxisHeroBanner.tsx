import praxisLounge from "@/assets/praxis-lounge.webp";
import praxisSitzbereich from "@/assets/praxis-sitzbereich.webp";

interface PraxisHeroBannerProps {
  variant?: "lounge" | "sitzbereich";
}

export const PraxisHeroBanner = ({ variant = "sitzbereich" }: PraxisHeroBannerProps) => {
  const image = variant === "lounge" ? praxisLounge : praxisSitzbereich;
  const alt =
    variant === "lounge"
      ? "Coaching-Praxis von Jona Fels in Freiburg – gemütlicher Lounge-Bereich mit Rattanstuhl und Glastisch"
      : "Coaching-Praxis von Jona Fels in Freiburg – einladender Sitzbereich mit Sofa, Sessel und warmem Licht";

  return (
    <div className="w-full h-48 md:h-64 lg:h-80 overflow-hidden relative">
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover object-center"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/40" />
    </div>
  );
};

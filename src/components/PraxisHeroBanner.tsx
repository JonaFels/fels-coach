import praxisLounge from "@/assets/praxis-lounge.webp";
import praxisLoungeMobile from "@/assets/praxis-lounge-800.webp";
import praxisSitzbereich from "@/assets/praxis-sitzbereich.webp";
import praxisSitzbereichMobile from "@/assets/praxis-sitzbereich-800.webp";
import { useCMS } from "@/contexts/CMSContext";
import { useLanguage } from "@/contexts/LanguageContext";

interface PraxisHeroBannerProps {
  variant?: "lounge" | "sitzbereich";
}

export const PraxisHeroBanner = ({ variant = "sitzbereich" }: PraxisHeroBannerProps) => {
  const { getImage } = useCMS();
  const { t } = useLanguage();
  const priorityProps = { fetchpriority: "high" } as Record<string, string>;
  const defaultImage = variant === "lounge" ? praxisLounge : praxisSitzbereich;
  const defaultMobile = variant === "lounge" ? praxisLoungeMobile : praxisSitzbereichMobile;
  const image = variant === "lounge"
    ? getImage("praxis.lounge", defaultImage)
    : getImage("praxis.sitzbereich", defaultImage);
  const imageMobile = variant === "lounge"
    ? getImage("praxis.lounge_mobile", defaultMobile)
    : getImage("praxis.sitzbereich_mobile", defaultMobile);
  const alt = variant === "lounge" ? t("praxis.lounge.alt") : t("praxis.sitzbereich.alt");

  return (
    <div className="w-full h-28 sm:h-36 md:h-[30vh] md:max-h-[280px] lg:h-[32vh] lg:max-h-[320px] overflow-hidden relative">
      <img
        src={image}
        srcSet={`${imageMobile} 800w, ${image} 1400w`}
        sizes="(max-width: 768px) 100vw, 1400px"
        alt={alt}
        className="img-warm w-full h-full object-cover object-center"
        loading="eager"
        decoding="async"
        {...priorityProps}
        width={1400}
        height={583}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/40" />
    </div>
  );
};

import { useState } from "react";
import { Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface YouTubeIntroProps {
  videoId: string;
  title?: string;
  subtitle?: string;
}

export const YouTubeIntro = ({ videoId, title, subtitle }: YouTubeIntroProps) => {
  const { language } = useLanguage();
  const [activated, setActivated] = useState(false);

  const heading =
    title ?? (language === "de" ? "Mein Angebot — persönlich vorgestellt" : "My work — a personal introduction");
  const sub =
    subtitle ??
    (language === "de"
      ? "In knapp drei Minuten erfährst du, wer ich bin, wie ich arbeite und für wen mein Coaching gedacht ist."
      : "In just under three minutes, I share who I am, how I work and who my coaching is for.");
  const playLabel = language === "de" ? "Video abspielen" : "Play video";

  // YouTube thumbnail – mqdefault is reliably available (hqdefault returns 403 for some videos)
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;
  const thumbnailFallback = `https://i.ytimg.com/vi/${videoId}/0.jpg`;

  return (
    <section
      id="video-intro"
      aria-labelledby="video-intro-heading"
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <p
            id="video-intro-heading"
            className="text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            <span className="font-serif text-foreground font-semibold text-xl md:text-2xl tracking-tight block mb-2">
              {heading}
            </span>
            {sub}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg ring-1 ring-border/20 bg-muted">
            {activated ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1&cc_load_policy=0`}
                title={heading}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
              />
            ) : (
              <button
                type="button"
                onClick={() => setActivated(true)}
                className="group absolute inset-0 w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label={playLabel}
              >
                <img
                  src={thumbnail}
                  alt={heading}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.src !== thumbnailFallback) img.src = thumbnailFallback;
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-foreground/10 to-transparent" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-background/95 shadow-xl transition-transform duration-300 group-hover:scale-110">
                    <Play
                      className="h-7 w-7 md:h-9 md:w-9 text-primary fill-current ml-1"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

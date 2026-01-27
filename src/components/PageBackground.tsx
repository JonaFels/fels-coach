import hintergrundStruktur from "@/assets/hintergrund-struktur.jpg";

interface PageBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export const PageBackground = ({ children, className = "" }: PageBackgroundProps) => {
  return (
    <main
      id="main-content"
      className={`flex-1 py-16 md:py-24 relative ${className}`}
      style={{
        backgroundImage: `url(${hintergrundStruktur})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
};

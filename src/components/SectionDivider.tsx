/**
 * Editorial Section-Divider: zwei feine Gradient-Linien mit einer kleinen
 * gedrehten Raute in der Mitte. Schafft ruhigen, hochwertigen Rhythmus.
 */
export const SectionDivider = ({ className = "" }: { className?: string }) => {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center gap-5 px-4 py-6 ${className}`}
    >
      <span className="h-px w-20 md:w-36 bg-gradient-to-r from-transparent via-secondary/30 to-secondary/40" />
      <span className="relative flex items-center justify-center" style={{ width: "0.65rem", height: "0.65rem" }}>
        <span className="absolute inset-0 rotate-45 border border-secondary/40" />
        <span className="absolute inset-[3px] rotate-45 bg-secondary/30" />
      </span>
      <span className="h-px w-20 md:w-36 bg-gradient-to-l from-transparent via-secondary/30 to-secondary/40" />
    </div>
  );
};

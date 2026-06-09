/**
 * Dezenter Section-Divider mit feiner Sage-Linie und kleinem Ornament in der Mitte.
 * Schafft visuellen Rhythmus zwischen Sektionen, ohne den ruhigen Charakter zu brechen.
 */
export const SectionDivider = ({ className = "" }: { className?: string }) => {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center gap-4 px-4 py-2 ${className}`}
    >
      <span className="h-px w-16 md:w-28 bg-gradient-to-r from-transparent to-secondary/30" />
      <span className="relative flex items-center justify-center">
        <span className="absolute h-1.5 w-1.5 rounded-full bg-secondary/40" />
        <span className="h-3 w-3 rounded-full border border-secondary/30" />
      </span>
      <span className="h-px w-16 md:w-28 bg-gradient-to-l from-transparent to-secondary/30" />
    </div>
  );
};

import { useEffect, useRef, useState, type ReactNode } from "react";

interface LazyMountProps {
  children: ReactNode;
  /** Wie weit unter dem Viewport bereits gemountet wird (CSS-margin-Notation). */
  rootMargin?: string;
  /** Mindesthöhe als Platzhalter, um Layout-Shifts zu vermeiden. */
  minHeight?: string;
  /** Falls IntersectionObserver fehlt, wird sofort gemountet. */
  fallback?: ReactNode;
}

/**
 * Mountet Kinder erst, wenn der Container in den Viewport scrollt.
 * Verhindert teure Mount-Reflows (z. B. Radix Accordion getBoundingClientRect)
 * im kritischen Pfad und entlastet den TBT auf der Startseite.
 */
export const LazyMount = ({
  children,
  rootMargin = "300px 0px",
  minHeight = "auto",
  fallback = null,
}: LazyMountProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setShouldMount(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldMount(true);
          obs.disconnect();
        }
      },
      { rootMargin },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: shouldMount ? undefined : minHeight }}>
      {shouldMount ? children : fallback}
    </div>
  );
};

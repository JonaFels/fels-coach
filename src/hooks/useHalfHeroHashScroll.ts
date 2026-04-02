import { useLayoutEffect, type RefObject } from "react";
import { useLocation } from "react-router-dom";

export const useHalfHeroHashScroll = (
  expectedHash: string,
  heroRef: RefObject<HTMLElement>,
  fraction = 0.5,
) => {
  const { hash } = useLocation();

  useLayoutEffect(() => {
    if (hash !== expectedHash || !heroRef.current) return;

    const scrollToHalfHero = () => {
      const heroHeight = heroRef.current?.offsetHeight ?? 0;
      const targetTop = Math.max(0, Math.round(heroHeight * fraction));
      window.scrollTo({ top: targetTop, left: 0 });
    };

    const raf1 = window.requestAnimationFrame(() => {
      const raf2 = window.requestAnimationFrame(scrollToHalfHero);
      window.setTimeout(scrollToHalfHero, 120);
      return raf2;
    });

    return () => window.cancelAnimationFrame(raf1);
  }, [expectedHash, hash, heroRef]);
};

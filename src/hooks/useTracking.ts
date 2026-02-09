import { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import {
  trackPageView,
  trackScrollDepth,
  trackButtonClick,
  trackLinkClick,
  trackCTAClick,
} from "@/lib/tracking";

/**
 * Hook für automatisches Page-View-Tracking bei SPA-Navigation
 */
export const usePageTracking = (): void => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    trackPageView(location.pathname, document.title);
  }, [location.pathname]);
};

/**
 * Hook für Scroll-Depth-Tracking
 */
export const useScrollTracking = (): void => {
  const location = useLocation();
  const trackedDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    // Reset tracked depths on page change
    trackedDepths.current.clear();

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = Math.round(
        (scrollTop / (documentHeight - windowHeight)) * 100
      );

      const depths = [25, 50, 75, 100];
      depths.forEach((depth) => {
        if (scrollPercent >= depth && !trackedDepths.current.has(depth)) {
          trackedDepths.current.add(depth);
          trackScrollDepth(depth, location.pathname);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);
};

/**
 * Hook für Button-Tracking mit Callback
 */
export const useButtonTracking = (
  buttonName: string,
  location: string
): ((e?: React.MouseEvent) => void) => {
  return useCallback(
    (e?: React.MouseEvent) => {
      trackButtonClick(buttonName, location);
    },
    [buttonName, location]
  );
};

/**
 * Hook für CTA-Tracking
 */
export const useCTATracking = (
  ctaName: string,
  ctaLocation: string,
  destinationUrl: string
): ((e?: React.MouseEvent) => void) => {
  return useCallback(
    (e?: React.MouseEvent) => {
      trackCTAClick(ctaName, ctaLocation, destinationUrl);
    },
    [ctaName, ctaLocation, destinationUrl]
  );
};

/**
 * Hook für automatisches Link-Tracking via Event Delegation
 */
export const useAutoLinkTracking = (): void => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (link) {
        const href = link.getAttribute("href") || "";
        const text = link.textContent?.trim() || "";

        // Track external links
        if (href.startsWith("http") && !href.includes(window.location.hostname)) {
          trackLinkClick(text, href, "external");
        }

        // Track internal navigation
        if (href.startsWith("/")) {
          trackLinkClick(text, href, "internal");
        }

        // Track tel: and mailto: links
        if (href.startsWith("tel:")) {
          trackLinkClick(text, href, "phone");
        }
        if (href.startsWith("mailto:")) {
          trackLinkClick(text, href, "email");
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
};

/**
 * Combined tracking hook for App component
 */
export const useAppTracking = (): void => {
  usePageTracking();
  useScrollTracking();
  useAutoLinkTracking();
};

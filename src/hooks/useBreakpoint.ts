import { useEffect, useState } from "react";

type Breakpoint = "tiny" | "xs" | "sm" | "md" | "lg" | "xl";

const breakpoints: Record<Breakpoint, string> = {
  tiny: "(min-width: 320px)",
  xs: "(min-width: 480px)",
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
};

export function useBreakpoint(breakpoint: Breakpoint): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = breakpoints[breakpoint];
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const handler = () => setMatches(media.matches);
    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return matches;
}

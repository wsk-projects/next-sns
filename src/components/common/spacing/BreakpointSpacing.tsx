"use client";

import { useBreakpoint } from "@/hooks/useBreakpoint";
import clsx from "clsx";

interface BreakpointSpacingProps {
  direction: "horizontal" | "horizontal";
  size: "12" | "16" | "20";
}

const horizontalSizes = {
  "12": "ml-12",
  "16": "ml-16",
  "20": "ml-20",
};

const verticalSizes = {
  "12": "mt-12",
  "16": "mt-16",
  "20": "mt-20",
};

export default function BreakpointSpacing({ direction, size }: BreakpointSpacingProps): React.ReactNode {
  const isDesktop = useBreakpoint("lg");
  const spaceStyle = direction === "horizontal" ? horizontalSizes[size] : verticalSizes[size];

  return <div className={clsx(!isDesktop && spaceStyle)} />;
}

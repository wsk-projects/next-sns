"use client";

import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function Navigation() {
  const isDesktop = useBreakpoint("lg");

  return <nav>{isDesktop ? <NavDesktop /> : <NavMobile />}</nav>;
}

const NavDesktop = () => {
  return <div>Desktop</div>;
};

const NavMobile = () => {
  return <div>Mobile</div>;
};

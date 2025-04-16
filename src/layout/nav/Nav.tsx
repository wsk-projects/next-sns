"use client";

import { useBreakpoint } from "@/hooks/useBreakpoint";
import Container from "@/components/container/Container";
export default function Navigation() {
  const isDesktop = useBreakpoint("lg");

  return (
    <Container as="nav" className="min-h-8 bg-neutral-500 text-white">
      {isDesktop ? <NavDesktop /> : <NavMobile />}
    </Container>
  );
}

const NavDesktop = () => {
  return <div>Desktop</div>;
};

const NavMobile = () => {
  return <div>Mobile</div>;
};

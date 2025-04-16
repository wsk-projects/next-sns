"use client";

import LinkButton from "@/components/common/button/LinkButton";
import Floating from "@/components/common/container/Floating";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Compass, House, MessageCircle, SquarePlus, UserRound } from "lucide-react";

export default function Navigation(): React.ReactNode {
  const isDesktop = useBreakpoint("lg");

  return isDesktop ? <NavDesktop /> : <NavMobile />;
}

const NavDesktop = (): React.ReactNode => {
  return <div>Desktop</div>;
};

const NavMobile = (): React.ReactNode => {
  return (
    <Floating as="nav" position="bottom" height="12" className="bg-neutral-800 text-white">
      <NavItem href="/">
        <House size={24} />
      </NavItem>
      <NavItem href="/explore">
        <Compass size={24} />
      </NavItem>
      <NavItem href="/post">
        <SquarePlus size={24} />
      </NavItem>
      <NavItem href="/messages">
        <MessageCircle size={24} />
      </NavItem>
      <NavItem href="/user/#">
        <UserRound size={24} />
      </NavItem>
    </Floating>
  );
};

const NavItem = ({ href, children }: { children: React.ReactNode; href: string }): React.ReactNode => {
  return <LinkButton href={href}>{children}</LinkButton>;
};

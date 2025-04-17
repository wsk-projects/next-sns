"use client";

import { Floating } from "@/components/common/container/Floating";
import { Stack } from "@/components/common/flexbox/Stack";
import LinkButton from "@/components/common/interaction/LinkButton";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import clsx from "clsx";
import { Compass, House, MessageCircle, SquarePlus, UserRound } from "lucide-react";

export default function Navigation(): React.ReactNode {
  const isDesktop = useBreakpoint("lg");

  return isDesktop ? <NavDesktop /> : <NavMobile />;
}

const NavDesktop = (): React.ReactNode => {
  return (
    <aside
      className={clsx(
        "flex flex-col justify-start items-start",
        "w-60 h-auto border-r p-4 gap-4",
        "bg-neutral-800 text-white z-20"
      )}
    >
      <Stack.V gap justify="between">
        <Stack.V>
          <LinkButton fill href="/" className="hover:bg-neutral-700">
            <House size={32} />
            <span className="ml-3">홈</span>
          </LinkButton>
          <LinkButton fill href="/explore" className="hover:bg-neutral-700">
            <Compass size={32} />
            <span className="ml-3">탐색</span>
          </LinkButton>
          <LinkButton fill href="/messages" className="hover:bg-neutral-700">
            <MessageCircle size={32} />
            <span className="ml-3">메시지</span>
          </LinkButton>
          <LinkButton fill href="/post" className="hover:bg-neutral-700">
            <SquarePlus size={32} />
            <span className="ml-3">게시</span>
          </LinkButton>
          <LinkButton fill href="/user/#" className="hover:bg-neutral-700">
            <UserRound size={32} />
            <span className="ml-3">프로필</span>
          </LinkButton>
        </Stack.V>
      </Stack.V>
    </aside>
  );
};

const NavMobile = (): React.ReactNode => {
  return (
    <Floating.Bottom as="nav" padding className="w-full h-12 bg-neutral-800 text-white">
      <Stack.H>
        <LinkButton href="/" className="hover:bg-neutral-700">
          <House size={32} />
        </LinkButton>
        <LinkButton href="/explore" className="hover:bg-neutral-700">
          <Compass size={32} />
        </LinkButton>
        <LinkButton href="/post" className="hover:bg-neutral-700">
          <SquarePlus size={32} />
        </LinkButton>
        <LinkButton href="/messages" className="hover:bg-neutral-700">
          <MessageCircle size={32} />
        </LinkButton>
        <LinkButton href="/user/#" className="hover:bg-neutral-700">
          <UserRound size={32} />
        </LinkButton>
      </Stack.H>
    </Floating.Bottom>
  );
};

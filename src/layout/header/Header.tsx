import { Floating } from "@/components/common/container/Floating";
import Wrapper from "@/components/common/container/Wrapper";
import { Title } from "@/components/common/content/Title";
import MenuButton from "@/components/ui/button/MenuButton";
import HeaderBackButton from "../../components/ui/button/BackButton";
import { Stack } from "@/components/common/flexbox/Stack";

export default function Header(): React.ReactNode {
  return (
    <Floating.Top as="header" className="w-full h-16 bg-neutral-800 text-white">
      <Stack.H>
        <HeaderBackButton />
        <Title.h1>페이지 제목</Title.h1>
        <HeaderActions />
      </Stack.H>
    </Floating.Top>
  );
}

function HeaderActions(): React.ReactNode {
  return (
    <Wrapper className="flex items-center gap-2">
      <MenuButton />
    </Wrapper>
  );
}

import Floating from "@/components/common/container/Floating";
import Wrapper from "@/components/common/container/Wrapper";
import { Title } from "@/components/common/content/Title";
import MenuButton from "@/components/ui/button/MenuButton";
import HeaderBackButton from "../../components/ui/button/BackButton";

export default function Header(): React.ReactNode {
  return (
    <Floating as="header" position="top" height="16" className="bg-neutral-800 text-white">
      <HeaderBackButton />
      <Title.h1>페이지 제목</Title.h1>
      <HeaderActions />
    </Floating>
  );
}

function HeaderActions(): React.ReactNode {
  return (
    <Wrapper className="flex items-center gap-2">
      <MenuButton />
    </Wrapper>
  );
}

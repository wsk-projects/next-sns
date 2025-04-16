import Wrapper from "@/components/common/container/Wrapper";
import { Title } from "@/components/common/content/Title";
import Button from "@/components/common/button/Button";
import HeaderBackButton from "../../components/ui/button/BackButton";
import Container from "@/components/common/container/Container";
import { clsx } from "clsx";
import { Menu } from "lucide-react";

export default function Header(): React.ReactNode {
  return (
    <HeaderWrapper>
      <HeaderBackButton />
      <Title.h1>페이지 제목</Title.h1>
      <HeaderActions />
    </HeaderWrapper>
  );
}

function HeaderWrapper({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <Container
      as="header"
      className={clsx(
        "flex items-center justify-between",
        "w-full min-h-16 border-b",
        "fixed top-0 left-0 z-10",
        "bg-neutral-800 text-white"
      )}
    >
      {children}
    </Container>
  );
}

function HeaderActions(): React.ReactNode {
  return (
    <Wrapper className="flex items-center gap-2">
      <Button>
        <Menu size={32} />
      </Button>
    </Wrapper>
  );
}

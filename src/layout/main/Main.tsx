import Container from "@/components/common/container/Container";

export default function Main({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <Container as="main" className="flex-1 min-h-screen">
      {children}
    </Container>
  );
}

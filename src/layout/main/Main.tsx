import Container from "@/components/container/Container";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Container as="main" className="flex-1">
      {children}
    </Container>
  );
}

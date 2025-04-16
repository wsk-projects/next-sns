import clsx from "clsx";
import Container from "./Container";

interface FloatingProps {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  position?: "top" | "bottom";
  height?: "12" | "16" | "20";
}

const positionStyles = {
  top: "top-0 left-0",
  bottom: "bottom-0 left-0",
};

const heightStyles = {
  "12": "min-h-12",
  "16": "min-h-16",
  "20": "min-h-20",
};

export default function Floating({
  as = "div",
  children,
  className,
  position = "top",
  height = "16",
}: FloatingProps): React.ReactNode {
  const baseStyle = "flex items-center justify-between fixed z-10 w-full";
  const positionStyle = positionStyles[position];
  const heightStyle = heightStyles[height];
  return (
    <Container as={as} className={clsx(baseStyle, positionStyle, heightStyle, className)}>
      {children}
    </Container>
  );
}

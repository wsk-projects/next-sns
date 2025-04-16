import { clsx } from "clsx";
import { ReactNode } from "react";

interface ContainerProps {
  as?: keyof JSX.IntrinsicElements;
  id?: string;
  children: ReactNode;
  className?: string;
  padding?: boolean;
}

export default function Container({
  as: Tag = "div",
  id = undefined,
  children,
  className,
  padding = true,
}: ContainerProps) {
  const baseStyle = "mx-auto w-full";

  return (
    <Tag id={id} className={clsx(baseStyle, padding && "px-4 py-2", className)}>
      {children}
    </Tag>
  );
}

import { clsx } from "clsx";
import { ReactNode } from "react";

interface ContainerProps {
  as?: keyof JSX.IntrinsicElements;
  id?: string;
  className?: string;
  children: ReactNode;
  padding?: boolean;
}

export default function Container({
  as: Tag = "div",
  id = undefined,
  className,
  children,
  padding = true,
}: ContainerProps): React.ReactNode {
  const baseStyle = "mx-auto w-full";

  return (
    <Tag id={id} className={clsx(baseStyle, padding && "px-4 py-2", className)}>
      {children}
    </Tag>
  );
}

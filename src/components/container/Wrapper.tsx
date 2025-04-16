import { clsx } from "clsx";
import { ReactNode } from "react";

interface WrapperProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
}

export default function Wrapper({ as: Tag = "div", className, children }: WrapperProps): React.ReactNode {
  return <Tag className={clsx(className)}>{children}</Tag>;
}

import { clsx } from "clsx";
import { ReactNode } from "react";

interface WrapperProps {
  as?: keyof JSX.IntrinsicElements;
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function Wrapper({ as: Tag = "div", id, className, children }: WrapperProps): React.ReactNode {
  return (
    <Tag id={id} className={clsx(className)}>
      {children}
    </Tag>
  );
}

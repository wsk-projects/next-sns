import { clsx } from "clsx";
import { ReactNode } from "react";

type TitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps {
  tag?: TitleTag;
  children: ReactNode;
  className?: string;
}

const tagStyles: Record<TitleTag, string> = {
  h1: "text-2xl font-semibold",
  h2: "text-xl font-semibold",
  h3: "text-lg font-medium",
  h4: "text-base font-medium",
  h5: "text-sm font-medium",
  h6: "text-xs font-medium",
};

function createTitleComponent(tag: TitleTag) {
  return function TitleComponentWrapper({ tag: Tag = tag, children, className }: TitleProps) {
    const baseStyle = "truncate";
    const tagStyle = tagStyles[tag];
    return <Tag className={clsx(baseStyle, tagStyle, className)}>{children}</Tag>;
  };
}

export const Title = {
  h1: createTitleComponent("h1"),
  h2: createTitleComponent("h2"),
  h3: createTitleComponent("h3"),
  h4: createTitleComponent("h4"),
  h5: createTitleComponent("h5"),
  h6: createTitleComponent("h6"),
};

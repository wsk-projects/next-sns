import { FlexBoxProps, ALIGN_ITEMS, JUSTIRY_CONTENT, FLEX_DIRECTION } from "@/types/props/flexBoxProps";
import { clsx } from "clsx";
import { ReactNode } from "react";

interface FlexProps extends FlexBoxProps {
  as?: keyof JSX.IntrinsicElements;
  id?: string;
  className?: string;
  children: ReactNode;
  padding?: boolean;
}

export default function Flex({
  as: Tag = "div",
  id,
  className,
  children,
  direction = "horizontal",
  justify = "between",
  align = "center",
  gap = false,
  padding = false,
}: FlexProps) {
  const baseStyle = "flex w-full";

  return (
    <Tag
      id={id}
      className={clsx(
        baseStyle,
        FLEX_DIRECTION[direction],
        JUSTIRY_CONTENT[justify],
        ALIGN_ITEMS[align],
        gap && "gap-2",
        padding && "px-2 py-1",
        className
      )}
    >
      {children}
    </Tag>
  );
}

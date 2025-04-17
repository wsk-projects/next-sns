import { PositionProps, BOTTOM, LEFT, RIGHT, TOP, Z_INDEX } from "@/types/props/positionProps";
import clsx from "clsx";
import type { ReactNode } from "react";

interface FloatingBuilderProps extends PositionProps {
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  id?: string;
  className?: string;
  padding?: boolean;
}

function FloatingBuilder({
  as: Tag = "div",
  id,
  children,
  className,
  top,
  right,
  bottom,
  left,
  zIndex = "10",
  padding = false,
}: FloatingBuilderProps): React.ReactNode {
  const baseStyle = "flex items-center fixed";

  return (
    <Tag
      id={id}
      className={clsx(
        baseStyle,
        top && TOP[top],
        right && RIGHT[right],
        bottom && BOTTOM[bottom],
        left && LEFT[left],
        Z_INDEX[zIndex],
        padding && "px-4 py-2",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export const Floating = {
  Top: (props: Omit<FloatingBuilderProps, "top" | "bottom">) => FloatingBuilder({ top: "0", ...props }),
  Right: (props: Omit<FloatingBuilderProps, "right" | "left">) => FloatingBuilder({ right: "0", ...props }),
  Left: (props: Omit<FloatingBuilderProps, "left" | "right">) => FloatingBuilder({ left: "0", ...props }),
  Bottom: (props: Omit<FloatingBuilderProps, "bottom" | "top">) => FloatingBuilder({ bottom: "0", ...props }),
};

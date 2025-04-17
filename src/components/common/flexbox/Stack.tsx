import type { FlexBoxProps } from "@/types/props/flexBoxProps";
import type { ReactNode } from "react";
import Flex from "./Flex";

interface StackProps extends Omit<FlexBoxProps, "direction"> {
  as?: keyof JSX.IntrinsicElements;
  id?: string;
  className?: string;
  children: ReactNode;
  padding?: boolean;
}

export const Stack = {
  H: ({ justify = "between", align = "center", ...props }: StackProps) => (
    <Flex direction="horizontal" justify={justify} align={align} {...props} />
  ),
  V: ({ justify = "start", align = "start", ...props }: StackProps) => (
    <Flex direction="vertical" justify={justify} align={align} {...props} />
  ),
};

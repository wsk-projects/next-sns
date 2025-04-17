export interface FlexBoxProps {
  direction?: "horizontal" | "vertical";
  justify?: "start" | "center" | "end" | "between" | "around";
  align?: "start" | "center" | "end";
  gap?: boolean;
}

export const FLEX_DIRECTION = {
  horizontal: "flex-row",
  vertical: "flex-col",
};

export const JUSTIRY_CONTENT = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
};

export const ALIGN_ITEMS = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
};

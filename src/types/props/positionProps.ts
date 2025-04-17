type positionValues = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "10";
type zIndexValues = "5" | "10" | "20" | "30" | "40" | "50";

export interface PositionProps {
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  top?: positionValues;
  right?: positionValues;
  bottom?: positionValues;
  left?: positionValues;
  zIndex?: zIndexValues;
}

export const TOP = {
  "0": "top-0",
  "1": "top-1",
  "2": "top-2",
  "3": "top-3",
  "4": "top-4",
  "5": "top-5",
  "6": "top-6",
  "7": "top-7",
  "8": "top-8",
  "10": "top-10",
};

export const BOTTOM = {
  "0": "bottom-0",
  "1": "bottom-1",
  "2": "bottom-2",
  "3": "bottom-3",
  "4": "bottom-4",
  "5": "bottom-5",
  "6": "bottom-6",
  "7": "bottom-7",
  "8": "bottom-8",
  "10": "bottom-10",
};

export const RIGHT = {
  "0": "right-0",
  "1": "right-1",
  "2": "right-2",
  "3": "right-3",
  "4": "right-4",
  "5": "right-5",
  "6": "right-6",
  "7": "right-7",
  "8": "right-8",
  "10": "right-10",
};

export const LEFT = {
  "0": "left-0",
  "1": "left-1",
  "2": "left-2",
  "3": "left-3",
  "4": "left-4",
  "5": "left-5",
  "6": "left-6",
  "7": "left-7",
  "8": "left-8",
  "10": "left-10",
};

export const Z_INDEX = {
  "5": "z-5",
  "10": "z-10",
  "20": "z-20",
  "30": "z-30",
  "40": "z-40",
  "50": "z-50",
};

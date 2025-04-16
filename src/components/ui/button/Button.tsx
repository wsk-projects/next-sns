"use client";

import { clsx } from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "none" | "primary" | "secondary" | "warning" | "danger";
  size?: "none" | "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
}

const buttonVariant = {
  none: "",
  primary: "bg-neutral-800 text-white hover:bg-neutral-900",
  secondary: "bg-neutral-100 text-neutral-800 hover:bg-neutral-200",
  warning: "bg-yellow-500 text-white hover:bg-yellow-600",
  danger: "bg-red-500 text-white hover:bg-red-600",
};

const buttonSize = {
  none: "px-1 py-1",
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

export default function Button({
  className,
  children,
  variant = "none",
  size = "none",
  onClick = () => {},
  disabled = false,
}: ButtonProps): React.ReactNode {
  const baseStyle = "inline-flex items-center justify-center rounded font-medium";
  const variantStyle = buttonVariant[variant];
  const sizeStyle = buttonSize[size];
  return (
    <button
      type="button"
      className={clsx(baseStyle, variantStyle, sizeStyle, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

import Link from "next/link";
import { clsx } from "clsx";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "p-1",
  md: "p-2",
  lg: "p-3",
};

export default function LinkButton({ href, children, className, size = "md" }: LinkProps): React.ReactNode {
  const baseStyle = "flex justify-center items-center text-white font-semibold text-center";
  const sizeStyle = sizes[size];
  return (
    <div className="flex justify-center items-center">
      <Link href={href} className={clsx(baseStyle, sizeStyle, className)}>
        {children}
      </Link>
    </div>
  );
}

import Link from "next/link";
import { clsx } from "clsx";
import { FlexBoxProps } from "@/types/props/flexBoxProps";

interface LinkProps extends FlexBoxProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  fill?: boolean;
}

export default function LinkButton({ href, children, className, fill = false }: LinkProps): React.ReactNode {
  const baseStyle = "rounded text-white font-semibold";
  return (
    <div className={clsx(baseStyle, fill && "w-full", className)}>
      <Link href={href} className={clsx("flex justify-start items-center p-2")}>
        {children}
      </Link>
    </div>
  );
}

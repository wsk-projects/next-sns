"use client";

import Button from "@/components/common/interaction/Button";
import { Menu } from "lucide-react";

export default function MenuButton(): React.ReactNode {
  return (
    <Button variant="none" size="none">
      <Menu size={32} />
    </Button>
  );
}

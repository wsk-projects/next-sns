"use client";

import Button from "@/components/common/button/Button";
import { ArrowLeft } from "lucide-react";

export default function HeaderBackButton(): React.ReactNode {
  return (
    <Button onClick={() => history.back()}>
      <ArrowLeft size={32} />
    </Button>
  );
}

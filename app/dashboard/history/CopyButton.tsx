
"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface Props {
  text: string;
}

export default function CopyButton({ text }: Props) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Button variant="ghost" className="text-primary" onClick={handleCopy}>
      <Copy className="w-4 h-4 mr-1" /> Copy
    </Button>
  );
}

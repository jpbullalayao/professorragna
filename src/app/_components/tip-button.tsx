import type { PropsWithChildren } from "react";

import { Text } from "@/components/text";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props extends PropsWithChildren {
  isSelected: boolean;
  onClick: () => void;
}

export const TipButton: React.FC<Props> = ({
  children,
  isSelected,
  onClick,
}) => {
  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={onClick}
      className={cn("group", isSelected && "bg-interactive")}
    >
      <Text
        className={cn("group-hover:text-white", isSelected && "text-white")}
      >
        {children}
      </Text>
    </Button>
  );
};

import { cn } from "@nextui-org/react";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};
function TopBar({ children, className }: Props) {
  return (
    <div
      className={cn(
        "w-full flex items-center justify-between px-5 h-[70px] shadow-sidebar",
        className
      )}
    >
      {children}
    </div>
  );
}

export default TopBar;

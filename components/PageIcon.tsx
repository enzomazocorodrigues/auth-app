import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

type PageIconProps = {
  children: ReactNode;
};

export function PageIcon({ children }: PageIconProps) {
  return (
    <div className="w-12 h-12 rounded-full bg-green-100 flex justify-center items-center">
      <Slot itemProp="width" className="text-green-500">
        {children}
      </Slot>
    </div>
  );
}

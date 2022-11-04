import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

type PageIconProps = {
  children: ReactNode;
  large?: boolean;
};

export function PageIcon({ children, large }: PageIconProps) {
  return (
    <div
      className={`${
        large ? "w-24 h-24" : "w-12 h-12"
      } rounded-full bg-green-100 flex justify-center items-center`}
    >
      <Slot itemProp="width" className="text-green-500">
        {children}
      </Slot>
    </div>
  );
}

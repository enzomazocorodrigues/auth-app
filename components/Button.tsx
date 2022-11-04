import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export function Button({ asChild, children, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className="w-full text-center bg-green-400 p-3 rounded-md text-base font-medium text-white hover:bg-green-300 focus:ring-2 outline-none"
      {...props}
    >
      {children}
    </Comp>
  );
}

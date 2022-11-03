import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="w-full bg-green-400 p-3 rounded-md text-base font-medium text-white"
      {...props}
    >
      {children}
    </button>
  );
}

import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ id, label, ...props }: InputProps) {
  return (
    <div>
      {label && (
        <label className="text-sm text-slate-600 font-medium" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        className="w-full rounded-md outline-none border border-gray-200 py-2 px-3 text-slate-700 text-sm focus:ring-2"
        {...props}
      />
    </div>
  );
}

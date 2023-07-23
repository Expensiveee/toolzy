import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const input = cva(
  "w-full text-sm text-white placeholder:text-neutral-400 rounded focus:outline-none active:outline-none",
  {
    variants: {
      theme: {
        primary: ["border", "border-dark-400/40", "px-4", "py-3", "bg-dark-500"],
        none: ["border-0", "p-0", "bg-transparent"],
      },
    },
    defaultVariants: {
      theme: "primary",
    },
  }
);

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof input> {}

const Input: React.FC<InputProps> = ({ className, theme, ...props }) => {
  return <input autoComplete="off" className={input({ theme, className })} {...props} />;
};

export default Input;

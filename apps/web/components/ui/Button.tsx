"use client";

import { RIPPLE_DURATION } from "@web/constants";
import { cva, cx, type VariantProps } from "class-variance-authority";

const button = cva(
  "select-none flex relative overflow-hidden items-center rounded-[10px] h-fit shrink-0 grow-0 font-medium capitalize transition-colors duration-300 ease-in-out",
  {
    variants: {
      theme: {
        primary: ["bg-primary-500", "hover:bg-primary-700"],
        secondary: ["bg-primary-500/20", "hover:bg-primary-700/20", "text-primary-500"],
        outline: ["bg-transparent", "hover:bg-[rgba(255,255,255,0.03)]", "border", "border-dark-400/40"],
      },
      size: {
        small: ["px-2.5", "py-2", "text-sm"],
        medium: ["px-4", "py-3", "text-md"],
        large: ["px-6", "py-4", "text-lg"],
      },
    },

    defaultVariants: {
      theme: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  variant?: "text" | "icon" | "text-icon";
  icon?: React.ReactNode;
  direction?: "left" | "right";
}

const addRipple = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  const elem = e.currentTarget;

  const rect = elem.getBoundingClientRect();
  const left = e.clientX - rect.left;
  const top = e.clientY - rect.top;
  const height = elem.clientHeight;
  const width = elem.clientWidth;
  const diameter = Math.max(width, height);

  const ripple = document.createElement("span");

  ripple.style.position = "absolute";
  ripple.style.height = `${diameter}px`;
  ripple.style.width = `${diameter}px`;
  ripple.style.left = `${left - diameter / 2}px`;
  ripple.style.top = `${top - diameter / 2}px`;
  ripple.style.backgroundColor = "rgba(255,255,255,0.4)";
  ripple.style.borderRadius = "50%";
  ripple.classList.add("animate-ripple");

  elem.appendChild(ripple);

  setTimeout(() => {
    elem.removeChild(ripple);
  }, RIPPLE_DURATION);
};

const Button: React.FC<ButtonProps> = ({ className, theme, size, variant, icon, direction = "left", ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    addRipple(e);

    if (props?.onClick) {
      props.onClick(e);
    }
  };

  if (variant === "icon") {
    const combinedClassName = cx(button({ theme, size, className }), "aspect-square");

    return (
      <button onClick={handleClick} className={combinedClassName} {...props}>
        {icon}
      </button>
    );
  }

  if (variant === "text-icon") {
    const leftOrRight = direction === "right" ? "flex-row" : "flex-row-reverse";
    const combinedClassName = cx(button({ theme, size, className }), [leftOrRight, "gap-1.5"]);

    return (
      <button onClick={handleClick} className={combinedClassName} {...props}>
        {icon}
        {props?.children}
      </button>
    );
  }

  return <button onClick={handleClick} className={button({ theme, size, className })} {...props} />;
};

export default Button;

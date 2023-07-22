import { cva, cx, type VariantProps } from "class-variance-authority";
import NextLink from "next/link";

const link = cva(
  "select-none border-0 flex hover:bg-[rgba(255,255,255,0.03)] relative overflow-hidden items-center rounded-[10px]  h-fit shrink-0 grow-0 font-medium capitalize transition-colors duration-300 ease-in-out",
  {
    variants: {
      size: {
        small: ["px-2.5", "py-2", "text-sm"],
        medium: ["px-4", "py-3", "text-md"],
        large: ["px-6", "py-4", "text-lg"],
      },
    },
    defaultVariants: {
      size: "small",
    },
  }
);

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof link> {
  variant?: "text" | "icon" | "text-icon";
  icon?: React.ReactNode;
  direction?: "left" | "right";
  href: string;
}

const Link: React.FC<LinkProps> = ({ className, size, variant, icon, direction = "left", href, ...props }) => {
  if (variant === "icon") {
    const combinedClassName = cx(link({ size, className }), "aspect-square");

    return (
      <NextLink href={href} className={combinedClassName} {...props}>
        {icon}
      </NextLink>
    );
  }

  if (variant === "text-icon") {
    const leftOrRight = direction === "right" ? "flex-row" : "flex-row-reverse";
    const combinedClassName = cx(link({ size, className }), [leftOrRight, "gap-1.5"]);

    return (
      <NextLink href={href} className={combinedClassName} {...props}>
        {props?.children}
        {icon}
      </NextLink>
    );
  }

  return <NextLink href={href} className={link({ size, className })} {...props} />;
};

export default Link;

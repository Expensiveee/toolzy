import { cva, type VariantProps } from "class-variance-authority";

const text = cva("", {
  variants: {
    size: {
      display: ["text-6xl", "font-black", "capitalize"],
      h1: ["text-4xl", "font-extrabold"],
      h2: ["text-3xl", "font-bold"],
      h3: ["text-2xl", "font-bold"],
      h4: ["text-xl", "font-semibold"],
      h5: ["text-lg", "font-semibold"],
      h6: ["text-base", "font-medium"],
      body1: ["text-md", "font-normal"],
      body2: ["text-sm", "font-normal"],
      caption: ["text-xs", "font-light"],
    },
    color: {
      white: ["text-white"],
      primary: ["text-primary-500"],
      gray: ["text-dark-400"],
    },
  },
  defaultVariants: {
    color: "white",
  },
});

//Exluding color from the props because we want to use our own color prop
export interface TextProps extends Omit<React.HTMLAttributes<HTMLElement>, "color">, VariantProps<typeof text> {
  tag?: React.ElementType;
}

export default function Text({ className, tag = "span", size, color, ...props }: TextProps) {
  const Tag = tag;

  return <Tag {...props} className={text({ size, color, className })} />;
}

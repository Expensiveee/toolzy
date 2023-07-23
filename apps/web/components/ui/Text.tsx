import { cva, type VariantProps } from "class-variance-authority";

const text = cva("", {
  variants: {
    size: {
      display: ["text-7xl"],
      h1: ["text-6xl"],
      h2: ["text-5xl"],
      h3: ["text-4xl"],
      h4: ["text-3xl"],
      h5: ["text-2xl"],
      h6: ["text-xl"],
      body1: ["text-base"],
      body2: ["text-md"],
      caption: ["text-sm"],
    },
    color: {
      white: ["text-white"],
      primary: ["text-primary-500"],
      gray: ["text-neutral-200"],
    },
    weight: {
      black: ["font-black"],
      extrabold: ["font-extrabold"],
      bold: ["font-bold"],
      semibold: ["font-semibold"],
      medium: ["font-medium"],
      normal: ["font-normal"],
      light: ["font-light"],
      extralight: ["font-extralight"],
      thin: ["font-thin"],
    },
  },
  defaultVariants: {
    color: "white",
  },
});

//Exluding color from the props because we want to use our own color prop
export interface TextProps extends Omit<React.HTMLAttributes<HTMLElement>, "color">, VariantProps<typeof text> {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
}

export default function Text({ className, tag = "span", size, color, weight, ...props }: TextProps) {
  const Tag = tag;

  return <Tag {...props} className={text({ size, color, className, weight })} />;
}

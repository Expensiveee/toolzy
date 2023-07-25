import { cva, type VariantProps } from "class-variance-authority";

const text = cva("", {
  variants: {
    size: {
      display: ["lg:text-7xl", "text-5xl"],
      h1: ["lg:text-6xl", "text-4xl"],
      h2: ["lg:text-5xl", "text-3xl"],
      h3: ["lg:text-4xl", "text-2xl"],
      h4: ["lg:text-3xl", "text-xl"],
      h5: ["lg:text-2xl", "text-lg"],
      h6: ["lg:text-xl", "text-base"],
      body1: ["lg:text-base", "text-sm"],
      body2: ["lg:text-md", "text-xs"],
      caption: ["lg:text-sm", "text-xxs"],
    },
    color: {
      white: ["text-white"],
      lightgray: ["text-neutral-200"],
      primary: ["text-primary-500"],
      darkgray: ["text-zinc-600"],
      black: ["text-zinc-800"],
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

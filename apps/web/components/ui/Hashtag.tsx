"use client";
import { cva, cx, type VariantProps } from "class-variance-authority";
import Image from "next/image";

const hashtag = cva(
  "rounded-full w-fit cursor-pointer px-4 py-2.5 border text-sm transition-colors duration-300 ease-in-out font-medium",
  {
    variants: {
      theme: {
        dark: ["bg-dark-700", "hover:bg-dark-600", "text-white", "border-dark-400/40"],
        light: ["bg-white", "hover:bg-gray-100", "text-zinc-800", "border-zinc-400/40"],
      },
    },
  }
);

export interface HashtagProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof hashtag> {
  emoji?: string;
  text: string;
}

const Hashtag: React.FC<HashtagProps> = ({ className, text, emoji, theme, ...props }) => {
  const combinedClassName = cx(hashtag({ theme, className }), "flex select-none justify-center items-center gap-1");

  return (
    <span {...props} className={combinedClassName}>
      #{text}
      {emoji && <Image alt={`${emoji} emoji`} src={`/emojis/${emoji}.svg`} height={16} width={16} />}
    </span>
  );
};

export default Hashtag;

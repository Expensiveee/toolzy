"use client";
import { cva, cx, type VariantProps } from "class-variance-authority";
import Image from "next/image";

const hashtag = cva(
  "rounded-full w-fit bg-dark-700 hover:bg-dark-700/70 border border-dark-400/40 text-white cursor-pointer px-4 py-2.5 text-sm transition-colors duration-300 ease-in-out font-normal"
);

export interface HashtagProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof hashtag> {
  emoji?: string;
  text: string;
}

const Hashtag: React.FC<HashtagProps> = ({ className, text, emoji, ...props }) => {
  const combinedClassName = cx(hashtag({ className }), "flex select-none justify-center items-center gap-1");

  return (
    <span {...props} className={combinedClassName}>
      #{text}
      {emoji && <Image alt={`${emoji} emoji`} src={`/emojis/${emoji}.svg`} height={16} width={16} />}
    </span>
  );
};

export default Hashtag;

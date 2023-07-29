"use client";
import JSConfetti from "js-confetti";
import Text from "@web/components/ui/Text";
import { cva, cx, type VariantProps } from "class-variance-authority";

const jsConfetti = new JSConfetti();

const hashtag = cva(
  "rounded-full w-fit cursor-pointer px-4 py-2.5 border text-sm transition-all duration-150 ease-in-out font-medium",
  {
    variants: {
      theme: {
        dark: ["bg-dark-500", "hover:bg-dark-600", "text-white", "border-dark-400/40"],
        light: ["bg-white", "hover:bg-gray-100", "text-zinc-800", "border-dark-400/40"],
      },
    },
  }
);

export interface HashtagProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof hashtag> {
  text: string;
  emoji?: string;
}

const Hashtag: React.FC<HashtagProps> = ({ className, text, theme, emoji = "🔧", ...props }) => {
  const combinedClassName = cx(hashtag({ theme, className }), "flex select-none gap-1 justify-center items-center");

  const handleClick = () => {
    jsConfetti.addConfetti({
      confettiNumber: 20,
      emojiSize: 38,
      emojis: [emoji],
    });
  };

  return (
    <Text
      className={combinedClassName}
      onClick={handleClick}
      tag={"span"}
      color={theme === "dark" ? "lightgray" : "darkgray"}
      size="caption"
    >
      #
      {text}
      <span className="text-base">{emoji}</span>
    </Text>
  );
};

export default Hashtag;

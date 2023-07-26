import { cva, cx, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { Star } from "react-feather";
import Text from "./Text";

const toolCard = cva(
  "w-full min-w-fit h-full flex-col border border-gray-400/20 items-center justify-center rounded-2xl shadow-lg p-6 hover:scale-95 transition-all duration-200 ease-in-out",
  {
    variants: {
      theme: {
        dark: ["bg-dark-500", "text-white"],
        primary: ["bg-primary-500", "text-white"],
      },
    },
  }
);

export interface ToolCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toolCard> {
  title: string;
  description: string;
  href: string;
  rating: number;
  tags?: string[];
}

const ToolCard: React.FC<ToolCardProps> = ({ className, title, description, href, rating, tags, theme, ...props }) => {
  const combinedClassNames = cx(toolCard({ theme }), className);

  return (
    <Link href={href} className={combinedClassNames}>
      <div className="flex justify-between">
        <Text tag="h4" size="h6" weight="extrabold">
          {title}
        </Text>
        <div
          className={`flex items-center justify-center gap-1 rounded-full px-3 py-1 ${
            theme == "dark" ? "bg-primary-500" : "bg-dark-500"
          }`}
        >
          <Text color="white" tag="p" size="caption" weight="medium">
            {rating}
          </Text>
          <Star className="text-yellow-500" size={16} />
        </div>
      </div>
      <Text className="mt-6" tag="p" size="body1" color="lightgray">
        {description}
      </Text>
    </Link>
  );
};

export default ToolCard;

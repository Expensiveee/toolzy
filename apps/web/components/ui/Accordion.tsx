"use client";

import { useState, useEffect, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronUp } from "react-feather";
import Text from "./Text";

const accordion = cva("w-full h-auto flex flex-col gap-4", {
  variants: {
    theme: {
      dark: ["bg-dark-500", "text-white"],
      primary: ["bg-primary-500", "text-white"],
    },
  },
});

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof accordion> {
  title: string;
  description: string;
}

const Accordion: React.FC<AccordionProps> = ({ className, title, description, theme, ...props }) => {
  const [active, setActive] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return setContentHeight(0);

    setContentHeight(accordionRef.current?.scrollHeight || 0);
  }, [active]);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-lg px-4 py-6 transition-all duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.1)]"
    >
      <div className="flex justify-between items-start items border-b-2 border-white pb-4">
        <Text tag="h6" size="h5" weight="extrabold">
          {title}
        </Text>

        <ChevronUp
          className={`text-white aspect-square shrink-0 rounded-full transition-transform duration-300 ease-out ${
            active && "-rotate-180"
          }`}
          size={20}
        />
      </div>
      <div
        ref={accordionRef}
        style={{ height: contentHeight }}
        className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
      >
        <Text className="mt-6" tag="p" size="body1">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default Accordion;

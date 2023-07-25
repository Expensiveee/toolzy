import React from "react";
import { cx } from "class-variance-authority";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section: React.FC<SectionProps> = ({ children, className }) => {
  const combinedClassName = cx("flex w-full h-auto px-6 lg:px-10 py-16 lg:py-20", className);

  return <section className={combinedClassName}>{children}</section>;
};

export default Section;

import React from "react";
import { cx } from "class-variance-authority";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  const combinedClassName = cx(
    "mx-auto w-full bg-[url('/assets/grid.svg')] bg-no-repeat bg-top bg-auto lg:bg-contain max-w-[1800px]",
    className
  );

  return <div className={combinedClassName}>{children}</div>;
};

export default Container;

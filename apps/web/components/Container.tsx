import React from "react";
import { cx } from "class-variance-authority";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  const combinedClassName = cx("mx-auto w-full max-w-[1800px] px-4 lg:px-8", className);

  return <div className={combinedClassName}>{children}</div>;
};

export default Container;

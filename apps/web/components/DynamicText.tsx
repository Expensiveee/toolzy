"use client";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

type DynamicTextProps = {
  words: string[];
  className?: string;
  interval?: number;
  inline?: boolean;
};

const DynamicText: React.FC<DynamicTextProps> = ({ words, className, inline = true, interval = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), interval);
    return () => clearTimeout(intervalId);
  }, []);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <span>You</span>;

  return (
    <TextTransition inline={inline} className={className} springConfig={presets.gentle}>
      {words[index % words.length]}
    </TextTransition>
  );
};

export default DynamicText;

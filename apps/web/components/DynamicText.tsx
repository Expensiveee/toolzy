"use client";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

type DynamicTextProps = {
  words: string[];
  className?: string;
};

const DynamicText: React.FC<DynamicTextProps> = ({ words, className }) => {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2500);
    return () => clearTimeout(intervalId);

  }, []);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <span>You</span>;

  return (
    <TextTransition inline={true} className={className} springConfig={presets.gentle}>
      {words[index % words.length]}
    </TextTransition>
  );
};

export default DynamicText;

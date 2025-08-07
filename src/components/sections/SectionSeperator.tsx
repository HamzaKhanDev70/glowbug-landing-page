import React from "react";
import clsx from "clsx";

type SectionDividerProps = {
  className?: string;
  margin?: string; // Tailwind margin like "my-12"
  height?: string; // Tailwind height like "h-px" or "h-0.5"
};

const SectionDivider: React.FC<SectionDividerProps> = ({
  className = "",
  margin = "my-12",
  height = "h-0.5",
}) => {
  return (
    <div className={clsx("relative w-full", margin, height, className)}>
      <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#FDE200] to-yellow-500" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-transparent via-[#FDE200] to-yellow-500" />
    </div>
  );
};

export default SectionDivider;

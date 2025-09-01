import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

type SectionDividerProps = {
  className?: string;
  margin?: string; // Tailwind margin like "my-12"
  height?: string; // Tailwind height like "h-px" or "h-0.5"
  keyword?: string; // The keyword to display in the center
};

const SectionDivider: React.FC<SectionDividerProps> = ({
  className = "",
  margin = "my-6",
  height = "h-0.5",
  keyword = "",
}) => {
  return (
    <div className={clsx("relative w-full flex items-center justify-center", margin, className)}>
      {/* Left line */}
      {/* <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#FDE200] to-yellow-500" /> */}

      {/* Keyword */}
      {keyword && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
          className="mx-4 text-xl font-bold text-[#FDE200] uppercase tracking-widest"
          style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}
        >
          {keyword}
        </motion.span>
      )}

      {/* Right line */}
      {/* <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-[#FDE200] to-yellow-500" /> */}
    </div>
  );
};

export default SectionDivider;

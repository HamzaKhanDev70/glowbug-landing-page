import React from "react";

interface SliderDotsProps {
  currentIndex: number;
  total: number;
  onSelect: (index: number) => void;
  className?: string; // optional for custom positioning
}

const SliderDots: React.FC<SliderDotsProps> = ({
  currentIndex,
  total,
  onSelect,
  className = "",
}) => {
  return (
    <div
      className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 z-20 ${className}`}
    >
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          onClick={() => onSelect(index)}
          className={`w-2.5 h-2.5 rounded-full inline-block mx-1 cursor-pointer transition-all duration-300 ${
            index === currentIndex
              ? "bg-yellow-400 opacity-100"
              : "bg-purple-500 opacity-50 hover:opacity-80"
          }`}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              onSelect(index);
            }
          }}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default SliderDots;

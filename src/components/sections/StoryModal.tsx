'use client'
import React, { useEffect, useRef } from "react";
interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose, content }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4"  onClick={onClose}>
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-full max-w-4xl h-[90%] 
          clip-polygon 
          overflow-hidden
        "
      >
        {/* Yellow angled border */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        >
          <polygon
            points="0,9 100,2 100,98 0,90"
             fill="#040404B2"
            stroke="#4B1D00"
            strokeWidth="1"
          />
        </svg>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-3 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white hover:text-gray-300 flex items-center justify-center"
        >
          ✕
        </button>

        {/* Content area */}
        <div
          className="
            relative z-10
            px-6 sm:px-10 py-18
            text-gray-300 text-base sm:text-lg leading-relaxed text-justify
            h-full
            overflow-y-auto
            thin-scrollbar
          "
        >
          <div className=" h-[100%] overflow-y-auto">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;

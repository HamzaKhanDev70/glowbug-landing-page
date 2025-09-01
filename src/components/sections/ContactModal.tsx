import React from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 overflow-auto p-2">
      <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl h-auto mx-auto">
        {/* SVG Background - same as InfoModal */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full z-0"
        >
          <polygon
            points="0,9 100,2 100,98 0,90"
            fill="#040404B2"
            stroke="#4B1D00"
            strokeWidth="0.8"
          />
        </svg>
  <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-2 py-4">
          <button
            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 z-20"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

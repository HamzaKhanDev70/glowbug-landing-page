import { useEffect } from "react";


interface VideoModalProps {
  onClose: () => void;
  isOpen: boolean;
  videoURL: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ onClose, isOpen, videoURL }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-0 flex items-center justify-center z-50 px-4">
      <div className="relative w-full max-w-[980px] aspect-video bg-black rounded-lg shadow-lg overflow-hidden">
        {/* Video iframe */}
        <iframe
          className="w-full h-full"
          src={videoURL}
          title="Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>

        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 px-3 py-1 rounded-full hover:bg-opacity-70 transition"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default VideoModal;

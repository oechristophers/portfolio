import { useEffect } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./ui/animated-modal";

export default function SimpleModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      // Disable scrolling on modal mount
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  // If not open, don't render anything
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-[9999] p-4"
      onClick={handleBackdropClick}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        className="bg-EveningBlack border-2 border-[#ffffff6b] rounded-xl p-8  w-full mx-4 text-center relative"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "400px",
          width: "90%",
          maxHeight: "80vh",
          overflow: "auto",
        }}
      >
        {/* Close button in top right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-green-400 font-bold text-2xl">Message Sent!</h1>
          <p className="text-Snow text-sm">
            Thank you for reaching out! I&apos;ll get back to you soon.
          </p>
          <button
            onClick={onClose}
            className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

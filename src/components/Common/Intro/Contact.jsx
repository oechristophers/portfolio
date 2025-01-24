import dynamic from 'next/dynamic';

const LottieNoSSR = dynamic(() => import('lottie-react'), { ssr: false });

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient";
import animationData from "@/data/confetti.json";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText("oecristophers2023@gmail.com")
      .then(() => {
        setCopied(true);
        // Reset `copied` to false after 5 seconds
        setTimeout(() => setCopied(false), 5000);
      })
      .catch(() => console.error("Failed to copy email."));
  };

  return (
    <div className="relative flex justify-center w-full items-center h-40">
      <BackgroundGradientAnimation />
      <div className="absolute top-5">
        <LottieNoSSR
          animationData={animationData}
          loop={copied} // Plays only if copied
          autoplay={copied} // Starts playing when copied
        />
      </div>

      <button
        className="px-3 rounded-full z-[100] flex text-white border justify-center items-center gap-1 bg-[#00000089] text-[.9rem] py-2"
        onClick={handleCopy}
      >
        <IoCopyOutline /> {copied ? "Email is Copied!" : "Copy my email "}
      </button>
    </div>
  );
};

export default Contact;

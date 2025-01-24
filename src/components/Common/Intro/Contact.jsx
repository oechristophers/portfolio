import React, { useState } from "react";
import { CONTACTS } from "@/constants/constants";
import animationData from "@/data/confetti.json";
import Lottie from "lottie-react";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "@/components/ui/MagicButton";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient";

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
    <div className="relative flex justify-center  w-full items-center h-40">
    <BackgroundGradientAnimation></BackgroundGradientAnimation>
          <div className="absolute top-5  ">
            <Lottie
              animationData={animationData}
              loop={copied} // Plays only if copied
              autoplay={copied} // Starts playing when copied
            />
          </div>
          {/* <MagicButton
            title={copied ? "Email is Copied!" : "Copy my email "}
            icon={<IoCopyOutline />}
            position="left"
            handleClick={handleCopy}
            otherClasses=""
          /> */}
          <button className="px-3 rounded-full z-[100] flex  text-white border justify-center items-center gap-1 bg-[#00000089] text-[.9rem] py-2" onClick={handleCopy}>
          <IoCopyOutline />  {copied ? "Email is Copied!" : "Copy my email "}
          </button>
    </div>
  );
};

export default Contact;

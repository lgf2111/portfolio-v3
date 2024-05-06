import React from "react";
import { TypeAnimation } from "react-type-animation";

import { WavyBackground } from "@/components/ui/wavy-background";

export default function Landing() {
  return (
    <WavyBackground className="max-w-4xl mx-auto">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hi, I&apos;m Jeff!
      </p>
      <div className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        <TypeAnimation
          sequence={[
            "I am a Software Engineer.",
            2000,
            "I am a Full Stack Developer.",
            2000,
            "I am a Web Developer.",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>
    </WavyBackground>
  );
}

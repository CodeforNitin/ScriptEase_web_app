"use client";

import acmeLogo from "../../public/assets/images/acme.png";
import quantumLogo from "../../public/assets/images/quantum.png";
import echoLogo from "../../public/assets/images/echo.png";
import celestialLogo from "../../public/assets/images/celestial.png";
import pulseLogo from "../../public/assets/images/pulse.png";
import apexLogo from "../../public/assets/images/apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: acmeLogo, alt: "acmeLogo" },
  { src: quantumLogo, alt: "quantumLogo" },
  { src: echoLogo, alt: "echoLogo" },
  { src: celestialLogo, alt: "celestialLogo" },
  { src: pulseLogo, alt: "pulseLogo" },
  { src: apexLogo, alt: "apexLogo" },
];

const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-white/70">
      <div className="container">
        <h1 className="text-xl text-center">
          Trusted By world's most innovative teams
        </h1>
        <div className=" flex overflow-hidden mt-9">
          <motion.div
            className="flex gap-16 flex-none pr-16"
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
          >
            {images.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                className="flex-none h-8 w-auto"
              />
            ))}
            {images.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                className="flex-none h-8 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;

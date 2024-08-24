import React from "react";

const Banner = () => {
  return (
    <div className="py-3 text-center bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)]">
      <div className="container">
        <p className="font-medium">
          <span className="hidden sm:inline">Introducing a completely redesigned Interface -{" "}</span>
          <a href="#" className="underline underline-offset-4 font-bold">
            This Site is My Project
          </a>
        </p>
      </div>
    </div>
  );
};

export default Banner;

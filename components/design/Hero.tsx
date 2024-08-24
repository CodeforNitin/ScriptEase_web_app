import Link from "next/link";
import ArrowIcon from "../../public/assets/icons/arrow-w.svg";
import CursorImage from "../../public/assets/images/cursor.png";
import MessageImage from "../../public/assets/images/message.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-[96px] relative overflow-clip">
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 1.0 is Here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowIcon />
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8">
        <div className="inline-flex relative">
          <h1 className="text-7xl font-bold tracking-tighter text-center inline-flex">
            Real Time 
            <br /> Collaborate
          </h1>
          <Image
            src={CursorImage}
            height="200"
            width="200"
            alt=""
            className="absolute right-[390px] top-[50px] hidden sm:inline"
          />
          <Image
            src={MessageImage}
            height="200"
            width="200"
            alt=""
            className="absolute top-[26px] left-[380px] hidden sm:inline    "
          />
        </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Experience the joy of accomplishment with an app designed to track
            the progress , motivate your efforts, and celebrate your Sucess
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/sign-in">
            <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
              Get for Free
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute h-[375px] w-[750px] lg:w-[2600px] sm:h-[756px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100-96px) sm:top-[calc(100-120px)]"></div>
    </div>
  );
};

export default Hero;

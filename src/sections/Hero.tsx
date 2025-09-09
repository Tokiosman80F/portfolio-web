import Image from "next/image";
import ArrowDown from "../assets/icons/arrow-down.svg";
import grainImage from "../assets/images/grain.jpg";
import memojiComputer from "../assets/images/memoji-computer.png";
export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0  ">
      <div
        className="absolute inset-0 -z-30 opacity-10  "
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="container">
        {/* Image */}
        <div className="flex flex-col items-center">
          <Image
            src={memojiComputer}
            className="size-[100px]"
            alt=" person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 rounded-lg inline-flex items-center gap-4">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div>Available for new project</div>
          </div>
          {/* All text */}
          <div className="max-w-lg">
            <h1 className="font-serif text-3xl md:text-5xl  text-center mt-8 tracking-wide">
              Build Exceptional User Experience
            </h1>
            <p className="text-white/60 mt-4 md:text-lg text-center">
              I am specilized in transforming design into functional,high
              performance web application.Lets discuss your new project
            </p>
          </div>

          {/* button */}
          <div className="flex flex-col md:flex-row  mt-8 gap-4">
            <button className="inline-flex items-center border border-white/60 px-6 py-1.5 gap-2 rounded-lg">
              <span className="font-semibold">Explore my work</span>
              <ArrowDown className="size-4" />
            </button>
            <button className="text-gray-900 inline-flex items-center border border-white px-6 py-1.5 gap-2 rounded-lg bg-white">
              <span>👋</span> <span className="font-semibold">Let Connect</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

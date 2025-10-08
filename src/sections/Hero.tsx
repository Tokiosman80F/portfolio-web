import Image from "next/image";
import ArrowDown from "../assets/icons/arrow-down.svg";
import grainImage from "../assets/images/grain.jpg";
import memojiComputer from "../assets/images/memoji-computer.png";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg"
import HeroOrbit from "@/components/HeroOrbit";
export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-10 overflow-x-clip  ">

      
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,transparent)]"> {/*This style make the heroOribit transparent at the bottom*/}
      
      {/* Grain Image */}
      <div
        className="absolute inset-0 -z-30 opacity-5  "
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      {/* Circle borders */}
      <div className="size-[620px] hero-ring "></div>
      <div className="size-[820px] hero-ring "></div>
      <div className="size-[1020px] hero-ring "></div>
      <div className="size-[1220px] hero-ring "></div>
      <div className="size-[1420px] hero-ring "></div>

      {/* star */}
      <HeroOrbit size={800} rotation={-70}>
        <StarIcon className="size-24 text-emerald-300 " />
      </HeroOrbit>
       <HeroOrbit size={550} rotation={20}>
        <StarIcon className="size-12 text-emerald-300 " />
      </HeroOrbit>
       <HeroOrbit size={590} rotation={95}>
        <StarIcon className="size-8 text-emerald-300 " />
      </HeroOrbit>
      {/* sparkle */}
       <HeroOrbit size={430} rotation={-14}>
        <SparkleIcon className="size-8 text-emerald-300/20 " />
      </HeroOrbit>
      <HeroOrbit size={430} rotation={79}>
        <SparkleIcon className="size-5 text-emerald-300/20 " />
      </HeroOrbit>
       <HeroOrbit size={630} rotation={17}>
        <SparkleIcon className="size-10 text-emerald-300/20 " />
      </HeroOrbit>
       <HeroOrbit size={710} rotation={144}>
        <SparkleIcon className="size-14 text-emerald-300/20 " />
      </HeroOrbit>
      {/* cicle */}
      <HeroOrbit size={710} rotation={85}>
        <div className="size-3 rounded-full bg-emerald-300/40 " />
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-44}>
        <div className="size-2 rounded-full bg-emerald-300/40 " />
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-5}>
        <div className="size-2 rounded-full bg-emerald-300/40 " />
      </HeroOrbit>
      </div>


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

import ChromeIcon from "@/assets/icons/chrome.svg";
import CssIcon from "@/assets/icons/css3.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";

import bookImage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map.png";
import mapBoyEmoji from "@/assets/images/memoji-smile.png";
import Card from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import SectionHeader from "@/components/SectionHeader";
import ToolboxItem from "@/components/ToolboxItem";
import Image from "next/image";

const toolboxItems = [
  { title: "Javascript", iconType: JavaScriptIcon },
  { title: "Html", iconType: HtmlIcon },
  { title: "GitHub", iconType: GitHubIcon },
  { title: "Css", iconType: CssIcon },
  { title: "Chrome", iconType: ChromeIcon },
  { title: "React", iconType: ReactIcon },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🧸",
    left:"50%",
    top:"5%"
  },
  {
    title: "Photography",
    emoji: "🧸",
    left:"15%",
    top:"50%"
  },
  {
    title: "Gaming",
    emoji: "🧸",
    left:"0%",
    top:"25%"
  },
  {
    title: "Hking",
    emoji: "🧸",
    left:"10%",
    top:"0%"
  },
  {
    title: "Music",
    emoji: "🧸",
    left:"55%",
    top:"30%"
  },
  {
    title: "Reading",
    emoji: "🧸",
    left:"5%",
    top:"75%"
  },
  {
    title: "Fitness",
    emoji: "🧸",
    left:"50%",
    top:"70%"
  },
];

export const AboutSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <SectionHeader
          title="About Me"
          heading="A Glimpse Into My World"
          desc="Learn more about who I am ,what i do and what inspire me "
        />

        <div className="mt-20 grid gap-8 ">
          <div className="grid gap-8 | md:grid-cols-5  | lg:grid-cols-3 ">
            {/* Books */}
          <Card className="h-[320px] | md:col-span-2 | lg:col-span-1 ">
            <CardHeader
              title="My Reads"
              desc="Explore the book shaping my perspectives"
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Atomic habit book" />
            </div>
          </Card>
          {/* Coding Tools */}
          <Card className="h-[320px] p-0 | md:col-span-3 | lg:col-span-2 ">
            <CardHeader
              title="My Toolbox"
              desc="Explore the technologies and tool I use to craf expectional expericence"
              className="px-6 pt-6"
            />

            <ToolboxItem items={toolboxItems} className="mt-6" />
            <ToolboxItem items={toolboxItems} className="mt-6" itemWrapperClassName="-translate-x-1/2" />
          </Card>
          </div>
          
          <div className="grid gap-8 | md:grid-cols-5 | lg:grid-cols-3 ">
            {/* Hobby */}
          <Card className="h-[320px] flex flex-col p-0 | md:col-span-3 | lg:col-span-2">
            <CardHeader
              title="Beyond the Code"
              desc="Explore My interest and hobbies beyond the digital realms"
              className="p-6"
            />

            <div className="relative flex-1  " >
              {hobbies.map((hobby) => (
                <div key={hobby.title}  style={{left:hobby.left,top:hobby.top}}  className=" absolute inline-flex  rounded-full gap-2 px-6 py-2 bg-gradient-to-r from-emerald-300 to-sky-400    ">
                  <span className="font-medium text-gray-900">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="h-[320px] p-0 | md:col-span-2 | lg:col-span-1">
          <Image src={mapImage} alt="map image"  className=" relative w-full h-full  object-cover overflow-hidden"  />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  outline outline-2 outline-white/60 bg-gradient-to-r to-emerald-300 from-sky-400 rounded-full"><Image src={mapBoyEmoji} alt="smile face boy emoji" className="size-20 "  /></div>
            
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

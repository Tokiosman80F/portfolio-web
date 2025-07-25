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
import TechIcon from "@/components/TechIcon";
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
  },
  {
    title: "Photography",
    emoji: "🧸",
  },
  {
    title: "Gaming",
    emoji: "🧸",
  },
  {
    title: "Hking",
    emoji: "🧸",
  },
  {
    title: "Music",
    emoji: "🧸",
  },
  {
    title: "Reading",
    emoji: "🧸",
  },
  {
    title: "Fitness",
    emoji: "🧸",
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

        <div className="mt-20">
          {/* Books */}
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              desc="Explore the book shaping my perspectives"
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Atomic habit book" />
            </div>
          </Card>
          {/* Coding Tools */}
          <Card>
            <CardHeader
              title="My Toolbox"
              desc="Explore the technologies and tool I use to craf expectional expericence"
            />

            <div>
              {toolboxItems.map((item) => (
                <div
                  key={item.title}
                  className="inline-flex items-center gap-3 border-white/40 border  rounded-xl px-4 py-1 "
                >
                  <TechIcon component={item.iconType} className="bg-blue" />
                  <div>{item.title}</div>
                </div>
              ))}
            </div>
          </Card>
          {/* Hobby */}
          <Card>
            <CardHeader
              title="Beyond the Code"
              desc="Explore My interest and hobbies beyond the digital realms"
            />

            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <Image src={mapImage} alt="map image" />
            <Image src={mapBoyEmoji} alt="smile face boy emoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};

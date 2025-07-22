import ChromeIcon from "@/assets/icons/chrome.svg";
import CssIcon from "@/assets/icons/css3.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";

import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map.png";
import mapBoyEmoji from "@/assets/images/memoji-smile.png";
import Card from "@/components/Card";
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

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        title="About Me"
        heading="A Glimpse Into My World"
        desc="Learn more about who I am ,what i do and what inspire me "
      />

      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the book shaping my perspectives</p>
          </div>
          <Image src={bookImage} alt="Atomic habit book" />
        </Card>

        <Card>
          <h3>My Reads</h3>
          <p>Explore the book shaping my perspectives</p>

          <div>
            {toolboxItems.map((item) => (
              <div key={item.title}>
                <TechIcon component={item.iconType} />
                <div>{item.title}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the book shaping my perspectives</p>
          </div>
        </Card>

        <Card>
          <Image src={mapImage} alt="map image" />
          <Image src={mapBoyEmoji} alt="smile face boy emoji" />
        </Card>
      </div>
    </div>
  );
};

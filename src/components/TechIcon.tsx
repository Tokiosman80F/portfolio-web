import React, { ElementType } from "react";

type TechIconProps = {
  component: ElementType;
  className?: string;
};

const TechIcon = ({ component: component, className }: TechIconProps) => {
  const Component = component;

  return <>
  <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
  <svg className="size-0 absolute">
    <linearGradient id="tech-icon-gradient">
      <stop offset="0%" stopColor="rgb(110 231 183)"/>
      <stop offset="100%" stopColor="rgb(96 165 250 )"/>
    </linearGradient>
  </svg>
  </>;
};

export default TechIcon;

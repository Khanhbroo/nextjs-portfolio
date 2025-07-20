"use client";

import { useRef } from "react";
import Image from "next/image";

import { SectionHeader } from "@/components/SectionHeader";
import { CardHeader } from "@/components/CardHeader";
import { Card } from "@/components/Card";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";

import bookImage from "@/assets/images/book-cover.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactJSIcon from "@/assets/icons/react.svg";
import NextJSIcon from "@/assets/icons/nextjs.svg";
import TailwindCSSIcon from "@/assets/icons/tailwindcss.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import smileEmoji from "@/assets/images/memoji-smile.png";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },

  {
    title: "Typescript",
    iconType: TypescriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "ReactJS",
    iconType: ReactJSIcon,
  },
  {
    title: "NextJS",
    iconType: NextJSIcon,
  },
  {
    title: "TailwindCSS",
    iconType: TailwindCSSIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: "45%",
    top: "7%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "35%",
    top: "42%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "8%",
    top: "32%",
  },
  {
    title: "Movies",
    emoji: "🍿",
    left: "5%",
    top: "61%",
  },
  {
    title: "Coding",
    emoji: "👨‍💻",
    left: "55%",
    top: "68%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "5%",
    top: "5%",
  },
  {
    title: "Fishing",
    emoji: "🎣",
    left: "65%",
    top: "35%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                  digital experiences."
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies in the digital realm. You can drag these items 😁"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20px] size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileEmoji}
                  alt="smiling memoji"
                  className="size-20 object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

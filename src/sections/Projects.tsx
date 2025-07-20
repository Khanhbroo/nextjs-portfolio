import foodieApp from "@/assets/images/nextjs-foodie-app.png";
import elegantShop from "@/assets/images/reactjs-elegant-shop.png";
import web3Campaign from "@/assets/images/web3-campaign.png";
import web3Funding from "@/assets/images/web3-funding.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

import Image from "next/image";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Self-initiated Project",
    year: "2025",
    title: "Next.js Foodie App",
    results: [
      { title: "Built a full-stack foodie app with dynamic meals listing" },
      { title: "Implemented server actions and SQLite backend integration" },
      { title: "Deployed to Vercel with secure image upload handling" },
    ],
    link: "https://nextjs-foodie-app.vercel.app/",
    image: foodieApp,
  },
  {
    company: "Self-initiated Project",
    year: "2025",
    title: "React.js Elegant Shop",
    results: [
      { title: "Developed responsive e-commerce UI with React.js" },
      {
        title:
          "Built product catalog, cart functionality, and state management",
      },
      {
        title: "Optimized component structure for scalability and readability",
      },
    ],
    link: "https://reactjs-elegant-shop.vercel.app/",
    image: elegantShop,
  },
  {
    company: "VBI Academy Internship",
    year: "2025",
    title: "Web3 Funding DApp",
    results: [
      {
        title:
          "Developed smart contract funding logic with Solidity and Foundry",
      },
      { title: "Integrated wallet connection via Reown AppKit in React" },
      { title: "Deployed to Ethereum Sepolia for testing and demonstration" },
    ],
    link: "https://web3-interface-azure.vercel.app/",
    image: web3Funding,
  },
  {
    company: "VBI Academy Internship",
    year: "2025",
    title: "Web3 Campaign Crowdfunding",
    results: [
      { title: "Built decentralized campaign creation and funding features" },
      { title: "Designed enhanced UI/UX for blockchain interactions" },
      {
        title: "Implemented real-time event history display from contract logs",
      },
    ],
    link: "https://web3-campaign.vercel.app/",
    image: web3Campaign,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 text-transparent bg-clip-text to-sky-400 text-center">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5 " />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 items-center text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

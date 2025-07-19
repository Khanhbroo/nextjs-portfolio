import foodieApp from "@/assets/images/nextjs-foodie-app.png";
import elegantShop from "@/assets/images/reactjs-elegant-shop.png";
import web3Campaign from "@/assets/images/web3-campaign.png";
import web3Funding from "@/assets/images/web3-funding.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

import Link from "next/link";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "Self-initiated Project",
    year: "2025",
    title: "Next.js Foodie Recipes App",
    results: [
      { title: "Built a full-stack foodie app with dynamic meals listing" },
      { title: "Implemented server actions and SQLite backend integration" },
      { title: "Deployed to Vercel with secure image upload handling" },
    ],
    link: "https://youtu.be/your-foodie-app-demo-link",
    image: foodieApp,
  },
  {
    company: "Self-initiated Project",
    year: "2025",
    title: "React.js Elegant E-commerce Shop",
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
    link: "https://youtu.be/your-elegant-shop-demo-link",
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
    link: "https://youtu.be/your-web3-funding-demo-link",
    image: web3Funding,
  },
  {
    company: "VBI Academy Internship",
    year: "2025",
    title: "Web3 Campaign Crowdfunding Platform",
    results: [
      { title: "Built decentralized campaign creation and funding features" },
      { title: "Designed enhanced UI/UX for blockchain interactions" },
      {
        title: "Implemented real-time event history display from contract logs",
      },
    ],
    link: "https://youtu.be/your-web3-campaign-demo-link",
    image: web3Campaign,
  },
];

export const ProjectsSection = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 text-transparent bg-clip-text to-sky-400 text-center">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0  after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8"
            >
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-serif text-2xl mt-2">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 " />
              <ul className="flex flex-col gap-4 mt-4">
                {project.results.map((result) => (
                  <li
                    key={result.title}
                    className="flex gap-2 items-center text-sm text-white/50"
                  >
                    <CheckCircleIcon className="size-5" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <Link href={project.link} target="_blank">
                <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                  <span>View Live Site</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </Link>
              <Image
                src={project.image}
                alt={project.title}
                className="mt-8 -mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

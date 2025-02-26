import React from "react";
import {
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MapPinIcon,
  CalendarIcon,
} from "lucide-react";
import { Header } from "./Header";
import MDEditor from "@uiw/react-md-editor";
// import Marquee from "@/components/ui/marquee";
import { HorizontalMarqueeDemo } from "./Skills";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

const code = `\`\`\`js
const rupinderKaurDetails = [
  {
    name: "Rupinder Kaur",
    profession: "Developer",
    interests: ["Innovative software solutions", "Efficient coding"],
    skills: ["HTML", "CSS", "JavaScript", "React", "GitHub , Tailwind css"]
  }
];
\`\`\`
`;

export default function PortfolioSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 sm:px-12 lg:px-24">
      <Header />
      <div className="max-w-7xl mt-7 mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[500px] rounded-lg w-full bg-background overflow-hidden border">
          <FlickeringGrid
            className="z-0 absolute inset-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
            height={800}
            width={800}
          />
        </div>
        {/* Text Section */}
        <div>
          <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl mb-4 leading-tight">
            Hey there! 👋 I am{" "}
            <span className="text-cyan-600">Rupinder Kaur</span>
          </h1>
          <h2 className="text-lg text-gray-600 sm:text-xl mb-6">
            Full-Stack Developer with a passion for crafting engaging, scalable
            web experiences.
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            I am a dedicated developer specializing in creating functional and
            visually appealing software solutions. My expertise spans HTML, CSS,
            JavaScript, React, GitHub, and Tailwind CSS, ensuring a perfect
            blend of functionality and design in every project.
          </p>

          {/* Location & Availability */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center space-x-2">
              <MapPinIcon className="w-5 h-5 text-cyan-500" />
              <span>Batala, Punjab</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="w-5 h-5 text-cyan-500" />
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 hover:bg-cyan-100 text-gray-600 hover:text-cyan-600 transition"
            >
              <GithubIcon className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 hover:bg-cyan-100 text-gray-600 hover:text-cyan-600 transition"
            >
              <LinkedinIcon className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 hover:bg-cyan-100 text-gray-600 hover:text-cyan-600 transition"
            >
              <TwitterIcon className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>

          {/* Download CV Button */}
          <a
            href="/path-to-your-cv.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg shadow-lg hover:bg-cyan-700 transition-colors"
          >
            <DownloadIcon className="w-5 h-5 mr-2" />
            Download CV
          </a>
        </div>

        {/* Code Preview Section */}
        <div className="relative w-full h-auto bg-white border border-gray-200 rounded-lg shadow-lg p-6">
          <MDEditor.Markdown source={code} style={{ whiteSpace: "pre-wrap" }} />
        </div>
      </div>

      {/* Skills Marquee Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          My Skills
        </h2>
        <div className="relative bg-gradient-to-r from-cyan-50 via-white to-cyan-50 py-6">
          <HorizontalMarqueeDemo />
        </div>
      </div>
    </section>
  );
}

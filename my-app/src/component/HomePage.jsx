// import React from "react";
import {
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MapPinIcon,
  CalendarIcon,
} from "lucide-react";
import MDEditor from "@uiw/react-md-editor";
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
\`\`\``;

export default function PortfolioSection() {
  return (
    <section
      className="relative bg-gray-50 dark:bg-gray-900 pb-12 pt-7"
      id="home"
    >
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          className="size-full"
          squareSize={6}
          gridGap={6}
          color="#4B5563" // Adjusted for dark mode visibility
          maxOpacity={0.1} // More subtle
          flickerChance={0.05}
          height={580} // Ensure it covers the section
          width={1700}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center z-10">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white sm:text-5xl mb-4 leading-tight">
            Hey there! 👋 I am{" "}
            <span className="text-cyan-600 dark:text-cyan-400">
              Rupinder Kaur
            </span>
          </h1>
          <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 sm:text-3xl mb-6">
            Full-Stack Developer with a passion for crafting engaging, scalable
            web experiences.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-pretty text-xl mb-9 leading-relaxed">
            I am a dedicated developer specializing in creating functional and
            visually appealing software solutions. My expertise spans HTML, CSS,
            JavaScript, React, GitHub, and Tailwind CSS, ensuring a perfect
            blend of functionality and design in every project.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center space-x-2">
              <MapPinIcon className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
              <span>Batala, Punjab</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
              <span>Available for new projects</span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start gap-4 mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-cyan-100 dark:hover:bg-cyan-600 text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-white transition-colors duration-300"
            >
              <GithubIcon className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-cyan-100 dark:hover:bg-cyan-600 text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-white transition-colors duration-300"
            >
              <LinkedinIcon className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-cyan-100 dark:hover:bg-cyan-600 text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-white transition-colors duration-300"
            >
              <TwitterIcon className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>

          <a
            href="/path-to-your-cv.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-cyan-600 dark:bg-cyan-500 text-white font-medium rounded-lg shadow-lg hover:bg-cyan-700 dark:hover:bg-cyan-600 transition-colors duration-300 transform hover:scale-105"
          >
            <DownloadIcon className="w-5 h-5 mr-2" />
            Download CV
          </a>
        </div>

        <div className="relative w-full h-auto  dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6">
          <MDEditor.Markdown
            source={code}
            // style={{  whiteSpace: "pre-wrap", background: "transparent" }}
            className="text-gray-800 dark:text-gray-800 bg-white dark:bg-black"
          />
        </div>
      </div>
    </section>
  );
}

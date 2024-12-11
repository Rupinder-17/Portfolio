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
// import {  MarqueeVertical } from "./Skills";
import Marquee from "@/components/ui/marquee";
import { HorizontalMarqueeDemo } from "./Skills";


// const skills = [
//   "React",
//   "Next.js",
//   "Tailwind",
//   "Laravel",
//   "TypeScript",
//   "Node.js",
// ];
const code = `\`\`\`js
const rupinderKaurDetails = [
  {
    name: "Rupinder Kaur",
    profession: "Developer",
    interests: ["Innovative software solutions", "Efficient coding"],
    skills: ["HTML", "CSS", "JavaScript", "React", "GitHub"]
  }
];
\`\`\`
`;

export default function PortfolioSection() {
  return (
    <section className="bg-white py-20 px-6 sm:px-12 lg:px-24">
      <Header />
      <div className="max-w-7xl mt-7 mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl mb-4">
            Hey there! 👋 I am{" "}
            <span className="text-cyan-600">Rupinder Kaur</span>
          </h1>
          <h2 className="text-lg text-gray-500 sm:text-xl mb-6">
            Full-Stack Developer with a passion for crafting engaging, scalable
            web experiences.
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Hello! I am Rupinder Kaur, a dedicated developer with expertise in
            creating functional, visually appealing, and user-friendly software
            solutions. I specialize in HTML, CSS, JavaScript, React, GitHub, and
            more, delivering applications that blend functionality and elegance.
          </p>

          {/* Skills Section */}
          <div className="mb-8">
            {/* <h3 className="text-lg font-semibold text-gray-800 mb-4">Skills</h3> */}
            <div className="flex flex-wrap gap-3">
              {/* {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-cyan-100 text-cyan-800 text-sm font-medium px-3 py-1.5 rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))} */}
            </div>
          </div>

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
              className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 transition"
            >
              <GithubIcon className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 transition"
            >
              <LinkedinIcon className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 transition"
            >
              <TwitterIcon className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>

          {/* Download CV Button */}
          <a
            href="/path-to-your-cv.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg shadow-lg hover:bg-purple-700 transition-colors"
          >
            <DownloadIcon className="w-5 h-5 mr-2" />
            Download CV
          </a>
        </div>

        {/* Image Section */}
        <div className="relative">
          <h1 className="text-center mb-5">SKILLS</h1>
          <HorizontalMarqueeDemo />
        </div>
      </div>
      {/* <div className="w-full h-80 lg:h-[24rem] bg-gradient-to-br from-purple-300 via-indigo-300 to-blue-300 rounded-lg shadow-lg overflow-hidden flex items-center justify-center"> */}
        {/* <MDEditor.Markdown source={code} style={{ whiteSpace: "pre-wrap" }} /> */}
      {/* </div> */}
    </section>
  );
}

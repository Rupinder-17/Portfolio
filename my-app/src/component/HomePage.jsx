import React from "react";
import {
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MapPinIcon,
  CalendarIcon,
} from "lucide-react";

const skills = [
  "React",
  "Next.js",
  "Tailwind",
  "Laravel",
  "TypeScript",
  "Node.js",
];

export default function PortfolioSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Hey there! 👋 I am
              <span className="text-purple-600">Rupinder kaur</span>
            </h1>
            <h2 className="text-2xl text-gray-600 mb-4">
              Full-Stack Developer
            </h2>
            <p className="text-gray-700 mb-6">
              Hello! I am Rupinder Kaur, a passionate and innovative developer
              with a knack for crafting efficient and user-friendly software
              solutions. I thrive on turning ideas into functional, beautiful
              digital experiences. My expertise spans across HTML, CSS,
              JavaScript, React, and GitHub, allowing me to build robust and
              scalable applications.
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2" />
                <span>Batala Punjab</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2" />
                <span>Available for new projects</span>
              </div>
            </div>
            <div className="flex gap-4 mb-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600"
              >
                <GithubIcon className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600"
              >
                <LinkedinIcon className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600"
              >
                <TwitterIcon className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            <a
              href="/path-to-your-cv.pdf"
              download
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
            >
              <DownloadIcon className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-purple-200 to-indigo-300 rounded-lg shadow-lg overflow-hidden">

              {/* <img
                src="/placeholder.svg?height=320&width=480"
                alt="John Doe"
                className="w-full h-full object-cover mix-blend-overlay"
              /> */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

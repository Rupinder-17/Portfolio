import { link } from "@uiw/react-md-editor";
import React from "react";

export const Project = () => {
  const projects = [
    {
      title: "Food Ordering Application with Toastify",
      description:
        "A food ordering application where promises are used to display messages using Toastify for a seamless user experience.",
        link:"https://quizz-app-rosy.vercel.app/",
      technologies: ["React", "Toastify", "Promises"],
    },
    {
      title: "Rider Application",
      description:
        "An app where users can purchase food and drinks. The purchased items are displayed in a list along with their count.",
        link: "https://rider-app-ten.vercel.app//",
      technologies: ["React", "State Management", "UI Design"],
    },
    {
      title: "Weather app Website",
      description:
        "A website dedicated to showcasing services and projects for a construction company, built with a responsive design.",
        link: "https://weather-app-js-psi.vercel.app/",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Image Slider",
      description:
        "A dynamic image slider application with smooth transitions, allowing users to navigate through various images.",
      link: "https://image-slider-two-liart.vercel.app/",
      image: "/path-to-screenshot.png", // Replace with the actual path to the image
      technologies: ["React", "CSS Transitions"],
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-gray-400 text-lg">
          Some of the noteworthy projects I have built!
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Technologies */}
              {project.technologies && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* View Project Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-cyan-400 hover:underline"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

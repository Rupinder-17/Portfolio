import React from "react";

export const Project = () => {
  const projects = [
    {
      title: "Food Ordering Application with Toastify",
      description:
        "A food ordering application where promises are used to display messages using Toastify for a seamless user experience.",
    },
    {
      title: "Rider Application",
      description:
        "An app where users can purchase food and drinks. The purchased items are displayed in a list along with their count.",
    },
    {
      title: "Construction Site Website",
      description:
        "A website dedicated to showcasing services and projects for a construction company, built with a responsive design.",
    },
    {
      title: "Image Slider",
      description:
        "A dynamic image slider application with smooth transitions, allowing users to navigate through various images.",
      link: "https://image-slider-two-liart.vercel.app/",
      image: "/path-to-screenshot.png", // Replace this with the actual path to the image
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-gray-600">A showcase of my recent work</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-xl transition-shadow duration-200"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="rounded mb-4"
              />
            )}
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

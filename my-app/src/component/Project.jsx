import React from "react";
import riderApp from "../image/riderApp.png";
import weatherApp from "../image/weather-App.png";
import QuizApp from "../image/QuizApp.png"
import { image, title } from "@uiw/react-md-editor";
// import { image } from "@uiw/react-md-editor";

export const Project = () => {
  const projects = [
    {
      title: "Quiz App",
      description:
        "A quiz application that provides an engaging and interactive user experience.",
      link: "https://quizz-app-rosy.vercel.app/",
      technologies: ["React", "Interactive UI", "Quiz Features"],
      image: QuizApp,
    },
    {
      title: "Rider App",
      description:
        "An app where users can purchase food and drinks. The purchased items are displayed in a list along with their count.",
      link: "https://rider-app-ten.vercel.app/",
      technologies: ["React", "State Management", "UI Design"],
      image: riderApp,
    },
    {
      title: "Weather App",
      description:
        "A website that provides real-time weather updates with a responsive and clean design.",
      link: "https://weather-app-js-psi.vercel.app/",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: weatherApp,
    },
    {
      title: "Image Slider",
      description:
        "A dynamic image slider application with smooth transitions, allowing users to navigate through various images.",
      link: "https://image-slider-two-liart.vercel.app/",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
      technologies: ["React", "CSS Transitions"],
    },
    {
      title: "chatApp",
      description:
        "A real-time chat application that allows users to communicate with each other in real-time.",
      link: "https://free-api-chat.vercel.app/register",
      image: "",
      technologies: ["React", "tailwind css", "UI Design"],
    },
    {
      title: "Social Media App",
      description:
        "A social media platform where users can connect, share posts, and interact with others.",
      link: "https://social-media-app-ruddy-chi.vercel.app/",
      image: "",
      technologies: ["React", "tailwind css", "UI Design"],
    },
    {
      title: "Pomodoro App",
      description:
        "A productivity app that helps users manage their time with the Pomodoro technique.",
      link: "", 
      image: "",
      technologies: ["React", "tailwind css", "UI Design"],    
    }
  ];

  return (
    <div className="bg-gray-100 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-500">Projects</h1>
        <p className="text-gray-400 text-lg">
          Some of the noteworthy projects I have built!
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-500  border-gray-700 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>

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

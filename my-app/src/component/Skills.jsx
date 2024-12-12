import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    skill: "HTML",
    description: "Expert in creating structured and semantic web page layouts.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    skill: "CSS",
    description:
      "Skilled in designing responsive and visually appealing user interfaces.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    skill: "JavaScript",
    description:
      "Proficient in adding interactivity and functionality to web applications.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    skill: "React js",
    description:
      "Experienced in building dynamic and reusable components for efficient front-end development.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    skill: "GitHub",
    description:
      "Adept at version control and collaborative coding using Git and GitHub.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
];

const ReviewCard = ({ skill, description, logo }) => {
  return (
    <figure
      className={cn(
        "relative w-64 h-40 p-3 overflow-hidden rounded-xl shadow-xl border",
        "bg-gradient-to-b from-indigo-100 to-white dark:from-gray-800 dark:to-gray-900",
        "hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
      )}
    >
      <div className="flex flex-col items-center text-center">
        <img
          className="w-10 h-10 mb-2 rounded-full border-4 border-indigo-300"
          alt={skill}
          src={logo}
        />
        <figcaption className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {skill}
        </figcaption>
        <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </div>
    </figure>
  );
};

export function HorizontalMarqueeDemo() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-gray-50 dark:bg-gray-900 shadow-xl p-6">
      {/* First Horizontal Marquee */}
      <Marquee
        pauseOnHover
        className="[--duration:40s] flex flex-row gap-4 mb-6"
      >
        {reviews.map((review) => (
          <ReviewCard key={review.skill} {...review} />
        ))}
      </Marquee>

      {/* Second Horizontal Marquee (Reverse Direction) */}
      <Marquee
        reverse
        pauseOnHover
        className="[--duration:20s] flex flex-row gap-4"
      >
        {reviews.map((review) => (
          <ReviewCard key={review.skill} {...review} />
        ))}
      </Marquee>

      {/* Horizontal Gradient Effects */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-50 via-transparent to-transparent dark:from-gray-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-50 via-transparent to-transparent dark:from-gray-900"></div>
    </div>
  );
}

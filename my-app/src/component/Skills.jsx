// import React from "react";
// import { cn } from "@/lib/utils";
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
    skill: "Laravel",
    description:
      "Proficient in building robust and scalable back-end systems using Laravel framework.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  },
  {
    skill: "TypeScript",
    description:
      "Experienced in enhancing JavaScript with strong typing and improved tooling for scalable applications.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
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
  {
    skill: "Tailwind CSS",
    description:
      "Experienced in using utility-first CSS framework for rapidly building custom designs.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
];

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ReviewCard = ({ skill, description, logo }) => {
  return (
    <Card className="w-64 overflow-hidden bg-card">
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20">
          <img className="h-full w-full object-cover" alt={skill} src={logo} />
        </div>
        <CardTitle className="text-xl">{skill}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export function HorizontalMarqueeDemo() {
  return (
    <div
      className="relative w-[100%] flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-gray-50 dark:bg-gray-900 shadow-xl p-6"
      id="skills"
    >
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

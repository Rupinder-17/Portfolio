import React from "react";
import MDEditor from "@uiw/react-md-editor";

const code = `\`\`\`js
const rupinderKaurDetails = [
  {
    name: "Rupinder Kaur",
    profession: "Developer",
    interests: ["Innovative software solutions", "Efficient coding"],
    skills: ["HTML", "CSS", "JavaScript", "React js", "GitHub, Tailwind css"]
  }
];
\`\`\`
`;

export const About = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8" id="about">
      <div className="bg-gray-200 rounded-2xl w-36 px-4 py-2 mx-auto mb-10">
        <h3 className="text-2xl font-semibold text-center text-gray-800">
          About
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-8 mt-6">
        <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            I'm Rupinder Kaur, a dedicated full-stack developer with expertise
            in React.js and Laravel. My passion lies in transforming ideas into
            seamless digital experiences that balance functionality with
            aesthetic appeal. I prioritize user satisfaction, clean design, and
            writing efficient, maintainable code.
          </p>
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200 mt-6">
            My journey into web development began in 2022, and since then, I've
            embraced every opportunity to expand my skill set and tackle
            innovative challenges. With experience in modern frameworks and
            tools like Next.js, TypeScript, Laravel, TailwindCSS, and Supabase,
            I specialize in building sophisticated web applications that are
            both scalable and user-friendly.
          </p>

          <ul className="mt-8 space-y-3 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <span className="mr-2 text-xl">🎓</span> Bachelor's Degree in
              Computer Applications
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <span className="mr-2 text-xl">🎓</span> Master's Degree in
              Information Technology
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <span className="mr-2 text-xl">💻</span> Full-time Developer
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <span className="mr-2 text-xl">🧠</span> Lifelong learner with a
              knack for solving complex problems
            </li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200 mt-6 font-medium">
            Oh, and I'm open to freelance opportunities! If you have a project
            in mind, feel free to reach out—I'd love to collaborate.
          </p>
        </div>
      </div>
    </div>
  );
};

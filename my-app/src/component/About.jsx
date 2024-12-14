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
    <div className="max-w-7xl mx-auto  h-96 py-12">
      {/* Title Section */}
      <div className="bg-gray-200 rounded-2xl w-36 px-4 py-2 mx-auto">
        <h3 className="text-2xl font-semibold text-center text-gray-800">
          About
        </h3>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-start gap-8 mt-10">
        {/* Code Block */}
        {/* <div className="bg-gradient-to-br from-purple-200 to-cyan-100 rounded-lg shadow-lg p-6 flex-1">
          <MDEditor.Markdown
            source={code}
            className="whitespace-pre-wrap text-sm text-gray-700"
          />
        </div> */}

        {/* Description Block */}
        <div className="flex-1  bg-gray-50 rounded-lg shadow p-6">
          <p className="text-lg  leading-relaxed text-gray-800 space-y-4">
            I’m Rupinder Kaur, a dedicated full-stack developer with expertise in
            React.js and Laravel. My passion lies in transforming ideas into
            seamless digital experiences that balance functionality with
            aesthetic appeal. I prioritize user satisfaction, clean design, and
            writing efficient, maintainable code.
          </p>
          <p className="text-lg leading-relaxed text-gray-800 space-y-4 mt-4">
            My journey into web development began in 2022, and since then, I’ve
            embraced every opportunity to expand my skill set and tackle
            innovative challenges. With experience in modern frameworks and
            tools like Next.js, TypeScript, Laravel, TailwindCSS, and Supabase,
            I specialize in building sophisticated web applications that are
            both scalable and user-friendly.
          </p>
          {/* <p className="text-lg leading-relaxed text-gray-800 space-y-4 mt-4">
            As a forward-thinker, I thrive in managing projects from concept to
            completion, focusing on delivering exceptional results that align
            with client goals. Whether it’s brainstorming creative solutions or
            implementing cutting-edge technologies, I’m committed to excellence
            at every stage of development.
          </p> */}
          <ul className="mt-6 space-y-2 text-center text-gray-700">
            <li>🎓 Bachelor’s Degree in Computer Applications</li>
            <li>🎓 Master{"'"}s Degree in Information tecknology</li>
            <li>💻 Full-time Developer</li>
            <li>
              🧠 Lifelong learner with a knack for solving complex problems
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-gray-800 space-y-4 mt-4">
            Oh, and I’m open to freelance opportunities! If you have a project
            in mind, feel free to reach out—I’d love to collaborate.
          </p>
        </div>
      </div>
    </div>
  );
};

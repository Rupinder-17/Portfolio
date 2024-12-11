import React from 'react';
import MDEditor from "@uiw/react-md-editor";

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

export const About = () => {
  return (
    <div>
      <h3 className='text-4xl text-center'>About</h3>
      <div className="flex w-full p-5">
        <div className="bg-gradient-to-br w-[50%]  from-purple-400 to-blue-400 rounded-lg shadow-md p-6">
          <MDEditor.Markdown source={code} className="whitespace-pre-wrap" />
        </div>
        <div className="w-[50%]">
          <p className="text-lg  text-gray-800 leading-relaxed px-6">
            Hi, I{"'"}m **Rupinder Kaur**, a passionate developer dedicated to
            creating efficient and user-friendly software solutions. I
            specialize in front-end development with expertise in HTML, CSS,
            JavaScript, React, and GitHub. I thrive on solving challenges
            creatively and delivering impactful user experiences. Constant
            learning and staying updated with emerging technologies drive my
            growth. Let’s collaborate to bring innovative ideas to life!
          </p>
        </div>
      </div>
    </div>
  );
}

import { Usetheme } from "@/Hooks/usetheme";
import React from "react";
import { FiMoon } from "react-icons/fi";

export const Header = () => {
  const { theme, handleTheme, color } = Usetheme();
  return (
    <div>
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          {/* <div> */}
          <FiMoon
            onClick={handleTheme}
            style={{ background: color.background, color: color.color }}
          />
          {/* </div> */}
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="text-red-600 hover:text-gray-800">
              About
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-800">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

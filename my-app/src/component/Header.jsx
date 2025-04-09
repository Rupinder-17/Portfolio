import { Usetheme } from "../Hooks/usetheme";
import { FiMoon } from "react-icons/fi";

export const Header = () => {
  const { handleTheme } = Usetheme();
  return (
    <div>
      <header className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <FiMoon
            onClick={handleTheme}
            className="text-gray-800 dark:text-white cursor-pointer text-xl hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
          />
          {/* </div> */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#about"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

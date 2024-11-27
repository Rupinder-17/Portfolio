import React from 'react'

export const Header = () => {
  return (
    <div>
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-gray-800">
            Rupinder kaur
          </a>
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
}



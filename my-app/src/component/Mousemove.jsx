import React, { useState, useEffect } from "react";

function RainbowMouseTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Update mouse position on mouse move
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Add event listener for mouse move
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Dynamic gradient for the rainbow effect
  const gradientColor = `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
       orange, yellow, green, blue, indigo, violet)`;

  return (
    <div
      className="fixed inset-0 w-7 h-3 transition-all duration-100"
      style={{
        backgroundImage: gradientColor,
      }}
    />
  );
}

export default RainbowMouseTrail;

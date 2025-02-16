import  { useState } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";


export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for contacting me!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (

    <div className="bg-gray-900 text-white py-16 px-6">
  

{/* import React from "react"; */}
{/* import { AuroraBackground } from "@/components/ui/aurora-background"; */}

{/* export function AuroraBackgroundDemo() { */}
  {/* return ( */}
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Background lights are cool you know.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          And this, is chemical burn.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Debug now
        </button>
      </motion.div>
    </AuroraBackground>
  

      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-gray-400 text-lg">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 text-left">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 text-left">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-300 text-left">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

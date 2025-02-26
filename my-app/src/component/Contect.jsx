import { useState } from "react";
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
    <div className=" py-16 px-6 ">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative w-[35%]"
        >
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl text-center font-bold mb-11 text-cyan-600">
                Contact Me
              </h1>
              {/* <p className="text-gray-500 text-lg mb-8">
                Feel free to reach out for collaborations or just to say 
              </p> */}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-600 text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-1 py-2 bg-white bg-opacity-20  placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-600 text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-1 py-2 bg-white bg-opacity-20 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-600 text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-1 py-2 bg-white bg-opacity-20 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-md transition duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          
        </motion.div>
      </AuroraBackground>
    </div>
  );
};

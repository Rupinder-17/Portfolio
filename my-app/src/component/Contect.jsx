import React, { useState } from "react";

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

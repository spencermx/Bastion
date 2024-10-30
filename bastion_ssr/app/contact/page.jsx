// pages/contact.js

"use client";

import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  // Define state for each form field
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Define state for form submission status
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/xgveogdd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      // Reset form fields if submission was successful
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(true); // Show a success message (optional)
    } else {
      console.error("Form submission failed");
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 text-gray-100">
      <h1 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
        Contact Me
      </h1>
      
      <p className="text-lg mb-8 leading-relaxed">
        I’d love to hear from you! Whether you have a question about my work, want to discuss a project, or just want to connect, feel free to reach out using the form below or through my social links.
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6 mb-12">
        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-600 focus:border-teal-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-600 focus:border-teal-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
            className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-600 focus:border-teal-400 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 mt-4 bg-gradient-to-r from-blue-500 to-teal-400 text-gray-900 font-bold rounded-lg hover:from-teal-400 hover:to-blue-500 transition-colors"
        >
          Send Message
        </button>
      </form>

      {submitted && (
        <p className="text-teal-400 font-bold">Thank you! Your message has been sent.</p>
      )}
    </div>
  );
}

import Image from "next/image";
import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

import Link from 'next/link';

// pages/about.js

// pages/about.js

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiTerminal, FiSettings, FiDatabase, FiGlobe } from 'react-icons/fi';

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12 text-gray-100">
      {/* Header Section */}
      <h1 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
        About Me
      </h1>
      
      {/* Introduction */}
      <section className="mb-12 transition-transform hover:scale-105">
        <p className="text-lg leading-relaxed mb-4">
          Hi, I’m a <span className="font-bold text-teal-400">Full Stack Software Engineer</span> with a passion for building efficient, scalable, and intuitive web applications. My approach combines strong problem-solving skills with a dedication to clean, maintainable code. With experience in both frontend and backend development, I strive to deliver end-to-end solutions that make a meaningful impact.
        </p>
      </section>
      
      {/* Workflow Section with Icon */}
      <section className="mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <FiTerminal className="text-3xl text-blue-400" />
          <h2 className="text-3xl font-semibold text-teal-400">Current Development Workflow</h2>
        </div>
        <p className="text-lg leading-relaxed">
          My workflow is powered by <span className="font-bold text-blue-400">Ubuntu</span> with a tiled setup using i3, <span className="font-bold text-blue-400">tmux</span> for session management, and <span className="font-bold text-blue-400">Neovim</span> with a curated set of plugins for an optimized coding experience. With <span className="font-bold text-blue-400">tmuxinator</span>, I seamlessly manage multiple projects, ensuring a streamlined, productive setup.
        </p>
      </section>
      
      {/* Skills Section with Badges */}
      <section className="mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <FiSettings className="text-3xl text-blue-400" />
          <h2 className="text-3xl font-semibold text-teal-400">Skills & Technologies</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-blue-400">Frontend</h3>
            <p>JavaScript, React, Next.js, Tailwind CSS</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-blue-400">Backend</h3>
            <p>Node.js, Express, REST APIs</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-blue-400">Databases</h3>
            <p>MongoDB, PostgreSQL</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-blue-400">Tools</h3>
            <p>Git, Docker, Neovim, tmux, tmuxinator</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-blue-400">Methodologies</h3>
            <p>Test-Driven Development, Agile</p>
          </div>
        </div>
      </section>
      
    </div>
  );
}

      // {/* Contact Section with Icon and Social Links */}
      // <section>
      //   <div className="flex items-center space-x-3 mb-4">
      //     <FiGlobe className="text-3xl text-blue-400" />
      //     <h2 className="text-3xl font-semibold text-teal-400">Let’s Connect</h2>
      //   </div>
      //   <p className="text-lg mb-6">
      //     I’m always interested in collaborating on new projects or exploring job opportunities. Reach out on LinkedIn or check out my code on GitHub.
      //   </p>
      //   <div className="flex space-x-4 text-3xl">
      //     <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
      //       <FaLinkedin />
      //     </a>
      //     <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
      //       <FaGithub />
      //     </a>
      //   </div>
      // </section>

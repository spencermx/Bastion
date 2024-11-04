import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiTerminal, FiSettings } from 'react-icons/fi';

export default function About() {
  return (
    <div className="container mx-auto px-6 py-10 text-gray-100">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-300">
          Full Stack Software Engineer specialized in building scalable web applications
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-16">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold mb-6 text-teal-400">
            About Me
          </h2>
          <p className="text-base leading-relaxed text-gray-300">
            Hi, I’m a <span className="font-bold text-teal-400">Full Stack Software Engineer</span> with a passion for building efficient, scalable, and intuitive web applications. My approach combines strong problem-solving skills with a dedication to clean, maintainable code. With experience in both frontend and backend development, I strive to deliver end-to-end solutions that make a meaningful impact.
          </p>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="mb-16">
        <div className="flex items-center space-x-3 mb-6">
          <FiTerminal className="text-3xl text-blue-400" />
          <h2 className="text-2xl font-semibold text-teal-400">
            Current Development Workflow
          </h2>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <p className="text-base leading-relaxed text-gray-300">
            My workflow is powered by <span className="font-bold text-blue-400">Ubuntu</span> with a tiled setup using i3, <span className="font-bold text-blue-400">tmux</span> for session management, and <span className="font-bold text-blue-400">Neovim</span> with a curated set of plugins for an optimized coding experience. With <span className="font-bold text-blue-400">tmuxinator</span>, I seamlessly manage multiple projects, ensuring a streamlined, productive setup.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <div className="flex items-center space-x-3 mb-6">
          <FiSettings className="text-3xl text-blue-400" />
          <h2 className="text-2xl font-semibold text-teal-400">
            Skills & Technologies
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-400 mb-2">
              Frontend
            </h3>
            <p className="text-sm text-gray-300">
              JavaScript, React, Next.js, Tailwind CSS
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-400 mb-2">
              Backend
            </h3>
            <p className="text-sm text-gray-300">
              Node.js, Express, REST APIs
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-400 mb-2">
              Databases
            </h3>
            <p className="text-sm text-gray-300">
              MongoDB, PostgreSQL
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-400 mb-2">
              Tools
            </h3>
            <p className="text-sm text-gray-300">
              Git, Docker, Neovim, tmux, tmuxinator
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 md:col-span-2">
            <h3 className="text-xl font-bold text-blue-400 mb-2">
              Methodologies
            </h3>
            <p className="text-sm text-gray-300">
              Test-Driven Development, Agile
            </p>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <footer className="text-center">
        <div className="flex justify-center space-x-6 text-teal-400 mb-6">
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Spencer Maas. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

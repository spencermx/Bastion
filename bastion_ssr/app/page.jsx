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
    <div className="container mx-auto px-6 py-6 text-gray-100">  {/* reduced py-8 to py-6 */}
      {/* Header Section */}
      <h2 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">  {/* text-4xl to text-3xl, mb-6 to mb-4 */}
        About Me
      </h2>
      
      {/* Introduction */}
      <section className="mb-6 transition-transform hover:scale-[1.02]">  {/* mb-8 to mb-6, reduced scale from 1.05 to 1.02 */}
        <p className="text-base leading-relaxed mb-3">  {/* text-lg to text-base, mb-4 to mb-3 */}
          Hi, I'm a <span className="font-bold text-teal-400">Full Stack Software Engineer</span> with a passion for building efficient, scalable, and intuitive web applications. My approach combines strong problem-solving skills with a dedication to clean, maintainable code. With experience in both frontend and backend development, I strive to deliver end-to-end solutions that make a meaningful impact.
        </p>
      </section>
      
      {/* Workflow Section with Icon */}
      <section className="mb-6">  {/* mb-8 to mb-6 */}
        <div className="flex items-center space-x-3 mb-3">  {/* mb-4 to mb-3 */}
          <FiTerminal className="text-xl text-blue-400" />  {/* text-2xl to text-xl */}
          <h2 className="text-xl font-semibold text-teal-400">Current Development Workflow</h2>  {/* text-2xl to text-xl */}
        </div>
        <p className="text-base leading-relaxed">  {/* text-lg to text-base */}
          My workflow is powered by <span className="font-bold text-blue-400">Ubuntu</span> with a tiled setup using i3, <span className="font-bold text-blue-400">tmux</span> for session management, and <span className="font-bold text-blue-400">Neovim</span> with a curated set of plugins for an optimized coding experience. With <span className="font-bold text-blue-400">tmuxinator</span>, I seamlessly manage multiple projects, ensuring a streamlined, productive setup.
        </p>
      </section>
      
      {/* Skills Section with Badges */}
      <section className="mb-6">  {/* mb-8 to mb-6 */}
        <div className="flex items-center space-x-3 mb-3">  {/* mb-4 to mb-3 */}
          <FiSettings className="text-xl text-blue-400" />  {/* text-2xl to text-xl */}
          <h2 className="text-xl font-semibold text-teal-400">Skills & Technologies</h2>  {/* text-2xl to text-xl */}
        </div>
        <div className="grid grid-cols-2 gap-2">  {/* gap-3 to gap-2 */}
          <div className="bg-gray-800 p-3 rounded-lg">  {/* p-4 to p-3 */}
            <h3 className="text-lg font-bold text-blue-400">Frontend</h3>  {/* text-xl to text-lg */}
            <p className="text-sm">JavaScript, React, Next.js, Tailwind CSS</p>  {/* added text-sm */}
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <h3 className="text-lg font-bold text-blue-400">Backend</h3>
            <p className="text-sm">Node.js, Express, REST APIs</p>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <h3 className="text-lg font-bold text-blue-400">Databases</h3>
            <p className="text-sm">MongoDB, PostgreSQL</p>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <h3 className="text-lg font-bold text-blue-400">Tools</h3>
            <p className="text-sm">Git, Docker, Neovim, tmux, tmuxinator</p>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <h3 className="text-lg font-bold text-blue-400">Methodologies</h3>
            <p className="text-sm">Test-Driven Development, Agile</p>
          </div>
        </div>
      </section>
    </div>
  );
}
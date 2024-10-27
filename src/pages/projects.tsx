// src/components/Projects.tsx
import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ul className="mt-4 list-disc pl-6 space-y-6">
        <li>
          <h2 className="font-semibold text-xl">Travel Recommender App</h2>
          <p className="text-gray-300">
            A Flutter project designed to recommend travel destinations based on user preferences.
          </p>
          <p className="text-gray-400">Tools: Dart, CMake, HTML, C++, Ruby, Swift.</p>
          <a 
            href="https://github.com/NarmadaJayamaha/travelrecommender-app.git" 
            className="text-blue-500 underline hover:text-blue-700 transition duration-200"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </li>
        <li>
          <h2 className="font-semibold text-xl">Interactive Storytelling Website</h2>
          <p className="text-gray-300">
            An interactive web platform created using Next.js, where users can explore dynamic and immersive stories. 
            The site allows seamless navigation between different storylines, offering an engaging storytelling experience.
          </p>
          <p className="text-gray-400">Tools: TypeScript, JavaScript, CSS.</p>
          <a 
            href="https://github.com/FHSS-USJ/assignment-01-Nathashasathsarani.git" 
            className="text-blue-500 underline hover:text-blue-700 transition duration-200"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </li>
        {/* Add more projects here */}
      </ul>
    </div>
  );
};

export default Projects;

// src/components/Skills.tsx
import React from 'react';

const Skills: React.FC = () => {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-4">Programming Languages</h1>
            <ul className="mt-2 list-disc pl-6 space-y-2">
                <li className="bg-gray-700 p-2 rounded hover:bg-blue-500 transition duration-200">Python</li>
                <li className="bg-gray-700 p-2 rounded hover:bg-blue-500 transition duration-200">Java</li>
                <li className="bg-gray-700 p-2 rounded hover:bg-blue-500 transition duration-200">JavaScript</li>
                <li className="bg-gray-700 p-2 rounded hover:bg-blue-500 transition duration-200">SQL</li>
            </ul>

            <h4 className="text-3xl font-bold mt-8 mb-4">Tools & Technologies</h4>
            <ul className="mt-2 list-disc pl-6 space-y-2">
                <li className="bg-gray-700 p-2 rounded hover:bg-blue-500 transition duration-200">Git</li>
                {/* Add more tools here if needed */}
            </ul>
        </div>
    );
};

export default Skills; 

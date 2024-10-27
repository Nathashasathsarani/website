// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">About Me</h1>
            
            <p className="mt-4 mb-8 text-gray-300 leading-relaxed">
                Hello! I’m a second-year undergraduate student pursuing a Bachelor of Science in Information Technology 
                at the University of Sri Jayewardenepura in Sri Lanka, expecting to graduate in 2027. I am passionate about 
                software development, problem-solving, and innovation in technology.
            </p>
            
            <h4 className="text-2xl font-bold mb-4">Education</h4>
            
            <ul className="list-disc list-inside mb-6 text-gray-200">
                <li><strong>Degree:</strong> Bachelor of Science in Information Technology (BSc IT)</li>
                <li><strong>Institution:</strong> University of Sri Jayewardenepura</li>
                <li><strong>Location:</strong> Sri Lanka</li>
                <li><strong>Expected Graduation:</strong> 2027</li>
                <li><strong>Membership:</strong> Member of the ICT Students' Association (ICTSA)</li>
            </ul>
            
            <h4 className="text-2xl font-bold mb-4">Interests</h4> 
            
            <p className="mt-4 text-gray-300 leading-relaxed">
                Beyond academics, my interests include Open-Source Development, Cybersecurity Research, Programming Challenges, 
                and Web Development & Design. I also enjoy gaming, video editing, and data entry tasks, as they allow me to 
                apply my technical skills creatively. My ultimate goal is to become a software engineer and make meaningful 
                contributions to the field.
            </p>

            
        </div>
    );
};

export default About;

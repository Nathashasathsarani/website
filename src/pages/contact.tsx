// src/components/Contact.tsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Importing icons

const Contact: React.FC = () => {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Contact</h1>

            {/* Contact Form */}
            <form className="mb-8 bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2 text-white" htmlFor="name">Name</label>
                    <input
                        className="w-full border border-gray-300 p-2 rounded bg-gray-700 text-white placeholder-gray-400"
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2 text-white" htmlFor="email">Email</label>
                    <input
                        className="w-full border border-gray-300 p-2 rounded bg-gray-700 text-white placeholder-gray-400"
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2 text-white" htmlFor="message">Message</label>
                    <textarea
                        className="w-full border border-gray-300 p-2 rounded bg-gray-700 text-white placeholder-gray-400"
                        id="message"
                        placeholder="Your Message"
                        rows={4}
                        required
                    ></textarea>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200" type="submit">
                    Send Message
                </button>
            </form>

            {/* Social Media Links */}
            <h2 className="text-2xl font-semibold mb-4 text-center">Connect with me</h2>
            <p className="mt-4 flex items-center justify-center text-gray-300">
                <FaEnvelope className="mr-2" />
                Email: <a href="mailto:nathashasathsarani209@gmail.com" className="underline">nathashasathsarani209@gmail.com</a>
            </p>
            <p className="mt-4 flex items-center justify-center text-gray-300">
                <FaLinkedin className="mr-2" />
                LinkedIn: <a href="https://www.linkedin.com/in/nathasha-sathsarani-83235a24a" className="underline">www.linkedin.com/in/nathasha-sathsarani-83235a24a</a>
            </p>
            <p className="mt-4 flex items-center justify-center text-gray-300">
                <FaGithub className="mr-2" />
                GitHub: <a href="https://www.github.com/Nathashasathsarani" className="underline">www.github.com/Nathashasathsarani</a>
            </p>
        </div>
    );
};

export default Contact;

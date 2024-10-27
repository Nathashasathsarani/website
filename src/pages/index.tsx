// src/pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faArrowRight, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

library.add(faEnvelope, faArrowRight, faQuoteLeft, faQuoteRight);

const HomePage = () => {
    const [welcomeMessage, setWelcomeMessage] = useState("");
    const welcomeTexts = [
        "Welcome to my personal website!",
        "Explore my projects and skills!",
        "Let's connect and collaborate!",
    ];

    // Loop through welcome messages
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setWelcomeMessage(welcomeTexts[index]);
            index = (index + 1) % welcomeTexts.length;
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Head>
                <link 
                    rel="shortcut icon" 
                    href="https://media.discordapp.net/attachments/870311702347018250/884454889240006716/Bugs_Banny-AdemCan.jpg" 
                />
                <title>Home - Nathasha Sathsarani</title>
                <meta 
                    name="description" 
                    content="Nathasha Sathsarani: Passionate about web development, networking, and software engineering." 
                />
                <meta 
                    name="keywords" 
                    content="Nathasha Sathsarani, software engineering, web development, JavaScript, IT student" 
                />
                <meta name="theme-color" content="#41B883"/>
                <meta 
                    property="og:image" 
                    content="https://media.discordapp.net/attachments/870311702347018250/884454889240006716/Bugs_Banny-AdemCan.jpg" 
                />
            </Head>

            <main className="relative min-h-screen bg-cover bg-center text-white flex flex-col justify-start items-start p-10"
                  style={{
                      backgroundImage: "url('https://drive.google.com/uc?export=view&id=1sojK0p1EF2pegRHdaZfywa11AykL6xKC')", 
                  }}>
                
                {/* Dynamic Welcome Message */}
                <div className="text-center w-full mb-10">
                    <h2 className="text-4xl font-bold animate__animated animate__fadeIn">{welcomeMessage}</h2>
                </div>

                {/* Header Section */}
                <div className="flex items-center mb-12">
                    <div>
                        <h1 className="text-5xl font-extrabold mb-8 animate__animated animate__fadeIn">Nathasha Sathsarani</h1>
                        <h2 className="text-lg mb-4 animate__animated animate__fadeIn">IT Undergraduate</h2>
                    </div>
                </div>

                {/* About Section */}
                <div className="max-w-8xl mb-12">
                    <p className="text-lg animate__animated animate__fadeIn">
                        I’m Nathasha, a second-year IT undergraduate with a passion for web app development, networking, software engineering, coding, and database management. I enjoy building functional and efficient applications, and I’m constantly expanding my knowledge in these areas. My ultimate goal is to become a skilled software engineer and contribute to innovative projects that make a difference.
                    </p>
                </div>

                {/* Testimonials Section */}
                <section className="mt-12 p-12 bg-gray-900 rounded-md shadow-md flex items-center justify-center">
                    <blockquote className="text-3xl italic text-gray-300 flex items-center">
                        <FontAwesomeIcon icon="quote-left" className="mr-6" />
                        <span>It's not that we use technology, we live technology.</span>
                        <FontAwesomeIcon icon="quote-right" className="ml-6" />
                    </blockquote>
                    <cite className="text-lg ml-8 text-gray-500">- Godfrey Reggio</cite>
                </section>
            </main>
        </>
    );
};

export default HomePage;

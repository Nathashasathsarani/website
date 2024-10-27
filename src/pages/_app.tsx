// src/pages/_app.tsx
import '../assets/css/global.css';
import Header from '../components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faUser, faTools } from '@fortawesome/free-solid-svg-icons'; // Example icons

// Add icons to the library
library.add(faCoffee, faUser, faTools);

export default function MyApp({ Component, pageProps }) {
    return (
        <div className="bg-gray-600 min-h-screen text-white flex flex-col">
            <Header />
            <main className="container mx-auto p-4 flex-grow">
                <Component {...pageProps} />
            </main>
            <footer className="bg-gray-900 p-4 text-center">
                <div className="text-gray-400 text-sm">
                    © 2024 Nathasha Sathsarani. All rights reserved.
                </div>
                <div className="mt-2 space-x-4 flex justify-center">
                    <FontAwesomeIcon 
                        icon="coffee" 
                        className="text-blue-400 hover:text-blue-500 transition-colors duration-200" 
                    />
                    <FontAwesomeIcon 
                        icon="user" 
                        className="text-blue-400 hover:text-blue-500 transition-colors duration-200" 
                    />
                    <FontAwesomeIcon 
                        icon="tools" 
                        className="text-blue-400 hover:text-blue-500 transition-colors duration-200" 
                    />
                </div>
            </footer>
        </div>
    );
}

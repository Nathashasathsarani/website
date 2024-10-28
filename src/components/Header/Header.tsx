// src/components/header/header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 shadow-md py-4">
      <nav className="flex justify-center space-x-10">
        <Link href="/" className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-200">
          Home
        </Link>
        <Link href="/about" className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-200">
          About
        </Link>
        <Link href="/skills" className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-200">
          Skills
        </Link>
        <Link href="/projects" className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-200">
          Projects
        </Link>
        <Link href="/contact" className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-200">
          Contact
        </Link>
      </nav>
    </header>
  );
}

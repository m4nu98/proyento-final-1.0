import React from 'react';
import Link from 'next/link'; // Importa Link de Next.js

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 lg:px-6 py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm">&copy; 2024 Cleaning Pros. All rights reserved.</p>
      <nav className="flex gap-4 sm:gap-6">
        <Link href="#" passHref legacyBehavior>
          <a className="hover:underline">Privacy Policy</a>
        </Link>
        <Link href="#" passHref legacyBehavior>
          <a className="hover:underline">Terms of Service</a>
        </Link>
        <Link href="#" passHref legacyBehavior>
          <a className="hover:underline">Contact Us</a>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;

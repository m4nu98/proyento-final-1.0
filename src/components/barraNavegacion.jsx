"use client"; // Asegúrate de que esta línea esté presente

import "../app/globals.css"
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import SignupForm from '@/components/SignupForm'; // Importa el componente SignupForm
import SigninForm from '@/components/SigninForm'; // Importa el componente SigninForm
import { useForm } from 'react-hook-form';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { BrushIcon, MenuIcon } from '@/components/ui/icons';

const MobileMenu = ({ menuOpen, setMenuOpen }) => (
    <div className={`absolute top-16 right-0 bg-gray-900 w-64 flex flex-col items-start gap-4 p-4 z-50 ${menuOpen ? 'block' : 'hidden'}`}>
        <Link href="/" className="hover:underline w-full text-left" prefetch={false} onClick={() => setMenuOpen(false)}>
            Home
        </Link>
        <Link href="/publicaciones" className="hover:underline w-full text-left" prefetch={false} onClick={() => setMenuOpen(false)}>
            Services
        </Link>
        <Link href="#" className="hover:underline w-full text-left" prefetch={false} onClick={() => setMenuOpen(false)}>
            Hire
        </Link>
        <Link href="#" className="hover:underline w-full text-left" prefetch={false} onClick={() => setMenuOpen(false)}>
            About Us
        </Link>
        <Link href="#" className="hover:underline w-full text-left" prefetch={false} onClick={() => setMenuOpen(false)}>
            Contact
        </Link>
    </div>
);
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white px-4 lg:px-6 py-4 flex items-center justify-between relative">
            <Link href="/" className="flex items-center" prefetch={false}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span className="text-lg font-semibold ml-2">Home Services</span>
            </Link>

            <nav className="hidden lg:flex gap-6">
                <Link href="/" className="hover:underline" prefetch={false}>Home</Link>
                <Link href="/publicaciones" className="hover:underline" prefetch={false}>Services</Link>
                <Link href="#" className="hover:underline" prefetch={false}>Hire</Link>
                <Link href="#" className="hover:underline" prefetch={false}>About Us</Link>
                <Link href="#" className="hover:underline" prefetch={false}>Contact</Link>
            </nav>

            <div className="flex gap-2">
                <Button variant="outline" className="text-white hover:bg-white hover:text-gray-900" onClick={() => setIsSigninModalOpen(true)}>
                    Sign In
                </Button>
                <Button className="bg-white text-gray-900 hover:bg-gray-900 hover:text-white" onClick={() => setIsSignupModalOpen(true)}>
                    Sign Up
                </Button>
            </div>

            <nav className="lg:hidden">
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-gray-800"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
                {/* MobileMenu component goes here if you have one */}
            </nav>

            {/* Modal for SignupForm */}
            {isSignupModalOpen && (
                <SignupForm onClose={() => setIsSignupModalOpen(false)} />
            )}

            {/* Modal for SigninForm */}
            {isSigninModalOpen && (
                <SigninForm onClose={() => setIsSigninModalOpen(false)} />
            )}
        </header>
    );
}
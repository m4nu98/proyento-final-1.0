use client"; // Esto indica que el componente debe ser renderizado en el lado del cliente
import "../app/globals.css"
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { BrushIcon, MenuIcon } from '@/components/ui/icons';

const MobileMenu = ({ menuOpen, setMenuOpen }) => (
    <div className={`absolute top-16 right-0 bg-gray-900 w-64 flex flex-col items-start gap-4 p-4 z-50 ${menuOpen ? 'block' : 'hidden'}`}>
        <Link href="#" className="hover:underline w-full text-left" prefetch={false} onClick={() => setMenuOpen(false)}>
            Home
        </Link>
        <Link href="#" className="hover:underline w-full text-left" prefetch={false} onClick={() => setMenuOpen(false)}>
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

const SignupModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;





    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md">
                <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign Up
                        </button>
                        <button className="text-gray-500 hover:text-gray-800" type="button" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white px-4 lg:px-6 py-4 flex items-center justify-between relative">
        <Link href="#" className="flex items-center " prefetch={false}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">
                    </path>
                    <polyline points="9 22 9 12 15 12 15 22">
                    </polyline>
                </svg>
                <span className="text-lg font-semibold">Home Services</span>
            </Link>
            <nav className="hidden lg:flex gap-6">
                <Link href="#" className="hover:underline" prefetch={false}>Home</Link>
                <Link href="#" className="hover:underline" prefetch={false}>Services</Link>
                <Link href="#" className="hover:underline" prefetch={false}>Hire</Link>
                <Link href="#" className="hover:underline" prefetch={false}>About Us</Link>
                <Link href="#" className="hover:underline" prefetch={false}>Contact</Link>
            </nav>

            <div className="flex gap-2">
                <Button variant="outline" className="text-white hover:bg-white hover:text-gray-900">
                    Sign In
                </Button>
                <Button className="bg-white text-gray-900 hover:bg-gray-900 hover:text-white" onClick={() => setIsModalOpen(true)}>
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
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </nav>

            <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </header>
    );
}
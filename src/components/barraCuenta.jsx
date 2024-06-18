// components/barraNavegacion.jsx

"use client"; // Esto indica que el componente debe ser renderizado en el lado del cliente
import "../app/globals.css"
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { BrushIcon, MenuIcon } from '@/components/ui/icons';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

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
                <Link href="#" className="hover:underline" prefetch={false}>
                    Home
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                    Services
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                    Hire
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                    About Us
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                    Contact
                </Link>
            </nav>
            <div className="flex gap-2">
                <Button variant="outline" className="text-white hover:bg-white hover:text-gray-900">
                    Exit
                </Button>
                <Button className="bg-white text-gray-900 hover:bg-gray-900 hover:text-white">Sign Up</Button>
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
                {menuOpen && (
                    <div className="absolute top-16 right-0 bg-gray-900 w-64 flex flex-col items-start gap-4 p-4 z-50">
                        <Link href="#" className="hover:underline w-full text-left" prefetch={false}>
                            Home
                        </Link>
                        <Link href="#" className="hover:underline w-full text-left" prefetch={false}>
                            Services
                        </Link>
                        <Link href="#" className="hover:underline w-full text-left" prefetch={false}>
                            Hire
                        </Link>
                        <Link href="#" className="hover:underline w-full text-left" prefetch={false}>
                            About Us
                        </Link>
                        <Link href="#" className="hover:underline w-full text-left" prefetch={false}>
                            Contact
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}

"use client"; // Asegúrate de que esta línea esté presente

import "../app/globals.css"
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';

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

const SignupForm = ({ onClose }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [errorFromServer, setErrorFromServer] = useState('');

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:4000/api/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Error al registrar usuario');
            }
        
            const responseData = await response.json();
            console.log(responseData); // Verifica la respuesta del servidor
            alert('Usuario registrado exitosamente');
            reset(); // Limpiar el formulario después de enviar los datos
            onClose(); // Cierra el formulario modal después del registro exitoso
        } catch (error) {
            console.error('Error al enviar datos:', error);
            setErrorFromServer('Error al registrar usuario. Inténtalo de nuevo más tarde.');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md">
                <h2 className="text-2xl text-center font-semibold mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            {...register('nombre', { required: 'El nombre es obligatorio' })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                        />
                        {errors.nombre && <p className="text-red-500 text-xs italic">{errors.nombre.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            {...register('email', { 
                                required: 'El email es obligatorio', 
                                pattern: { 
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: 'Email no válido'
                                }
                            })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                        {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            {...register('password', { required: 'La contraseña es obligatoria' })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="********"
                        />
                        {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                    </div>

                    {errorFromServer && <p className="text-red-500 text-xs italic">{errorFromServer}</p>}

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Sign Up
                        </button>
                        <button
                            type="button"
                            className="text-gray-500 hover:text-gray-800"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};



const SigninForm = ({ onClose }) => {
    const [errorFromServer, setErrorFromServer] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        };

        console.log("Datos enviados:", data);  // Añadir registro para ver los datos enviados

        try {
            const response = await fetch('http://localhost:4000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                console.error("Error de respuesta del servidor:", errorResponse);
                throw new Error('Error al iniciar sesión');
            }
        
            const responseData = await response.json();
            console.log(responseData); // Verifica la respuesta del servidor
            alert('Inicio de sesión exitoso');
            onClose(); // Cierra el formulario modal después del inicio de sesión exitoso
        } catch (error) {
            console.error('Error al enviar datos:', error);
            setErrorFromServer('Contraseña o Email incorecctos');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md">
                <h2 className="text-2xl text-center font-semibold mb-4">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required // Asegúrate de que el campo es requerido
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="********"
                            required // Asegúrate de que el campo es requerido
                        />
                    </div>
                    {errorFromServer && <p className="text-red-500 text-xs italic">{errorFromServer}</p>}
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Sign In
                        </button>
                        <button
                            type="button"
                            className="text-gray-500 hover:text-gray-800"
                            onClick={onClose}
                        >
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
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white px-4 lg:px-6 py-4 flex items-center justify-between relative">
            <Link href="#" className="flex items-center" prefetch={false}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span className="text-lg font-semibold ml-2">Home Services</span>
            </Link>

            <nav className="hidden lg:flex gap-6">
                <Link href="#" className="hover:underline" prefetch={false}>Home</Link>
                <Link href="#" className="hover:underline" prefetch={false}>Services</Link>
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
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </nav>

            {isSignupModalOpen && <SignupForm onClose={() => setIsSignupModalOpen(false)} />}
            {isSigninModalOpen && <SigninForm onClose={() => setIsSigninModalOpen(false)} />}
        </header>
    );
}

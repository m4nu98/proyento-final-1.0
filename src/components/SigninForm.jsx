import React, { useState } from 'react';

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
            setErrorFromServer('Contraseña o Email incorrectos');
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

export default SigninForm;

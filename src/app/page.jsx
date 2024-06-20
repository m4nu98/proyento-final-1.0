
import "../app/globals.css"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LXUUFTy4I2C
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <>
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className=" centrar bg-gray-900 text-white py-12 md:py-24 lg:py-32">
          <div className=" centrar container px-4 md:px-6 grid gap-6 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Contrata los Mejores Profesionales de Limpieza
              </h1>
              <p className="text-gray-300 md:text-xl">
              Encuentre limpiadores, electricistas, jardineros y fontaneros de primer nivel con solo unos pocos clics.              </p>
              <div className="flex gap-2">
                <Button className="boton2">Hire Now</Button>
                <Button variant="outline" className="text-white hover:bg-white hover:text-gray-900">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img src="/placeholder.svg" width="500" height="400" alt="Hero Image" className="rounded-lg" />
            </div>
          </div>
        </section>
        <section className=" centrar py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
              <p className="text-gray-500 md:text-xl">
                We offer a wide range of professional services to meet your needs.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div  className=" tarjetas bg-white  rounded-lg shadow-md p-6 flex flex-col items-center gap-4">
                <BrushIcon className="h-12 w-12 text-gray-900 text-xl" />
                <h3 className="text-xl font-semibold">Cleaning</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Our professional cleaners will make your home or office spotless.
                </p>
                <Button variant="link" className="text-gray-900 dark:text-gray hover:underline">
                  Learn More
                </Button>
              </div>
              <div className=" tarjetas bg-white rounded-lg shadow-md p-6 flex flex-col items-center gap-4">
                <BoltIcon className="h-12 w-12 text-gray-900 dark:text-gray" />
                <h3 className="text-xl font-semibold">Electrical</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Our licensed electricians can handle any electrical job, big or small.
                </p>
                <Button variant="link" className="text-gray-900 dark:text-gray hover:underline">
                  Learn More
                </Button>
              </div>
              <div className="tarjetas bg-white rounded-lg shadow-md p-6 flex flex-col items-center gap-4">
                <LeafIcon className="h-12 w-12 text-gray-900 dark:text-gray" />
                <h3 className="text-xl font-semibold">Gardening</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Our expert gardeners will keep your outdoor space looking beautiful.
                </p>
                <Button variant="link" className="text-gray-900 dark:text-gray hover:underline">
                  Learn More
                </Button>
              </div>
              <div className="bg-white tarjetas rounded-lg shadow-md p-6 flex flex-col items-center gap-4">
                <PipetteIcon className="h-12 w-12 text-gray-900 dark:text-gray" />
                <h3 className="text-xl font-semibold">Plumbing</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Our skilled plumbers can handle any plumbing issue, big or small.
                </p>
                <Button variant="link" className="text-gray-900 dark:text-gray hover:underline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className=" centrar bg-gray-100 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
              <p className="text-gray-500 md:text-xl">
                Hear from our satisfied customers about their experience with our services.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white  rounded-lg shadow-md p-6 flex flex-col gap-4">
                <blockquote className="text-lg font-medium leading-relaxed">
                  "The cleaning team was professional, efficient, and left my\n home spotless. I highly recommend their
                  services."
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Satisfied Customer</p>
                  </div>
                </div>
              </div>
              <div className="bg-white  rounded-lg shadow-md p-6 flex flex-col gap-4">
                <blockquote className="text-lg font-medium leading-relaxed">
                  "The electrician was knowledgeable, efficient, and completed\n the job quickly. I'm very pleased with
                  the service."
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Sarah Miller</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Satisfied Customer</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4">
                <blockquote className="text-lg font-medium leading-relaxed">
                  "The gardening team did an amazing job transforming my\n backyard. I'm so pleased with the results."
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>LW</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Lisa Wang</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Satisfied Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" centrar py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
              <p className="text-gray-500 md:text-xl">Hire the best professionals for your home or business needs.</p>
            </div>
            <div className="flex justify-center">
              <Button className="boton w-full max-w-md  ">Hire Now</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>)
}

function BoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function BrushIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  )
}


function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PipetteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 22 1-1h3l9-9" />
      <path d="M3 21v-3l9-9" />
      <path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" />
    </svg>
  )
}
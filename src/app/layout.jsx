import './globals.css';
import { Libre_Franklin } from 'next/font/google';
import { Archivo } from 'next/font/google';
import Header from "@/components/barraNavegacion";
import Footer from "@/components/Footer"
const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
});

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
});

export const metadata = {
  title: 'Home Services',
  description: 'Descripción de mi página web',
};

export default function Layout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${libre_franklin.variable} ${archivo.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

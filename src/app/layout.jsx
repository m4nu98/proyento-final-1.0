
import './globals.css'
import { Libre_Franklin } from 'next/font/google'
import { Archivo } from 'next/font/google'

const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
})
const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})
export const metadata = {
  title: 'Home Services',
  description: 'Descripción de mi página web',
};

export default function Layout({ children }) {
  return (
    <html lang="es">
      <body className={libre_franklin.variable + ' ' + archivo.variable}>
        {children}
      </body>
    </html>
  )
}
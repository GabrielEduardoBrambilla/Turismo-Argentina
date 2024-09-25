import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaPhoneAlt,
  FaSearch,
  FaShoppingBag
} from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa6'
import logo from '../assets/Conquista-tu-Mundo-Logo-NUEVO-1.png'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'Turismo Argentina',
  description: 'Created by Gabriel Eduardo Brambilla'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* CONTACT HEADER */}
        <header className="flex px-12 py-3 bg-black text-white">
          <div className="social-contact flex w-full gap-8 text-xl  ">
            <div className="phone flex items-center gap-2 cursor-pointer">
              <FaPhoneAlt fontSize={22} />
              <span>Hablar con un ejecutivo </span>
            </div>
            <div className="whatsapp flex items-center gap-2 cursor-pointer">
              <FaWhatsapp fontSize={28} />
              <span>Envíanos un mesaje</span>
            </div>
          </div>
          <div className="social-media flex items-center gap-4">
            <FaFacebook fontSize={26} />
            <FaInstagram fontSize={26} />
          </div>
        </header>
        <nav className="bg-white text-black flex px-12 py-3 justify-between items-center">
          <Image src={logo} alt="" className="w-28" />
          <div className="flex gap-4 atractions-type text-lg font-semibold">
            <Link href={''}>Nacional</Link>
            <Link href={''}>Internacional</Link>
            <Link href={''}>Quiénes Somos</Link>
          </div>
          <div className="action-buttons flex gap-4">
            <FaSearch />
            <FaShoppingBag />
          </div>
        </nav>
        {children}
        <footer className="flex px-12 gap-4 py-8 flex-col bg-slate-900">
          <div className="logo flex-1 flex-wrap">
            <Image alt="" src={logo} />
          </div>
          <div className="content flex justify-between ">
            <div className="col-2  text-white flex flex-col gap-4">
              <p className=" text-emerald-500 font-bold text-lg">
                Hablar con un ejecutivo
              </p>
              <Button className="flex gap-4 bg-green-500" variant={'default'}>
                <FaWhatsapp fontSize={28} />
                Enviar un mensaje
              </Button>
            </div>
            <div className="col-2  text-white flex flex-col gap-4">
              <p className="text-emerald-500 font-bold text-lg">Políticas</p>
              <Link href={''}>Terminos y Condiciones</Link>
              <Link href={''}>Devolucion, anulacion y cambio</Link>
              <Link href={''}>Bases del Concurso Vive Iguazú</Link>
            </div>
            <div className="col-3 text-white flex flex-col gap-4">
              <p className="text-emerald-500 font-bold text-lg">Información</p>
              <Link href={''}>Puerto Iguazu, Argentina</Link>
              <Link href={''}>turismo@argentin.com.ar</Link>
              <Link href={''}>+54 685 245-7633</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

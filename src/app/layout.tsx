import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaSearch,
  FaShoppingBag
} from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa6'
import logo from '../assets/Conquista-tu-Mundo-Logo-NUEVO-1.png'
import Image from 'next/image'
import Link from 'next/link'

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
        <header className="flex px-12 py-3">
          <div className="social-contact flex w-full gap-8 text-xl bg-black">
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
      </body>
    </html>
  )
}

import { Button } from '@/components/ui/button'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CiSearch } from 'react-icons/ci'
import { FaFacebook, FaInstagram, FaPhoneAlt } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa6'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import logo from '../assets/Conquista-tu-Mundo-Logo-NUEVO-1.png'
import './globals.css'

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
      <body className={` font-inter antialiased`}>
        {/* CONTACT HEADER */}
        <header className="flex px-12 py-4 bg-black text-white">
          <div className="social-contact flex w-full gap-8 font-robotoMono  text-base">
            <div className="phone flex items-center gap-4 items-center  justify-center cursor-pointer ">
              <FaPhoneAlt fontSize={20} />
              <span>Hablar con un ejecutivo </span>
            </div>
            <div className="whatsapp flex items-center gap-4 items-center justify-center  cursor-pointer">
              <FaWhatsapp fontSize={28} />
              <span>Envíanos un mesaje</span>
            </div>
          </div>
          <div className="social-media flex items-center gap-6">
            <FaFacebook fontSize={28} />
            <FaInstagram fontSize={28} />
          </div>
        </header>
        <nav className="bg-white text-black flex px-12 py-3 justify-between items-center">
          <Link href={'/'}>
            <Image src={logo} alt="" className="w-40 h-20 object-contain" />
          </Link>
          <div className="flex gap-12 text-gray-500 text-xl font-light ">
            <Link className="hover:underline" href={''}>
              Nacional
            </Link>
            <Link className="hover:underline" href={''}>
              Internacional
            </Link>
            <Link className="hover:underline" href={''}>
              Quiénes Somos
            </Link>
          </div>
          <div className="action-buttons flex gap-4">
            <CiSearch className="text-4xl" />
            <HiOutlineShoppingBag className="text-4xl" />
          </div>
        </nav>
        {children}
        <footer className="flex px-12 gap-4 py-8 flex-col bg-slate-900 font-inter">
          <div className="content flex justify-between ">
            <div className="logo flex-wrap">
              <Image alt="" src={logo} />
            </div>
            <div className="col-2  text-white flex flex-col gap-4">
              <h2 className=" text-cyan-400 font-semibold font-robotoMono text-lg mb-2">
                Hablar con un ejecutivo
              </h2>
              <Button className="flex gap-4 bg-green-500" variant={'default'}>
                <FaWhatsapp fontSize={28} />
                Enviar un mensaje
              </Button>
            </div>
            <div className="col-2  text-white flex flex-col gap-4">
              {/* <p className="text-emerald-500 font-bold text-lg">Políticas</p> */}
              <h2 className=" text-cyan-400 font-semibold font-robotoMono text-lg mb-2">
              Políticas
              </h2>
              <Link href={''}>Terminos y Condiciones</Link>
              <Link href={''}>Devolucion, anulacion y cambio</Link>
              <Link href={''}>Bases del Concurso Vive Iguazú</Link>
            </div>
            <div className="col-3 text-white flex flex-col gap-4">
              {/* <p className="text-emerald-500 font-bold text-lg">Información</p> */}
              <h2 className=" text-cyan-400 font-semibold font-robotoMono text-lg mb-2">
              Información
              </h2>
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

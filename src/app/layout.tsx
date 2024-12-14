import Navbar from "@/components/nav/navbar";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import logo from "../assets/Conquista-tu-Mundo-Logo-NUEVO-1.png";
import "./globals.css";

export const metadata: Metadata = {
  title: "Turismo Argentina",
  description: "Created by Gabriel Eduardo Brambilla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-inter antialiased`}>
        {/* CONTACT HEADER */}
        <header className="hidden bg-black px-12 py-4 text-white md:flex">
          <div className="social-contact flex w-full gap-8 font-robotoMono text-base">
            <div className="phone flex cursor-pointer items-center justify-center gap-4">
              <FaPhoneAlt fontSize={20} />
              <span>Hablar con un ejecutivo </span>
            </div>
            <div className="whatsapp flex cursor-pointer items-center justify-center gap-4">
              <FaWhatsapp fontSize={28} />
              <span>Envíanos un mesaje</span>
            </div>
          </div>
          <div className="social-media flex items-center gap-6">
            <Link
              target="_blank"
              href={"https://www.instagram.com/conquistatumundoevt/"}
            >
              <FaFacebook fontSize={28} />
            </Link>
            <Link
              target="_blank"
              href={"https://www.instagram.com/conquistatumundoevt/"}
            >
              <FaInstagram fontSize={28} />
            </Link>
          </div>
        </header>
        <Navbar />
        {children}
        <footer className="flex flex-col items-center justify-center gap-4 bg-slate-900 px-12 py-8 font-inter md:items-stretch">
          <div className="content grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <div className="logo row-span-4 flex-wrap self-center">
              <Image alt="" src={logo} />
            </div>
            <div className="col-2 flex flex-col gap-4 text-white">
              <h2 className="mb-2 font-robotoMono text-lg font-semibold text-gray-100">
                Hablar con un ejecutivo
              </h2>
              <Button
                className="flex max-w-max gap-4 bg-green-500"
                variant={"default"}
              >
                <FaWhatsapp fontSize={28} />
                Enviar un mensaje
              </Button>
            </div>
            <div className="col-2 flex flex-col gap-4 text-white">
              {/* <p className="text-emerald-500 font-bold text-lg">Políticas</p> */}
              <h2 className="mb-2 font-robotoMono text-lg font-semibold text-gray-100">
                Políticas
              </h2>
              <Link className="text-gray-300" href={""}>
                Terminos y Condiciones
              </Link>
              <Link className="text-gray-300" href={""}>
                Devolucion, anulacion y cambio
              </Link>
              <Link className="text-gray-300" href={""}>
                Bases del Concurso Vive Iguazú
              </Link>
            </div>
            <div className="col-3 flex flex-col gap-4 text-white">
              {/* <p className="text-emerald-500 font-bold text-lg">Información</p> */}
              <h2 className="mb-2 font-robotoMono text-lg font-semibold text-gray-100">
                Información
              </h2>
              <Link className="text-gray-300" href={""}>
                Puerto Iguazu, Argentina
              </Link>
              <Link className="text-gray-300" href={""}>
                turismo@argentin.com.ar
              </Link>
              <Link className="text-gray-300" href={""}>
                +54 685 245-7633
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

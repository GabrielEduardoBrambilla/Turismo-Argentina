"use client";

import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import logo from "../../assets/Conquista-tu-Mundo-Logo-NUEVO-1.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-12 py-3 text-black">
      <Link href={"/"}>
        <Image src={logo} alt="" className="h-20 w-40 object-contain" />
      </Link>
      <div className="hidden gap-12 text-xl font-light text-gray-500 md:flex">
        <Link className="hover:underline" href={""}>
          Nacional
        </Link>
        <Link className="hover:underline" href={""}>
          Internacional
        </Link>
        <Link className="hover:underline" href={""}>
          Quiénes Somos
        </Link>
      </div>
      <div className="hamburguer-menu md:hidden">
        <Hamburger />
      </div>

      <div className="action-buttons hidden gap-4 md:flex">
        <CiSearch className="text-4xl" />
        <HiOutlineShoppingBag className="text-4xl" />
      </div>
    </nav>
  );
}

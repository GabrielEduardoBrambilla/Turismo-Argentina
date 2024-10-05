"use client";

import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import logo from "../../assets/Conquista-tu-Mundo-Logo-NUEVO-1.png";

export default function Navbar() {
  const [toggleSideMenu, setToggleSideMenu] = useState(false);
  return (
    <nav className="relative flex w-full items-center justify-between overflow-x-clip bg-white px-12 py-3 text-black">
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
      <div className="hamburguer-menu overflow-hidden md:hidden">
        <Hamburger toggled={toggleSideMenu} toggle={setToggleSideMenu} />
      </div>
      <ul
        className={`absolute left-0 top-24 z-30 flex h-screen w-screen transform flex-col items-center gap-8 bg-white p-8 pt-9 transition-transform duration-300 ease-in-out md:hidden ${
          toggleSideMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link href="#">
          <li>Teste</li>
        </Link>
        <Link href="#">
          <li>Teste</li>
        </Link>
        <Link href="#">
          <li>Teste</li>
        </Link>
        <Link href="#">
          <li>Teste</li>
        </Link>
        <Link href="#">
          <li>Teste</li>
        </Link>
        <Link href="#">
          <li>Teste</li>
        </Link>
      </ul>

      <div className="action-buttons hidden gap-4 md:flex">
        <CiSearch className="text-4xl" />
        <HiOutlineShoppingBag className="text-4xl" />
      </div>
    </nav>
  );
}

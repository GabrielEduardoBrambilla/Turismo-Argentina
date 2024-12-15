"use client";

import img2 from "@/assets/imgs/cataratas-argentinas/WhatsApp Image 2024-11-15 at 18.31.50.jpeg";
import { default as cataratasNotche } from "@/assets/imgs/cataratas-brasileiras/WhatsApp Image 2024-11-15 at 18.28.42 (2).jpeg";

import cataratasBrasil from "@/assets/imgs/cataratas-brasileiras/b2bf6a03-0e14-4e61-a7a9-260000f2d992.jpeg";
import cataratasBrasilAmanecer from "@/assets/imgs/cataratas-brasileiras/WhatsApp Image 2024-11-15 at 18.28.42.jpeg";
import comprasCDE from "@/assets/imgs/compras-cde/Compras-no-Paraguai.webp";
import dreamPark from "@/assets/imgs/dreams-park/Dreams-Park-Show-1024x683.png";

import CardList from "@/components/trip-plans";

const tours = [
  {
    link: "./viajens/cataratas/amanecer",
    name: "Cataratas Amanecer",
    duration: "1:00 hora",
    price: "210 reales",
    image: cataratasBrasilAmanecer,
    international: true,
  },
  {
    link: "./viajens/cataratas/brasil",
    name: "Cataratas Brasil",
    duration: "4:30 horas",
    price: "42,000",
    image: cataratasBrasil,
    international: true,
  },
  {
    link: "./viajens/cataratas/notche",
    name: "Cataratas Notche",
    duration: "3:00 horas",
    price: "265 Reales",
    image: cataratasNotche,
    international: true,
  },
  {
    link: "./viajens/cataratas/puesta-del-sol",
    name: "Cataratas Puesta del sol",
    duration: "2:00 horas",
    price: "180 reales",
    image: img2,
    international: true,
  },
  {
    link: "./viajens/compras-cde",
    name: "Compras Ciudade del Lest",
    duration: "2:30 horas",
    price: "33,900",
    image: comprasCDE,
    international: true,
  },
  {
    link: "./viajens/dream-park",
    name: "Dream Park",
    duration: "Por 5 atractivos",
    price: "119 reales",
    image: dreamPark,
    international: true,
  },

  // Add other tour objects as needed
];
export default function TripPage() {
  return (
    <>
      <CardList
        title={"Conece nuestros tours Internacionales"}
        tours={tours}
        showAll
      />
      <div className="m-20"></div>
    </>
  );
}

"use client";

import img2 from "@/assets/imgs/cataratas-argentinas/WhatsApp Image 2024-11-15 at 18.31.50.jpeg";
import { default as cataratasNotche } from "@/assets/imgs/cataratas-brasileiras/WhatsApp Image 2024-11-15 at 18.28.42 (2).jpeg";

import cataratasBrasil from "@/assets/imgs/cataratas-brasileiras/b2bf6a03-0e14-4e61-a7a9-260000f2d992.jpeg";
import cataratasBrasilAmanecer from "@/assets/imgs/cataratas-brasileiras/WhatsApp Image 2024-11-15 at 18.28.42.jpeg";
import comprasCDE from "@/assets/imgs/compras-cde/Compras-no-Paraguai.webp";
import dreamPark from "@/assets/imgs/dreams-park/Dreams-Park-Show-1024x683.png";

import CardList from "@/components/trip-plans";

import blueParkCard from "@/assets/imgs/blue-park/card.png";
import helisulCard from "@/assets/imgs/helisul/card.jpg";
import kayakCard from "@/assets/imgs/kayak/card.jpg";
import macucoSafariCard from "@/assets/imgs/macuco-safari/card.jpg";
import macucoSelva from "@/assets/imgs/macuco-selva/card.jpg";
import movieCarCard from "@/assets/imgs/movie-car/card.jpg";
import paraquedismoCard from "@/assets/imgs/paraquedismo-fly/card.jpg";
import rafainCena from "@/assets/imgs/rafain-cena-show/img2.jpg";
import rafainAlmoco from "@/assets/imgs/rafain-cena-show/img3.jpg";
import raftingCard from "@/assets/imgs/rafting/card.jpg";
import secretFalls from "@/assets/imgs/secret-falls-media/card.jpg";
//import placeholder from "@/assets/placeholder.jpg";

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
  {
    link: "./viajens/rafain-cena-show",
    name: "Rafain cena Show",
    duration: "2:00 horas",
    price: "259 reales",
    image: rafainCena,
    international: true,
  },
  {
    link: "./viajens/almuerzo-rafain",
    name: "Almuerzo en Rafain",
    duration: "2:00 horas",
    price: "119 reales",
    image: rafainAlmoco,
    international: true,
  },
  {
    link: "./viajens/macuco-safari",
    name: "Macuco Safari",
    duration: "Tarde toda",
    price: "389 reales",
    image: macucoSafariCard,
    international: true,
  },
  {
    link: "./viajens/rafting",
    name: "Rafting",
    duration: "rafting",
    price: "220 reales",
    image: raftingCard,
    international: true,
  },
  {
    link: "./viajens/macucuo-selva",
    name: "Macuco Selva",
    duration: "6:00 horas",
    price: "193 reales",
    image: macucoSelva,
    international: true,
  },
  {
    link: "./viajens/helisul",
    name: "Helisul",
    duration: "10 minutos",
    price: "635 reales",
    image: helisulCard,
    international: true,
  },
  {
    link: "./viajens/secretfalls-completa",
    name: "Iguassu Secret Falls - Completa",
    duration: "Dia todo",
    price: "300 reales",
    image: secretFalls,
    international: true,
  },
  {
    link: "./viajens/secretfalls-media",
    name: "Iguassu Secret Falls - Media Jornada",
    duration: "4:00 horas",
    price: "200 reales",
    image: secretFalls,
    international: true,
  },
  {
    link: "./viajens/blue-park",
    name: "Blue Park ",
    duration: "Dia todo",
    price: "220 reales adultos",
    image: blueParkCard,
    international: true,
  },
  {
    link: "./viajens/movie-car",
    name: "Movie Cars",
    duration: "2:00 horas",
    price: "80 reales",
    image: movieCarCard,
    international: true,
  },
  {
    link: "./viajens/fly-foz",
    name: "Paraquedismo Fly Foz",
    duration: "Dia",
    price: "1.290 reales Salto SELFIE",
    image: paraquedismoCard,
    international: true,
  },
  {
    link: "./viajens/kayak-guiado",
    name: "Excursão Guiada Kayak",
    duration: "Dia",
    price: "34,500",
    image: kayakCard,
    international: true,
  },
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

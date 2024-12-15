"use client";

import imgAldea from "@/assets/imgs/aldea-frtin-mborore/img4.jpeg";
import img2 from "@/assets/imgs/cataratas-argentinas/WhatsApp Image 2024-11-15 at 18.31.50.jpeg";
import imgWand from "@/assets/imgs/wanda/WhatsApp Image 2024-11-15 at 18.32.27.jpeg";
import placeholder from "@/assets/placeholder.jpg";
import CardList from "@/components/trip-plans";

const tours = [
  {
    link: "./viajens/cataratas/argentina",
    name: "Cataratas Argentina",
    duration: "4 horas",
    price: "20,400",
    image: img2,
  },
  {
    link: "./viajens/minas-wanda",
    name: "Minas Wanda",
    duration: "4 horas",
    price: "19,200",
    image: imgWand,
  },
  {
    link: "./viajens/aldea-guarani",
    name: "Aldea Guarani",
    duration: "2:30 horas",
    price: "44,400",
    image: imgAldea,
  },
  {
    link: "./viajens/travesia-iguazu",
    name: "Travesia Iguazu",
    duration: "2:00 horas",
    price: "35,000",
    image: placeholder,
  },
  {
    link: "./viajens/almuerzo-fortin-cataratas",
    name: "Almuerzo en fortin Cataratas",
    duration: "Almuerzo",
    price: "30,600 reales",
    image: placeholder,
  },
  {
    link: "./viajens/saltos-de-mocona",
    name: "Saltos del mocona",
    duration: "Dia",
    price: "73,800",
    image: placeholder,
  },
  {
    link: "./viajens/jungle-fly",
    name: "Jungle Fly",
    duration: "Dia",
    price: "40,000",
    image: placeholder,
  },
  {
    link: "./viajens/crucero-iguazu",
    name: "Cruceros Iguazu ",
    duration: "Tarde - jantar",
    price: "22,000 adultos",
    image: placeholder,
  },
  {
    link: "./viajens/paseo-ecologico",
    name: "Paseo Ecologico",
    duration: "Tarde",
    price: "25,000 adultos",
    image: placeholder,
  },
  {
    link: "./viajens/cicloturismo",
    name: "Cicloturismo",
    duration: "3:00 horas",
    price: "32,500",
    image: placeholder,
  },
];

export default function TripPage() {
  return (
    <>
      <CardList
        title={"Conece nuestros tours Nacionales"}
        tours={tours}
        showAll
      />
      <div className="m-20"></div>
    </>
  );
}

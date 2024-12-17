"use client";

import imgAldea from "@/assets/imgs/aldea-frtin-mborore/img4.jpeg";
import img2 from "@/assets/imgs/cataratas-argentinas/WhatsApp Image 2024-11-15 at 18.31.50.jpeg";
import imgWand from "@/assets/imgs/wanda/WhatsApp Image 2024-11-15 at 18.32.27.jpeg";
//import placeholder from "@/assets/placeholder.jpg";
import CardList from "@/components/trip-plans";

import cicloturismoCard from "@/assets/imgs/cicloturismo/foz-ciclismo-1.jpg";
import cruceroCard from "@/assets/imgs/crucero-iguazu/card.jpg";
import fortinCataratas from "@/assets/imgs/fortin-cataratas/caption.jpg";
import jungleFlyCard from "@/assets/imgs/jungle-fly/card.jpg";
import passeoEcoCard from "@/assets/imgs/passeo-ecologico/card.jpg";
import moconaCard from "@/assets/imgs/salto-mocona/card.jpeg";
import travesiaCard from "@/assets/imgs/Zpublicity/56dceac7-0d28-4f81-a2dc-1fe3276591d4.jpeg";
//import placeholder from "@/assets/placeholder.jpg";

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
    image: travesiaCard,
  },
  {
    link: "./viajens/almuerzo-fortin-cataratas",
    name: "Almuerzo en fortin Cataratas",
    duration: "Almuerzo",
    price: "30,600 reales",
    image: fortinCataratas,
  },
  {
    link: "./viajens/cicloturismo",
    name: "Cicloturismo",
    duration: "3:00 horas",
    price: "32,500",
    image: cicloturismoCard,
  },
  {
    link: "./viajens/saltos-de-mocona",
    name: "Saltos del mocona",
    duration: "Dia",
    price: "73,800",
    image: moconaCard,
  },
  {
    link: "./viajens/jungle-fly",
    name: "Jungle Fly",
    duration: "Dia",
    price: "40,000",
    image: jungleFlyCard,
  },
  {
    link: "./viajens/crucero-iguazu",
    name: "Cruceros Iguazu ",
    duration: "Tarde - jantar",
    price: "22,000 adultos",
    image: cruceroCard,
  },
  {
    link: "./viajens/paseo-ecologico",
    name: "Paseo Ecologico",
    duration: "Tarde",
    price: "25,000 adultos",
    image: passeoEcoCard,
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

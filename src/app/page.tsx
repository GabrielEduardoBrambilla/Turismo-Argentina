"use client";

import CustomerReviewNOTFAKE from "@/components/customer-review";
import Featured from "@/components/featured";
import HeroSectionImageWithReviews from "@/components/hero-section";
import TripOption from "@/components/trip-options";
import CardList from "@/components/trip-plans";

import imgAldea from "@/assets/imgs/aldea-frtin-mborore/img4.jpeg";
import blueParkCard from "@/assets/imgs/blue-park/card.png";
import img2 from "@/assets/imgs/cataratas-argentinas/WhatsApp Image 2024-11-15 at 18.31.50.jpeg";
import cataratasBrasil from "@/assets/imgs/cataratas-brasileiras/b2bf6a03-0e14-4e61-a7a9-260000f2d992.jpeg";
import {
  default as cataratasNotche,
  default as img3,
} from "@/assets/imgs/cataratas-brasileiras/WhatsApp Image 2024-11-15 at 18.28.42 (2).jpeg";
import cataratasBrasilAmanecer from "@/assets/imgs/cataratas-brasileiras/WhatsApp Image 2024-11-15 at 18.28.42.jpeg";
import cicloturismoCard from "@/assets/imgs/cicloturismo/foz-ciclismo-1.jpg";
import comprasCDE from "@/assets/imgs/compras-cde/Compras-no-Paraguai.webp";
import cruceroCard from "@/assets/imgs/crucero-iguazu/card.jpg";
import dreamPark from "@/assets/imgs/dreams-park/Dreams-Park-Show-1024x683.png";
import fortinCataratas from "@/assets/imgs/fortin-cataratas/caption.jpg";
import helisulCard from "@/assets/imgs/helisul/card.jpg";
import jungleFlyCard from "@/assets/imgs/jungle-fly/card.jpg";
import kayakCard from "@/assets/imgs/kayak/card.jpg";
import macucoSafariCard from "@/assets/imgs/macuco-safari/card.jpg";
import macucoSelva from "@/assets/imgs/macuco-selva/card.jpg";
import movieCarCard from "@/assets/imgs/movie-car/card.jpg";
import paraquedismoCard from "@/assets/imgs/paraquedismo-fly/card.jpg";
import passeoEcoCard from "@/assets/imgs/passeo-ecologico/card.jpg";
import rafainCena from "@/assets/imgs/rafain-cena-show/img2.jpg";
import rafainAlmoco from "@/assets/imgs/rafain-cena-show/img3.jpg";
import raftingCard from "@/assets/imgs/rafting/card.jpg";
import { default as img1 } from "@/assets/imgs/ruinas de san ignacio/WhatsApp Image 2024-11-15 at 18.39.26 (2).jpeg";
import moconaCard from "@/assets/imgs/salto-mocona/card.jpeg";
import secretFalls from "@/assets/imgs/secret-falls-media/card.jpg";
import imgWand from "@/assets/imgs/wanda/WhatsApp Image 2024-11-15 at 18.32.27.jpeg";
import travesiaCard from "@/assets/imgs/Zpublicity/56dceac7-0d28-4f81-a2dc-1fe3276591d4.jpeg";
//import placeholder from "@/assets/placeholder.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Marquee from "react-fast-marquee";
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
    link: "./viajens/cicloturismo",
    name: "Cicloturismo",
    duration: "3:00 horas",
    price: "32,500",
    image: cicloturismoCard,
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
  {
    link: "./viajens/kayak-guiado",
    name: "Excursão Guiada Kayak",
    duration: "Dia",
    price: "34,500",
    image: kayakCard,
    international: true,
  },
];

export default function page() {
  return (
    <>
      <div className="Carosel relative w-full bg-blue-500">
        <Carousel
          orientation="horizontal"
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          opts={{
            loop: true,
          }}
          className="z-10 lg:min-h-[65vh]"
        >
          <CarouselContent className="flex h-[65vh] object-cover">
            <CarouselItem className="flex justify-items-center">
              <Image
                alt=""
                src={img2}
                className="w-full rounded-b-[90px] object-cover"
              />
            </CarouselItem>
            <CarouselItem className="flex justify-items-center">
              <Image
                alt=""
                src={img1}
                className="w-full rounded-b-[90px] object-cover"
              />
            </CarouselItem>
            <CarouselItem className="flex justify-items-center">
              <Image
                alt=""
                src={img3}
                className="w-full rounded-b-[90px] object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          <div className="absolute bottom-4 left-full z-10 -mx-16 my-6 flex -translate-x-full gap-4">
            <CarouselPrevious className="bottom-0 right-12 z-10" />
            <CarouselNext className="-bottom-10 right-0" />
          </div>
        </Carousel>
        <Marquee
          className="flex h-16 gap-4 font-robotoMono text-lg text-white"
          pauseOnHover
          speed={60}
        >
          <p>
            ¡Ven a viajar con nosotros y descubre los destinos más increíbles!
            Nuestra agencia te ofrece experiencias únicas y personalizadas para
            que disfrutes al máximo cada momento.
          </p>
          <span className="mx-4">
            Explora paisajes inolvidables, vive aventuras emocionantes y
            relájate en entornos paradisíacos. Nos encargamos de todo para que
            solo tengas que disfrutar.
          </span>
          <p>
            Déjate sorprender por la belleza de cada destino. Con nuestra
            atención personalizada y experiencia, garantizamos que cada viaje
            será una experiencia inolvidable. ¡Tu próxima aventura comienza
            aquí!
          </p>
        </Marquee>
      </div>
      <section className="px-4 md:w-screen lg:flex lg:w-full lg:justify-center">
        <HeroSectionImageWithReviews />
      </section>
      <TripOption />

      <CardList tours={tours} />
      <Featured />
      <CustomerReviewNOTFAKE />
    </>
  );
}

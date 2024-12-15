"use client";

import CustomerReviewNOTFAKE from "@/components/customer-review";
import Featured from "@/components/featured";
import HeroSectionImageWithReviews from "@/components/hero-section";
import TripOption from "@/components/trip-options";
import CardList from "@/components/trip-plans";

import imgAldea from "@/assets/imgs/aldea-frtin-mborore/img4.jpeg";
import img2 from "@/assets/imgs/cataratas-argentinas/WhatsApp Image 2024-11-15 at 18.31.50.jpeg";
import {
  default as cataratasNotche,
  default as img3,
} from "@/assets/imgs/cataratas-brasileiras/WhatsApp Image 2024-11-15 at 18.28.42 (2).jpeg";
import { default as img1 } from "@/assets/imgs/jungle-fly/WhatsApp Image 2024-11-15 at 18.40.44.jpeg";
import imgWand from "@/assets/imgs/wanda/WhatsApp Image 2024-11-15 at 18.32.27.jpeg";

import cataratasBrasil from "@/assets/imgs/cataratas-brasileiras/b2bf6a03-0e14-4e61-a7a9-260000f2d992.jpeg";
import cataratasBrasilAmanecer from "@/assets/imgs/cataratas-brasileiras/WhatsApp Image 2024-11-15 at 18.28.42.jpeg";
import comprasCDE from "@/assets/imgs/compras-cde/Compras-no-Paraguai.webp";
import dreamPark from "@/assets/imgs/dreams-park/Dreams-Park-Show-1024x683.png";

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
    link: "./viajens/aldea-guarani",
    name: "Aldea Guarani",
    duration: "2:30 horas",
    price: "44,400",
    image: imgAldea,
  },

  {
    link: "./viajens/cataratas-argentina",
    name: "Cataratas Argentina",
    duration: "4 horas",
    price: "20,400",
    image: img2,
  },
  {
    link: "./viajens/aldea-guarani",
    name: "Aldea Guarani",
    duration: "2:30 horas",
    price: "44,400",
    image: imgAldea,
  },
  {
    link: "./viajens/cataratas-argentina",
    name: "Cataratas Argentina",
    duration: "4 horas",
    price: "20,400",
    image: img2,
  },
  {
    link: "./viajens/aldea-guarani",
    name: "Aldea Guarani",
    duration: "2:30 horas",
    price: "44,400",
    image: imgAldea,
  },
  // Add other tour objects as needed
];

export default function page() {
  return (
    <>
      <div className="Carosel p- relative w-full bg-blue-500">
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
          className="z-10"
        >
          <CarouselContent className="flex h-[560px] object-cover">
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            saepe Gabriel
          </p>
          <span className="mx-4">
            Eduardo dolorem repellat maxime nostrum reprehenderit accusantium
            eum Gabriel
          </span>
          <p>
            Eduardo labore illum aperiam iure, minus rerum laboriosam excepturi
            dignissimos quas explicabo consequatur. Voluptatum? Gabriel
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

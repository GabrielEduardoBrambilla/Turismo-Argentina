"use client";

import imgParque from "@/assets/imgs/jonatan-lewczuk-oz537xKtiYA-unsplash.jpg";
import img1 from "@/assets/imgs/publicity/40396e6e-bdb7-45ec-bb06-b00b5236b1d2.jpeg";
import img2 from "@/assets/imgs/publicity/56dceac7-0d28-4f81-a2dc-1fe3276591d4.jpeg";
import img3 from "@/assets/imgs/publicity/c8797558-8c53-46bd-bd22-41a41ddda756.jpeg";
import imgWand from "@/assets/imgs/wanda/Paseo_894165356.jpg";
import Card from "@/components/card";
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
      <section className="px-4 md:w-screen lg:m-auto lg:w-4/5"></section>
      <section className="Planos de viagem px-4 md:w-screen lg:m-auto lg:w-4/5">
        <h2 className="my-8 text-5xl font-bold">Conoce nuestros tours</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <Card
            link="./viajens/minas-wanda"
            duration="4 horas"
            image={imgWand}
            name="Minas Wanda"
            price={"19,200"}
          />
          <Card
            link="./viajens/minas-wanda"
            name="Cataratas Argentina"
            duration="4 horas"
            price="20,400"
            image={img2}
          />
          <Card
            link="./viajens/minas-wanda"
            name="Parque da Aves"
            duration="2 horas"
            price="15,400"
            image={imgParque}
            international
          />

          <Card
            link="./viajens/minas-wanda"
            duration="4 horas"
            image={img3}
            name="Minas Wanda"
            price={"19,200"}
          />
          <Card
            link="./viajens/minas-wanda"
            name="Parque da Aves"
            duration="2 horas"
            price="15,400"
            image={imgParque}
            international
          />
          <Card
            link="./viajens/minas-wanda"
            name="Cataratas Argentina"
            duration="4 horas"
            price="20,400"
            image={img2}
          />
        </div>
      </section>
    </>
  );
}

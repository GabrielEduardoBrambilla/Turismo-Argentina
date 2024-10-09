"use client";

import imgWand from "@/assets/imgs/wanda/Paseo_894165356.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

import img1 from "../assets/imgs/1a50c6f9-c42d-438c-8ca6-6a7ef59e4c16.jpeg";
import img2 from "../assets/imgs/498b328c-bacf-4595-8a10-0fca8cbd6b8a.jpeg";
import img3 from "../assets/imgs/97913c2a-c3c9-462f-b859-b52cf4e42ffb.jpeg";

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
      <section className="Planos de viagem px-4 md:w-screen lg:m-auto lg:w-4/5">
        <h2 className="my-8 text-5xl font-bold">Conoce nuestros tours</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <Link href={"./viajens/first"} about="">
            <div className="card relative flex h-[28rem] content-center items-end justify-items-end overflow-hidden rounded-3xl text-white md:h-[32rem]">
              <Image
                alt=""
                src={imgWand}
                className="absolute top-0 -z-10 h-full object-cover"
              />
              <p className="absolute top-0 m-4 flex flex-wrap content-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-800">
                Nacional
              </p>

              <div className="content flex h-3/5 w-full flex-col flex-wrap justify-center gap-6 rounded-b-lg bg-gradient-to-t from-black to-transparent p-4 md:h-1/2">
                <p className="mt-6 w-fit text-3xl font-bold">Minas Wanda</p>
                <p className="flex w-fit flex-wrap content-center bg-gray-950 p-2 px-6 text-lg">
                  4 horas duracion
                </p>
                <p className="text-lg">
                  Precio <strong>$19.200</strong>
                </p>
              </div>
            </div>
          </Link>

          <p className="absolute top-0 m-4 flex flex-wrap content-center rounded-full bg-yellow-200 px-8 py-4 text-lg font-semibold text-gray-800">
            Internacional
          </p>
        </div>
      </section>
    </>
  );
}

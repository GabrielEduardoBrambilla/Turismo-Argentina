"use client";
import imgMain from "@/assets/imgs/1a50c6f9-c42d-438c-8ca6-6a7ef59e4c16.jpeg";
import insideHotel from "@/assets/imgs/4cdaa2ef-1a31-4b67-9ada-b50611efc842.jpeg";
import insideRoom from "@/assets/imgs/4fd905de-17d3-4453-82d6-f96f717f8b91.jpeg";
import outsideHotel from "@/assets/imgs/e0373644-198a-4ad7-882b-0b36cc9b9792.jpeg";
import outsideHotelCleaner from "@/assets/imgs/f9cc2a5a-c99e-4571-8a77-b2c32b8344b5.jpeg";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function TripPage() {
  return (
    <>
      <section className="Carosel relative mb-16 w-full p-0">
        <Image
          alt=""
          src={imgMain}
          className="flex h-[660px] w-full flex-col rounded-b-[60px] object-cover p-0 drop-shadow-xl"
        />
        <div className="fluctuation-bar absolute -bottom-8 left-1/2 flex w-4/5 -translate-x-1/2 transform justify-between overflow-clip rounded-2xl bg-white drop-shadow-xl">
          <div className="fluctuation-bar flex w-full justify-between rounded-2xl bg-white p-6">
            <div className="">
              <h2>Duracio</h2>
              <p>14 dias y 13 noches</p>
            </div>
            <div className="">
              <h2>Nivel de actividad</h2>
              <p>Light - Moderada</p>
            </div>
            <div className="">
              <h2>Tipo de actividad</h2>
              <p>Familiar - Cultural</p>
            </div>
            <div className="">
              <h2>Tamaño del grupo</h2>
              <p>5 pessoas</p>
            </div>
          </div>

          <label htmlFor="button">
            <Button
              id="button"
              className="h-full w-full rounded-none bg-indigo-600"
            >
              Reservar ahora
            </Button>
          </label>
        </div>
      </section>
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
        className="z-10 md:hidden"
      >
        <CarouselContent className="flex h-[560px] object-cover">
          <CarouselItem className="flex justify-items-center">
            <Image
              alt=""
              src={outsideHotel}
              className="w-full rounded-b-[90px] object-cover"
            />
          </CarouselItem>
          <CarouselItem className="flex justify-items-center">
            <Image
              alt=""
              src={outsideHotel}
              className="w-full rounded-b-[90px] object-cover"
            />
          </CarouselItem>
          <CarouselItem className="flex justify-items-center">
            <Image
              alt=""
              src={outsideHotel}
              className="w-full rounded-b-[90px] object-cover"
            />
          </CarouselItem>
        </CarouselContent>
        <div className="absolute bottom-4 left-full z-10 -mx-16 my-6 flex -translate-x-full gap-4">
          <CarouselPrevious className="bottom-0 right-12 z-10" />
          <CarouselNext className="-bottom-10 right-0" />
        </div>
      </Carousel>
      <div className="mb:w-4/5 hidden md:m-auto md:mb-8 md:grid md:grid-cols-2">
        <div className="image-row grid grid-cols-2 gap-6">
          <div className="img-wrapper col-span-2">
            <Image alt="" className="mb-2 rounded-3xl" src={imgMain} />
          </div>
          {/* <div className="img-wrapper-many flex gap-8"> */}
          <Image
            alt=""
            className="w-ful h-96 rounded-3xl object-cover"
            src={insideRoom}
          />
          <Image
            alt=""
            className="h-96 w-full rounded-3xl object-cover"
            src={insideHotel}
          />
          <Image
            alt=""
            className="h-96 w-full rounded-3xl object-cover"
            src={outsideHotel}
          />
          <Image
            alt=""
            className="h-96 w-full rounded-3xl object-cover"
            src={outsideHotelCleaner}
          />
        </div>
        <div className="content-row bg-red-600"></div>
      </div>
    </>
  );
}

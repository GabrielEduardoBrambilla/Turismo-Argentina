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
import Link from "next/link";

export default function TripPage() {
  return (
    <>
      <section className="Carosel relative mb-60 w-full p-0 md:mb-28">
        <Image
          alt=""
          src={imgMain}
          className="flex h-[660px] w-full flex-col rounded-b-[60px] object-cover p-0 drop-shadow-xl"
        />
        <div className="fluctuation-bar absolute -bottom-48 left-1/2 flex w-4/5 -translate-x-1/2 transform flex-col overflow-clip rounded-2xl bg-white drop-shadow-xl md:-bottom-10 md:flex-row lg:max-w-6xl">
          <div className="fluctuation-bar flex w-full flex-col items-center gap-4 p-6 text-center md:flex-row lg:justify-evenly">
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
      {/* <div className="fluctuation-bar absolute -bottom-8 left-1/2 flex w-4/5 -translate-x-1/2 transform justify-between overflow-clip rounded-2xl bg-white drop-shadow-xl">
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
        </div> */}
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
        className="z-10 lg:hidden"
      >
        <CarouselContent className="flex h-[560px] object-cover p-4">
          <CarouselItem className="flex justify-items-center">
            <Image
              alt=""
              src={outsideHotel}
              className="w-full rounded-lg object-cover"
            />
          </CarouselItem>
          <CarouselItem className="flex justify-items-center">
            <Image
              alt=""
              src={outsideHotel}
              className="w-full rounded-lg object-cover"
            />
          </CarouselItem>
          <CarouselItem className="flex justify-items-center">
            <Image
              alt=""
              src={outsideHotel}
              className="w-full rounded-lg object-cover"
            />
          </CarouselItem>
        </CarouselContent>
        <div className="absolute bottom-4 left-full z-10 -mx-16 my-6 flex -translate-x-full gap-4">
          <CarouselPrevious className="bottom-0 right-12 z-10" />
          <CarouselNext className="-bottom-10 right-0" />
        </div>
      </Carousel>
      <div className="hidden gap-6 md:m-auto md:mb-8 md:w-4/5 md:grid-cols-2 lg:grid">
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
        <div className="content-row bg-red-300">
          <h2 className="text-3xl font-bold">Conoce nuestros tours</h2>
        </div>
      </div>
      <section className="Planos de viagem mx-2 md:mx-8">
        <h2 className="my-8 text-5xl font-bold">Conoce nuestros tours</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <Link href={"./viajens/first"} about="">
            <div className="card relative flex h-[28rem] content-center items-end justify-items-end overflow-hidden rounded-3xl text-white md:h-[32rem]">
              <Image
                alt=""
                src={outsideHotelCleaner}
                className="absolute top-0 -z-10 h-full object-cover"
              />
              <p className="absolute top-0 m-4 flex flex-wrap content-center rounded-full bg-yellow-200 px-8 py-4 text-lg font-semibold text-gray-800">
                Internacional
              </p>

              <div className="content flex h-3/5 w-full flex-col flex-wrap justify-center gap-6 rounded-b-lg bg-gradient-to-t from-black to-transparent p-4 md:h-1/2">
                <p className="mt-6 w-fit text-3xl font-bold">
                  Carretara Austral
                </p>
                <p className="flex w-fit flex-wrap content-center bg-gray-950 p-2 px-6 text-lg">
                  7 dias y 6 noches
                </p>
                <p className="text-lg">
                  desde <strong>$755.000 CLP</strong>
                </p>
              </div>
            </div>
          </Link>
          <Link href={""} about="">
            <div className="card relative flex h-[32rem] content-center items-end justify-items-end overflow-hidden rounded-3xl text-white">
              <Image
                alt=""
                src={outsideHotel}
                className="absolute top-0 -z-10 h-full object-cover"
              />
              <p className="absolute top-0 m-4 flex flex-wrap content-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-800">
                Nacional
              </p>

              <div className="content flex h-1/2 w-full flex-col flex-wrap justify-center gap-6 rounded-b-lg bg-gradient-to-t from-black to-transparent p-4">
                <p className="mt-6 w-fit text-3xl font-bold">
                  Carretara Austral
                </p>
                <p className="flex w-fit flex-wrap content-center bg-gray-950 p-2 px-6 text-lg">
                  7 dias y 6 noches
                </p>
                <p className="text-lg">
                  desde <strong>$755.000 CLP</strong>
                </p>
              </div>
            </div>
          </Link>
          <Link href={""} about="">
            <div className="card relative flex h-[32rem] content-center items-end justify-items-end overflow-hidden rounded-3xl text-white">
              <Image
                alt=""
                src={outsideHotelCleaner}
                className="absolute top-0 -z-10 h-full object-cover"
              />
              <p className="absolute top-0 m-4 flex flex-wrap content-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-800">
                Nacional
              </p>

              <div className="content flex h-1/2 w-full flex-col flex-wrap justify-center gap-6 rounded-b-lg bg-gradient-to-t from-black to-transparent p-4">
                <p className="mt-6 w-fit text-3xl font-bold">
                  Carretara Austral
                </p>
                <p className="flex w-fit flex-wrap content-center bg-gray-950 p-2 px-6 text-lg">
                  7 dias y 6 noches
                </p>
                <p className="text-lg">
                  desde <strong>$755.000 CLP</strong>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

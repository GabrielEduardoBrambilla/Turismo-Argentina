"use client";
import img1 from "@/assets/imgs/wanda/43.jpg";
import img2 from "@/assets/imgs/wanda/Paseo_894165356.jpg";
import img3 from "@/assets/imgs/wanda/images.jpeg";
import img4 from "@/assets/imgs/wanda/minas-de-wanda-1.jpg";
import img5 from "@/assets/imgs/wanda/passeio-minas-de-wanda-argentina-1.webp";

import img10 from "@/assets/imgs/publicity/40396e6e-bdb7-45ec-bb06-b00b5236b1d2.jpeg";
import img20 from "@/assets/imgs/publicity/56dceac7-0d28-4f81-a2dc-1fe3276591d4.jpeg";
import img30 from "@/assets/imgs/publicity/c8797558-8c53-46bd-bd22-41a41ddda756.jpeg";
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
          src={img5}
          className="flex h-[660px] w-full flex-col rounded-b-[60px] object-cover p-0 drop-shadow-xl"
        />
        <div className="fluctuation-bar absolute -bottom-48 left-1/2 flex w-4/5 -translate-x-1/2 transform flex-col overflow-clip rounded-2xl bg-white drop-shadow-xl md:-bottom-10 md:flex-row lg:max-w-6xl">
          <div className="fluctuation-bar flex w-full flex-col items-center gap-4 p-6 text-center md:flex-row lg:justify-evenly">
            <div className="">
              <h2 className="font-bold">Duracion</h2>
              <p>4 horas</p>
            </div>
            <div className="">
              <h2 className="font-bold">Nivel de actividad</h2>
              <p>Light - Moderada</p>
            </div>
            <div className="">
              <h2 className="font-bold">Tamaño del grupo</h2>
              <p>Mínimo 2 personas</p>
            </div>
            <div className="">
              <h2 className="font-bold">Tipo de actividad</h2>
              <p>Familiar - Cultural</p>
            </div>
          </div>

          <label htmlFor="button">
            <Button
              id="button"
              className="text-md h-full w-full rounded-none bg-indigo-600 p-6"
            >
              Reservar ahora
            </Button>
          </label>
        </div>
        <div className="fluctuation-title absolute bottom-52 left-1/2 z-40 -translate-x-1/2 text-center md:bottom-40">
          <h2 className="text-5xl font-bold text-white [text-shadow:_4px_4px_4px_rgba(0,_0,_0,_.5)]">
            Minas de Wanda
          </h2>
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
        className="z-10 lg:hidden"
      >
        <CarouselContent className="flex h-[560px] object-cover p-4">
          <CarouselItem className="flex justify-items-center">
            <Image
              alt=""
              src={img2}
              className="w-full rounded-lg object-cover"
            />
          </CarouselItem>
          <CarouselItem className="flex justify-items-center">
            <Image
              alt=""
              src={img1}
              className="w-full rounded-lg object-cover"
            />
          </CarouselItem>
          <CarouselItem className="flex justify-items-center">
            <Image
              alt=""
              src={img4}
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
        <div className="image-col top-0 grid h-max grid-cols-2 gap-6">
          <div className="img-wrapper col-span-2">
            <Image alt="" className="mb-2 w-full rounded-3xl" src={img1} />
          </div>
          {/* <div className="img-wrapper-many flex gap-8"> */}
          <Image
            alt=""
            className="w-ful h-96 rounded-3xl object-cover"
            src={img2}
          />
          <Image
            alt=""
            className="h-96 w-full rounded-3xl object-cover"
            src={img3}
          />
          <Image
            alt=""
            className="h-96 w-full rounded-3xl object-cover"
            src={img1}
          />
          <Image
            alt=""
            className="h-96 w-full rounded-3xl object-cover"
            src={img4}
          />
        </div>
        <div className="content-col sticky top-0 flex h-max flex-col gap-8 text-lg">
          <div className="">
            <h4 className="text-gray-500">Nacional</h4>
            <h2 className="mb-2 text-3xl font-bold">Minas de Wanda</h2>
            <div className="price flex items-end gap-2">
              <p className="font-light text-gray-500 line-through">$27,000</p>{" "}
              <p className="bold text-xl font-normal text-gray-900">$19,200</p>
            </div>
            <div className="oferta my-1 flex gap-2 text-center text-base">
              <p className="rounded-2xl bg-emerald-300 p-1 px-4 text-gray-600">
                Oferta
              </p>
              <p className="rounded-2xl bg-gray-300 p-1 px-4">27% OFF</p>
            </div>
          </div>
          <div className="">
            <p className="text-lg">
              A 40 kilómetros de Puerto Iguazú se encuentran ubicadas las
              famosas Minas de Wanda, en un yacimiento de piedras semipreciosas
              de cristales de cuarzo, amatistas, ágatas y topacios, que permite
              a sus visitantes apreciar este singular atractivo cielo abierto o
              al `&quot;`natural`&quot;`. Servicio grupal, incluye traslados,
              guía Bilingüe (Español/Inglés) y coordinación permanente. Salidas
              regulares 15hs aprox. por la tarde.
            </p>
          </div>
          <div className="">
            <h2 className="mb-2 text-2xl font-bold">Serviço inclusos</h2>
            <ol className="text-md list-disc px-8">
              <li>Traslados</li>
              <li>Guía Bilingüe</li>
              <li>(Español/Inglés)</li>
              <li>Coordinación permanente</li>
            </ol>
          </div>
          <div className="">
            <p className="mb-2 text-2xl font-bold">Salidas regulares</p>
            <ol className="text-md list-disc px-8">
              <li>15 hrs</li>
            </ol>
          </div>
          <div className="">
            <h2 className="mb-2 text-2xl font-bold">Atencion importante</h2>
            <p className="text-lg">
              Las reservas se concretan una vez hecho el pago. Para reservar con
              un <strong>48HS de anticipacion</strong> antes de las 18:00 horas
            </p>
            <p className="mt-2 text-lg">Antes de las 18:00 horas</p>
          </div>
          <label htmlFor="button">
            <Button
              id="button"
              className="text-md h-full w-full bg-indigo-600 p-6"
            >
              Reservar ahora
            </Button>
          </label>
        </div>
      </div>
      <section className="mx-2 max-w-xl md:m-auto lg:hidden">
        <div className="content-row flex flex-col gap-8 text-lg">
          <div className="">
            <h4 className="text-gray-500">Nacional</h4>
            <h2 className="mb-2 text-3xl font-bold">Minas de Wanda</h2>
            <div className="price flex items-end gap-2">
              <p className="font-light text-gray-500 line-through">$27,000</p>{" "}
              <p className="bold text-xl font-normal text-gray-900">$19,200</p>
            </div>
            <div className="oferta my-1 flex gap-2 text-center text-base">
              <p className="rounded-2xl bg-emerald-300 p-1 px-4 text-gray-600">
                Oferta
              </p>
              <p className="rounded-2xl bg-gray-300 p-1 px-4">27% OFF</p>
            </div>
          </div>
          <div className="">
            <p className="text-lg">
              A 40 kilómetros de Puerto Iguazú se encuentran ubicadas las
              famosas Minas de Wanda, en un yacimiento de piedras semipreciosas
              de cristales de cuarzo, amatistas, ágatas y topacios, que permite
              a sus visitantes apreciar este singular atractivo cielo abierto o
              al `&quot;`natural`&quot;`. Servicio grupal, incluye traslados,
              guía Bilingüe (Español/Inglés) y coordinación permanente. Salidas
              regulares 15hs aprox. por la tarde.
            </p>
          </div>
          <div className="">
            <h2 className="mb-2 text-2xl font-bold">Serviço inclusos</h2>
            <ol className="text-md list-disc px-8">
              <li>Traslados</li>
              <li>Guía Bilingüe</li>
              <li>(Español/Inglés)</li>
              <li>Coordinación permanente</li>
            </ol>
          </div>
          <div className="">
            <p className="mb-2 text-2xl font-bold">Salidas regulares</p>
            <ol className="text-md list-disc px-8">
              <li>15 hrs</li>
            </ol>
          </div>
          <div className="">
            <h2 className="mb-2 text-2xl font-bold">Atencion importante</h2>
            <p className="text-lg">
              Las reservas se concretan una vez hecho el pago. Para reservar con
              un <strong>48HS de anticipacion</strong> antes de las 18:00 horas
            </p>
            <p className="mt-2 text-lg">Antes de las 18:00 horas</p>
          </div>
          <label htmlFor="button">
            <Button
              id="button"
              className="text-md h-full w-full bg-indigo-600 p-6"
            >
              Reservar ahora
            </Button>
          </label>
        </div>
      </section>
      <section className="Planos de viagem mx-2 md:mx-8">
        <h2 className="my-8 text-4xl font-bold">Conoce nuestros tours</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <Link href={"./viajens/first"} about="">
            <div className="card relative flex h-[28rem] content-center items-end justify-items-end overflow-hidden rounded-3xl text-white md:h-[32rem]">
              <Image
                alt=""
                src={img30}
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
                src={img20}
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
                src={img10}
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

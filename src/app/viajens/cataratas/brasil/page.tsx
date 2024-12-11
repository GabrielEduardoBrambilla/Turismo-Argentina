"use client";
import { Util } from "@/Util/Util";
import img1 from "@/assets/imgs/wanda/WhatsApp Image 2024-11-15 at 18.32.27.jpeg";
import { FooterCards } from "@/components/footer-cards";

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
import { ReactNode } from "react";

function getRandomImageUrl(width: number, height: number) {
  return `https://picsum.photos/${width}/${height}?random=${Math.random()}`;
}
const imagens = {
  imgBanner: { src: getRandomImageUrl(800, 300), width: 800, height: 300 },
  imgCardMain: { src: getRandomImageUrl(300, 200), width: 300, height: 200 },
  imgCardSecondary: {
    src: getRandomImageUrl(300, 200),
    width: 300,
    height: 200,
  },
  imgCardThird: { src: getRandomImageUrl(300, 200), width: 300, height: 200 },
  imgCardFourth: { src: getRandomImageUrl(300, 200), width: 300, height: 200 },
};

const text = {
  firstSmallTitle: "Internacional",
  MainTitle: "Cataratas Brasileñas",
  priceHigher: "$42,000",
  priceLower: "",
  discountPercent: "",
  description:
    "Servicio grupal con guía Bilingüe (Español/Inglés) y coordinación permanente. Incluye traslado ida y vuelta desde el Hotel. Salidas diarias: 7:30 hs. Regreso 13 hs. No incluye Ingresos.",
  bannerBar: [
    {
      title: "Duración",
      message: "Aprox 8,20/8,40 hs",
    },
    {
      title: "Nivel de actividad",
      message: "",
    },
    {
      title: "Grupo",
      message: "Servicio grupal",
    },
  ],
  infoSection: [
    {
      infoTitle: "Reservas",
      infoMessage:
        "Las reservas se concretan una vez hecho el pago. Para reservar con un 48HS de antelación antes de las 18:00pm",
    },
  ],
  bulletSection: [
    {
      bulletTitle: "Servicio inclusos",
      bulletMessages: [
        {
          content: "Traslados ida y vuelta desde el Hotel",
        },
        {
          content: "Guía Bilingüe (Español/Inglés)",
        },
        {
          content: "Coordinación permanente",
        },
      ],
    },
    {
      bulletTitle: "Salidas regulares",
      bulletMessages: [
        {
          content: "7:30 hs",
        },
      ],
    },
  ],
};

const atencionComponent: ReactNode = (
  <div className="">
    <h2 className="mb-2 text-2xl font-bold">Atencion importante</h2>
    <p className="text-lg">
      Las reservas se concretan una vez hecho el pago. Para reservar con un{" "}
      <strong>48HS de anticipacion</strong> antes de las 18:00 horas
    </p>
    <p className="mt-2 text-lg">Antes de las 18:00 horas</p>
  </div>
);
export default function TripPage() {
  return (
    <>
      <section className="Carosel relative mb-60 w-full p-0 md:mb-28">
        <Image
          alt=""
          src={imagens.imgBanner}
          className="flex h-[660px] w-full flex-col rounded-b-[60px] object-cover p-0 drop-shadow-xl"
        />
        <div className="fluctuation-bar absolute -bottom-48 left-1/2 flex w-4/5 -translate-x-1/2 transform flex-col overflow-clip rounded-2xl bg-white drop-shadow-xl md:-bottom-10 md:flex-row lg:max-w-6xl">
          <div className="fluctuation-bar flex w-full flex-col items-center gap-4 p-6 text-center md:flex-row lg:justify-evenly">
            {text.bannerBar.map((item) => {
              return (
                <div className="" key={item.message}>
                  <h2 className="font-bold">{item.title}</h2>
                  <p className="">{item.message}</p>
                </div>
              );
            })}
          </div>

          <Link target="_blank" href={Util.WhatsappLink}>
            <label htmlFor="button">
              <Button
                id="button"
                className="text-md h-full w-full rounded-none bg-indigo-600 p-6"
              >
                Reservar ahora
              </Button>
            </label>
          </Link>
        </div>
        <div className="fluctuation-title absolute bottom-52 left-1/2 z-40 -translate-x-1/2 text-center md:bottom-40">
          <h2 className="text-5xl font-bold text-white [text-shadow:_4px_4px_4px_rgba(0,_0,_0,_.5)]">
            {text.MainTitle}
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
              src={imagens.imgCardMain}
              className="w-full rounded-lg object-cover"
            />
          </CarouselItem>
          <CarouselItem className="flex justify-items-center">
            <Image
              alt=""
              src={imagens.imgCardSecondary}
              className="w-full rounded-lg object-cover"
            />
          </CarouselItem>
          <CarouselItem className="flex justify-items-center">
            <Image
              alt=""
              src={imagens.imgCardThird}
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
            className="h-96 w-full rounded-3xl object-cover"
            src={imagens.imgCardMain}
          />
          <Image
            alt=""
            className="h-96 w-full rounded-3xl object-cover"
            src={imagens.imgCardSecondary}
          />
          <Image
            alt=""
            className="h-96 w-full rounded-3xl object-cover"
            src={imagens.imgCardThird}
          />
          <Image
            alt=""
            className="h-96 w-full rounded-3xl object-cover"
            src={imagens.imgCardFourth}
          />
        </div>
        <div className="Info on desktop content-col sticky top-0 flex h-max min-h-screen flex-col gap-8 text-lg">
          <div className="">
            <h4 className="text-gray-500">{text.firstSmallTitle}</h4>
            <h2 className="mb-2 text-3xl font-bold">{text.MainTitle}</h2>
            <div className="price flex items-end gap-2">
              <p className="font-light text-gray-500 line-through">
                {text.priceHigher}
              </p>{" "}
              <p className="bold text-xl font-normal text-gray-900">
                {text.priceLower}
              </p>
            </div>
            <div className="oferta my-1 flex gap-2 text-center text-base">
              <p className="rounded-2xl bg-emerald-300 p-1 px-4 text-gray-600">
                Oferta
              </p>
              <p className="rounded-2xl bg-gray-300 p-1 px-4">
                {text.discountPercent}
              </p>
            </div>
          </div>
          <div className="">
            <p className="text-lg">{text.description}</p>
          </div>

          {text.infoSection.map((item) => {
            return (
              <>
                {item.infoMessage.length > 0 ? (
                  <div className="" key={item.infoTitle}>
                    <h2 className="mb-2 text-2xl font-bold">
                      {item.infoTitle}
                    </h2>
                    <p className="text-lg">{item.infoMessage}</p>
                  </div>
                ) : (
                  <></>
                )}
              </>
            );
          })}
          {text.bulletSection.map((item) => {
            return (
              <div className="" key={item.bulletTitle}>
                <h2 className="mb-2 text-2xl font-bold">{item.bulletTitle}</h2>
                <p className="text-lg"></p>
                <ol className="text-md list-disc px-8">
                  {item.bulletMessages.map((items) => {
                    return (
                      <>
                        <li>{items.content}</li>
                      </>
                    );
                  })}
                </ol>
              </div>
            );
          })}

          {atencionComponent}
          <Link target="_blank" href={Util.WhatsappLink}>
            <label htmlFor="button">
              <Button
                id="button"
                className="text-md h-full w-full rounded-none bg-indigo-600 p-6"
              >
                Reservar ahora
              </Button>
            </label>
          </Link>
        </div>
      </div>
      <section className="Info on mobile mx-2 max-w-xl md:m-auto lg:hidden">
        <div className="content-row flex flex-col gap-8 text-lg">
          <div className="">
            <h4 className="text-gray-500">{text.firstSmallTitle}</h4>
            <h2 className="mb-2 text-3xl font-bold">{text.MainTitle}</h2>
            <div className="price flex items-end gap-2">
              <p className="font-light text-gray-500 line-through">
                {text.priceHigher}
              </p>{" "}
              <p className="bold text-xl font-normal text-gray-900">
                {text.priceLower}
              </p>
            </div>
            <div className="oferta my-1 flex gap-2 text-center text-base">
              <p className="rounded-2xl bg-emerald-300 p-1 px-4 text-gray-600">
                Oferta
              </p>
              <p className="rounded-2xl bg-gray-300 p-1 px-4">
                {text.discountPercent}
              </p>
            </div>
          </div>
          <div className="">
            <p className="text-lg">{text.description}</p>
          </div>
          {text.infoSection.map((item) => {
            return (
              <div className="" key={item.infoTitle}>
                <h2 className="mb-2 text-2xl font-bold">{item.infoTitle}</h2>
                <p className="text-lg">{item.infoMessage}</p>
              </div>
            );
          })}
          {text.bulletSection.map((item) => {
            return (
              <div className="" key={item.bulletTitle}>
                <h2 className="mb-2 text-2xl font-bold">{item.bulletTitle}</h2>
                <p className="text-lg"></p>
                <ol className="text-md list-disc px-8">
                  {item.bulletMessages.map((items) => {
                    return (
                      <>
                        <li>{items.content}</li>
                      </>
                    );
                  })}
                </ol>
              </div>
            );
          })}

          {atencionComponent}
          <Link target="_blank" href={Util.WhatsappLink}>
            <label htmlFor="button">
              <Button
                id="button"
                className="text-md h-full w-full rounded-none bg-indigo-600 p-6"
              >
                Reservar ahora
              </Button>
            </label>
          </Link>
        </div>
      </section>
      <FooterCards />
    </>
  );
}

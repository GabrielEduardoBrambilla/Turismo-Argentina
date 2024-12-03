"use client";
import { FooterCards } from "@/components/footer-cards";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselMainBanner from "@/components/viajens-components/CarouselMainBanner";
import TripInfo from "@/components/viajens-components/info-section";
import TripInfoMobile from "@/components/viajens-components/info-section-mobile";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ReactNode } from "react";

// const imagens = {
//   imgBanner: img1,
//   imgCardMain: img3,
//   imgCardSecondary: img4,
//   imgCardThird: img1,
//   imgCardFourth: img2,
// };

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
  firstSmallTitle: "Regular",
  mainTitle: "Cataratas Argentinas",
  priceHigher: "$46.863.0",
  priceLower: "$36.900",
  discountPercent: "27% OFF",
  description:
    "Servicio grupal con guía Bilingüe (Español/Inglés) y coordinación permanente. Recorrido por los 3 circuitos principales del Parque Nacional Iguazú: circuito superior, inferior y garganta del Diablo. Incluye traslado ida y vuelta desde el Hotel. Salidas diarias 7:30 hs. Regreso 15 hs aproximadamente. No incluye Ingresos.",
  bannerBar: [
    {
      title: "Salida",
      message: "7:30 hs",
    },
    {
      title: "Duración",
      message: "Aprox 7,20/7,50 hs",
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
      <CarouselMainBanner
        imgBanner={imagens.imgBanner}
        bannerBar={text.bannerBar}
        mainTitle={text.mainTitle}
      />
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
      <TripInfo
        imagens={imagens}
        text={text}
        atencionComponent={atencionComponent}
      />
      <TripInfoMobile text={text} atencionComponent={atencionComponent} />
      <FooterCards />
    </>
  );
}

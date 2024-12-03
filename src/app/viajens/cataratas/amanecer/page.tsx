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
  firstSmallTitle: "",
  mainTitle: "Amanecer en Cataratas",
  priceHigher: "266.7",
  priceLower: "210",
  discountPercent: "27% OFF",
  description:
    "El amanecer en las Cataratas comienza en el Centro de Visitantes del Parque Nacional de Iguazú, con embarque en transporte interno. El recorrido comienza en el inicio del Sendero Cataratas y finaliza en el Restaurante Porto Canoas, con desayuno servido de 7:30 a 9:30 horas. También existe la oportunidad de comenzar la aventura en el Espacio Naipi, con acceso directo al ascensor. El tramo hasta Pasarela de las Cataratas, donde se encuentra la Garganta del Diablo, una de las cataratas más sorprendentes, de 80 metros de altura, se recorre mediante ascensores panorámicos. ¡Una de las vistas más privilegiadas de las Cataratas del Iguazú en un momento mágico al amanecer!",
  bannerBar: [
    {
      title: "Horario de acceso",
      message: "De 6:30 a 7:00 horas.",
    },
    {
      title: "Desayuno",
      message: "En Restaurante Porto Canoas: de 7:30 a 9:30 horas.",
    },
    {
      title: "Regreso",
      message: "A partir de las 8:00 am.",
    },
  ],
  infoSection: [
    {
      infoTitle: "Disponibilidad",
      infoMessage:
        "Los días Martes, Jueves y Sábados. Las plazas son limitadas.",
    },
    {
      infoTitle: "Validez del boleto",
      infoMessage:
        "Hasta el final de las actividades turísticas a las 5:30 pm.",
    },
    {
      infoTitle: "Condiciones",
      infoMessage:
        "El recorrido se realizará independientemente de las condiciones climáticas. NO INCLUYE TRASLADO DESDE HOTEL HASTA PARQUE NACIONAL IGUAZU LADO BRASILEÑO.",
    },
  ],
  bulletSection: [
    {
      bulletTitle: "Servicios incluidos",
      bulletMessages: [
        {
          content: "Transporte interno desde el Centro de Visitantes.",
        },
        {
          content: "Desayuno en Restaurante Porto Canoas.",
        },
        {
          content: "Acceso al Espacio Naipi y Pasarela de las Cataratas.",
        },
        {
          content: "Vista a la Garganta del Diablo con ascensores panorámicos.",
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

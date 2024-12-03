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
  mainTitle: "PUESTA DEL SOL EN CATARATAS",
  priceHigher: "R$228.60", // R$180 + 27%
  priceLower: "R$180",
  discountPercent: "27% OFF",
  description:
    "El tour Atardecer en las Cataratas comienza en el Centro de Visitantes del parque, con recogida a las 16:00 y 16:30, llevando a los visitantes al primer mirador, frente al Hotel das Cataratas. Los visitantes pueden optar por desembarcar directamente en el Espaco Naipi, donde se encuentran los ascensores que conducen a la pasarela, con una vista privilegiada de la imponente Garganta del Diablo, sin necesidad de recorrer el sendero. También en el Espaco Naipi, encima de los ascensores, las personas serán recibidas con música en vivo y un brindis de bienvenida con opciones de vino espumoso, agua y jugo, ya incluidos en el precio de la entrada. El transporte de regreso del tour está programado para partir puntualmente a las 6:30 p. m., directamente desde Espacgo Porto Canoas.",
  bannerBar: [
    {
      title: "Duración",
      message: "16:00 a 18:30 (aproximadamente)",
    },
    {
      title: "Días disponibles",
      message: "Martes, Viernes, Sábados",
    },
  ],
  infoSection: [
    {
      infoTitle: "Condiciones",
      infoMessage:
        "Niños hasta 6 años no pagan; el recorrido se realizará independientemente de las condiciones climáticas.",
    },
    {
      infoTitle: "Entrada válida",
      infoMessage:
        "El boleto Sunset también es válido para ingresar durante el horario normal de apertura del parque.",
    },
  ],
  bulletSection: [
    {
      bulletTitle: "Información adicional",
      bulletMessages: [
        {
          content:
            "No incluye traslado desde hotel hasta Parque Nacional Iguazú (lado brasileño).",
        },
        {
          content:
            "La pulsera identificativa del tour debe recogerse en la Oficina de Turismo.",
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

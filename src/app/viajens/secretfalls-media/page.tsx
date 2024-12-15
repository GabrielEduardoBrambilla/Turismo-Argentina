"use client";
import { FooterCards } from "@/components/footer-cards";

import imgPlaceholder from "@/assets/placeholder.jpg";
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
/*
import imgBanner from "@/assets/imgs/aldea-frtin-mborore/img1.jpeg";
import imgCardMain from "@/assets/imgs/aldea-frtin-mborore/img2.jpeg";
import imgCardSecondary from "@/assets/imgs/aldea-frtin-mborore/img3.jpeg";
import imgCardThird from "@/assets/imgs/aldea-frtin-mborore/img4.jpeg";
import imgCardFourth from "@/assets/imgs/aldea-frtin-mborore/img5.jpeg";
*/
const imagens = {
  imgBanner: imgPlaceholder,
  imgCardMain: imgPlaceholder,
  imgCardSecondary: imgPlaceholder,
  imgCardThird: imgPlaceholder,
  imgCardFourth: imgPlaceholder,
};

const text = {
  firstSmallTitle: "",
  mainTitle: "IGUASSU SECRET FALLS MEDIA JORNADA",
  priceHigher: "R$25.40",
  priceLower: "R$20.00",
  discountPercent: "27% OFF",
  description:
    "Hidromasaje natural, cascadas aptas para el baño y conexión con la fauna y flora local. La actividad se puede realizar por la mañana, entre las 8:30 am y las 12:30 pm. En esta modalidad, el aventurero puede visitar hasta 5 cascadas y recorrer dos senderos, el Eremita y el Carimã, cuya distancia aproximada es de 3,5 kilómetros. La aventura tiene un nivel de dificultad fácil/moderado. Quienes elijan el período de la tarde, entre las 13:30 y las 18:00 horas, también pueden visitar hasta 5 cascadas secretas, además de los senderos Onça y Três Irmãs, separados por 4,5 kilómetros, con dificultad fácil/moderada. El paquete incluye transporte desde punto de encuentro (Duty Free Shop), guías bilingües si es necesario, entradas a propiedades privadas y equipo de seguridad. La hora exacta se combina por WhatsApp. No incluye traslados hasta el punto de encuentro.\n\nPrecio REALES (precio en pesos a cotización del día)\n\nR$200",
  bannerBar: [
    { title: "Duración", message: "8:30 AM - 12:30 PM o 1:30 PM - 6:00 PM" },
  ],
  infoSection: [
    {
      infoTitle: "Reservas",
      infoMessage:
        "Transporte, guías bilingües y equipo de seguridad incluidos.",
    },
  ],
  bulletSection: [
    {
      bulletTitle: "Detalles del recorrido",
      bulletMessages: [
        { content: "Visita a hasta 5 cascadas secretas." },
        { content: "Hidromasaje natural y conexión con fauna y flora local." },
        { content: "Senderos: Eremita, Carimã, Onça y Três Irmãs." },
        {
          content: "Distancia total: 3.5 km - 4.5 km dependiendo del horario.",
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

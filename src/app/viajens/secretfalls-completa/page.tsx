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
  mainTitle: "IGUASSU SECRET FALLS JORNADA COMPLETA",
  priceHigher: "",
  priceLower: "",
  discountPercent: "",
  description:
    "Los senderos que conducen a las cascadas secretas brindan una experiencia única y conducen a las cascadas más conservadas de la ciudad, que incluyen hidromasajes naturales y conocimientos geológicos, botánicos e históricos con guías bilingües. La actividad se realiza de 8:30 am a 6:00 pm y es posible hacer hasta 4 senderos en el día, dependiendo del ritmo del grupo: sendero Eremita, Carimã, Onça y Três Irmãs, que suman aproximadamente 8 kilómetros. El paquete incluye transporte desde punto de encuentro (estacionamiento Duty Free Shop), guías bilingües si es necesario, entradas a propiedades privadas y equipo de seguridad. La hora exacta se combina por WhatsApp. Durante la aventura, que tiene un grado moderado, es posible visitar 10 cascadas secretas, todas aptas para el baño. El participante también cruza cuatro ríos: Carimã, Tamanduá, Três Irmãs y Corredeiras. El almuerzo tiene lugar en la sede de Iguassu Secret Falls, Camping Internacional, el mismo lugar de partida. Hay opciones veganas y vegetarianas. Otras restricciones dietéticas deben ser informadas al momento de cerrar el tour. No incluye traslados hasta punto de encuentro.\n\nPrecio REALES (precio en pesos a cotización del día)\n\nR$300",
  bannerBar: [{ title: "Duración", message: "8:30 AM a 6:00 PM" }],
  infoSection: [
    {
      infoTitle: "Reservas",
      infoMessage: "Transporte, guías bilingües y almuerzo incluidos.",
    },
  ],
  bulletSection: [
    {
      bulletTitle: "Detalles del recorrido",
      bulletMessages: [
        { content: "Visita a 10 cascadas secretas." },
        { content: "Hidromasajes naturales y cruzar 4 ríos." },
        { content: "Senderos: Eremita, Carimã, Onça y Três Irmãs." },
        {
          content:
            "Almuerzo en sede Iguassu Secret Falls, Camping Internacional.",
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

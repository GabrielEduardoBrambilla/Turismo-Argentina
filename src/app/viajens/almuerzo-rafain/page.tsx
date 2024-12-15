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
  mainTitle: "ALMUERZO EN RAFAIN",
  priceHigher: "R$151",
  priceLower: "R$119",
  discountPercent: "27% OFF",
  description:
    "Buffet libre donde los más variados sabores se disputan la preferencia del paladar de los visitantes. Hay más de 200 platos gourmet elaborados con productos seleccionados. Amplia variedad de ensaladas, platos típicos brasileños, muestras de cocina oriental, árabe, italiana, mariscos, buffet de postres y parrillada con más de 15 tipos de carne. Abierto todos los días desde las 11:30 am. No incluye bebidas. No incluye traslados.",
  bannerBar: [
    {
      title: "Precio REALES",
      message: "R$119 (precio en pesos a cotización del día)",
    },
  ],
  infoSection: [
    {
      infoTitle: "Horario",
      infoMessage: "Abierto todos los días desde las 11:30 am",
    },
  ],
  bulletSection: [
    {
      bulletTitle: "Incluye",
      bulletMessages: [
        { content: "Más de 200 platos gourmet" },
        { content: "Variedad de ensaladas" },
        { content: "Platos típicos brasileños" },
        { content: "Cocina oriental, árabe e italiana" },
        { content: "Mariscos" },
        { content: "Buffet de postres" },
        { content: "Parrillada con más de 15 tipos de carne" },
      ],
    },
    {
      bulletTitle: "No Incluye",
      bulletMessages: [{ content: "Bebidas" }, { content: "Traslados" }],
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

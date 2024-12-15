"use client";
import { FooterCards } from "@/components/footer-cards";

import imgBanner from "@/assets/imgs/aldea-frtin-mborore/img1.jpeg";
import imgCardMain from "@/assets/imgs/aldea-frtin-mborore/img2.jpeg";
import imgCardSecondary from "@/assets/imgs/aldea-frtin-mborore/img3.jpeg";
import imgCardThird from "@/assets/imgs/aldea-frtin-mborore/img4.jpeg";
import imgCardFourth from "@/assets/imgs/aldea-frtin-mborore/img5.jpeg";
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

const text = {
  firstSmallTitle: "",
  mainTitle: "PASEO DE COMPRAS CDE",
  priceHigher: "$43,053", // $33,900 + 27%
  priceLower: "$33,900",
  discountPercent: "27% OFF",
  description:
    "Paseo de compras grupal por Ciudad del Este - Paraguay, incluye 2,30hrs de espera, traslado ida y vuelta desde hotel.",
  bannerBar: [
    {
      title: "Duración",
      message: "2 horas y 30 minutos de espera",
    },
    {
      title: "Días disponibles",
      message: "Martes, Jueves y Sábados",
    },
  ],
  infoSection: [
    {
      infoTitle: "Punto de partida",
      infoMessage: "Traslado ida y vuelta desde el hotel.",
    },
  ],
  bulletSection: [
    {
      bulletTitle: "Precios",
      bulletMessages: [
        {
          content: "Precio por persona desde Hotel Arg/Br: $27,600",
        },
        {
          content: "Precio por persona desde hotel Melia: $33,900",
        },
      ],
    },
  ],
};
const imagens = {
  imgBanner: imgBanner,
  imgCardMain: imgCardMain,
  imgCardSecondary: imgCardSecondary,
  imgCardThird: imgCardThird,
  imgCardFourth: imgCardFourth,
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

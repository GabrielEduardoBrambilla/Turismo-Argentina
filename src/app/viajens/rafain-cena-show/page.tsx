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
  mainTitle: "RAFAIN CENA SHOW",
  priceHigher: "R$329",
  priceLower: "R$259",
  discountPercent: "27% OFF",
  description:
    "Rafain cena show ofrece una gran variedad gastronómica (buffet de ensaladas, platos típicos brasileños, muestras de cocina oriental, árabe, italiana, mariscos, buffet de postres exquisitamente preparados, además, una variada parrilla de carnes). Su espectáculo lo llevará en un viaje a través de la cultura y el folclore de nueve países latinoamericanos. Cuenta con uno de los mayores cuerpos de bailes presentados en una cena show. Lunes a Sábados *Cena a partir de las 18hs *Show folclórico 20.30hs.",
  bannerBar: [
    {
      title: "Precio REALES",
      message: "R$259 (precio en pesos a cotización del día)",
    },
  ],
  infoSection: [
    {
      infoTitle: "Horario",
      infoMessage: "Cena a partir de las 18hs, Show folclórico a las 20:30hs",
    },
  ],
  bulletSection: [
    {
      bulletTitle: "Incluye",
      bulletMessages: [
        { content: "Buffet de ensaladas" },
        { content: "Platos típicos brasileños" },
        { content: "Cocina oriental, árabe e italiana" },
        { content: "Buffet de postres" },
        { content: "Parrilla de carnes variadas" },
        { content: "Espectáculo folclórico de 9 países latinoamericanos" },
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

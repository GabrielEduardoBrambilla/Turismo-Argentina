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

import imgBanner from "@/assets/imgs/aldea-frtin-mborore/img1.jpeg";
import imgCardMain from "@/assets/imgs/aldea-frtin-mborore/img2.jpeg";
import imgCardSecondary from "@/assets/imgs/aldea-frtin-mborore/img3.jpeg";
import imgCardThird from "@/assets/imgs/aldea-frtin-mborore/img4.jpeg";
import imgCardFourth from "@/assets/imgs/aldea-frtin-mborore/img5.jpeg";
const imagens = {
  imgBanner: imgBanner,
  imgCardMain: imgCardMain,
  imgCardSecondary: imgCardSecondary,
  imgCardThird: imgCardThird,
  imgCardFourth: imgCardFourth,
};

// function getRandomImageUrl(width: number, height: number) {
//   return `https://picsum.photos/${width}/${height}?random=${Math.random()}`;
// }
// const imagens = {
//   imgBanner: { src: getRandomImageUrl(800, 300), width: 800, height: 300 },
//   imgCardMain: { src: getRandomImageUrl(300, 200), width: 300, height: 200 },
//   imgCardSecondary: {
//     src: getRandomImageUrl(300, 200),
//     width: 300,
//     height: 200,
//   },
//   imgCardThird: { src: getRandomImageUrl(300, 200), width: 300, height: 200 },
//   imgCardFourth: { src: getRandomImageUrl(300, 200), width: 300, height: 200 },
// };

const text = {
  firstSmallTitle: "",
  mainTitle: "Aldea Guarani Fortin Mborore c/Brunch",
  priceHigher: "56,488",
  priceLower: "44,400",
  discountPercent: "27% OFF",
  description:
    "Los mismos guaraníes reciben a los visitantes con guías expertos, lo hacen participar de sus ritos de caza, la confección de sus artesanías, cantos, creencias; los invitan a caminatas por senderos de montes y al final del recorrido se puede adquirir un souvenir de los mismos artesanos de la comunidad. Servicio grupal con guía de habla hispana y coordinación permanente. Incluye traslado ida y vuelta desde el hotel. Salidas 9:00 Hs. Duración del tour 2,30 horas aproximadamente.",
  bannerBar: [
    {
      title: "Salida",
      message: "De Lunes a Sábados.",
    },
    {
      title: "Duración",
      message: "2,30 horas aproximadamente.",
    },
  ],
  infoSection: [
    {
      infoTitle: "Reservas",
      infoMessage:
        "Las reservas se concretan una vez hecho el pago. Para reservar con un 48HS de anticipación antes de las 18,00pm.",
    },
  ],
  bulletSection: [
    {
      bulletTitle: "Servicios incluidos",
      bulletMessages: [
        {
          content: "Guías expertos y de habla hispana.",
        },
        {
          content: "Participación en ritos de caza y confección de artesanías.",
        },
        {
          content: "Caminatas por senderos de montes.",
        },
        {
          content: "Traslado ida y vuelta desde el hotel.",
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

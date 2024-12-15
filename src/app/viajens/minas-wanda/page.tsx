"use client";
import { FooterCards } from "@/components/footer-cards";

import img1 from "@/assets/imgs/wanda/WhatsApp Image 2024-11-15 at 18.32.26.jpeg";
import img2 from "@/assets/imgs/wanda/WhatsApp Image 2024-11-15 at 18.32.27.jpeg";
import img4 from "@/assets/imgs/wanda/WhatsApp Image 2024-11-15 at 18.35.38 (1).jpeg";
import img3 from "@/assets/imgs/wanda/WhatsApp Image 2024-11-15 at 18.35.38 (2).jpeg";
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

const imagens = {
  imgBanner: img2,
  imgCardMain: img3,
  imgCardSecondary: img4,
  imgCardThird: img1,
  imgCardFourth: img2,
};

const text = {
  firstSmallTitle: "Nacional",
  mainTitle: "Minas Wanda",
  priceHigher: "$27,000",
  priceLower: "$19,000",
  discountPercent: "27% OFF",
  description:
    "A 40 kilómetros de Puerto Iguazú se encuentran ubicadas las famosas Minas de Wanda, en un yacimiento de piedras semipreciosas de cristales de cuarzo, amatistas, ágatas y topacios, que permite a sus visitantes apreciar este singular atractivo cielo abierto o al natural. Servicio grupal, incluye traslados,  guía Bilingüe (Español/Inglés) y coordinación permanente. Salidas regulares 15hs aprox. por la tarde.",
  bannerBar: [
    {
      title: "Duracion",
      message: "4 horas",
    },
    {
      title: "Nivel de actividad",
      message: "Leve",
    },
    {
      title: "Grupo",
      message: "Mínimo 2 personas",
    },
  ],
  infoSection: [
    {
      infoTitle: "",
      infoMessage: "",
    },
  ],
  bulletSection: [
    {
      bulletTitle: "Serviço inclusos",
      bulletMessages: [
        {
          content: "Traslados",
        },
        {
          content: "Guía Bilingüe",
        },
        {
          content: "(Español/Inglés)",
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
          content: "15 hrs",
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

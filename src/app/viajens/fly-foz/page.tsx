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
  mainTitle: "FLY FOZ PARACAIDISMO",
  priceHigher: "R$1638.30",
  priceLower: "R$1290.00",
  discountPercent: "27% OFF",
  description:
    "Prepárate para una increíble experiencia de paracaidismo a más de 3.000 metros de altitud y 200 km/h de velocidad. Con instructores experimentados y equipos de última generación, cualquier persona mayor de 12 años puede sentir una verdadera sensación de libertad, con fotos y videos para capturar este momento inolvidable. ¿Qué vistas se podrán ver durante el salto? Represa de Itaipú, Puente de la Amistad, Triple Frontera y Cataratas del Iguazú. No incluye traslados.\n\nPrecio REALES (precio en pesos a cotización del día)\n\nSALTO SELFIE (Fotos da Handycam + Videos da Handycam)\nR$1.290\nSALTO VIP (Fotos y videos de Handycam y de Camarógrafo externo)\nR$1.690",
  bannerBar: [
    { title: "Altitud", message: "Más de 3.000 metros" },
    { title: "Velocidad", message: "200 km/h" },
    { title: "Edad mínima", message: "12 años" },
  ],
  infoSection: [
    { infoTitle: "Reservas", infoMessage: "No incluye traslados." },
  ],
  bulletSection: [
    {
      bulletTitle: "Detalles del salto",
      bulletMessages: [
        { content: "Fotos y videos de Handycam incluidos." },
        {
          content:
            "Vistas: Represa de Itaipú, Puente de la Amistad, Triple Frontera y Cataratas del Iguazú.",
        },
        {
          content:
            "Equipos de última generación e instructores experimentados.",
        },
      ],
    },
  ],
  priceCategories: [
    {
      category: "Salto Selfie",
      priceLower: "R$1290.00",
      priceHigher: "R$1638.30",
    },
    {
      category: "Salto VIP",
      priceLower: "R$1690.00",
      priceHigher: "R$2146.30",
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

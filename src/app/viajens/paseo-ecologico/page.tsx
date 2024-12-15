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
  mainTitle: "PASEO ECOLOGICO",
  priceHigher: "$31,750.00",
  priceLower: "$25,000.00",
  discountPercent: "20% OFF jubilados y menores",
  description:
    "Desde la estación Garganta del Diablo y mediante balsas a remo, te brindamos una experiencia navegación silenciosa, distendida y muy ilustrativa a través de las islas del Río Iguazú Superior. A lo largo de esta bajada de 2,5 km podrás conectarte con la rica flora y fauna que distingue este ambiente ribereño. Expertos lugareños pondrán su ojo entrenado a tu servicio para descubrir los secretos de la selva más allá de las pasarelas. Este apacible paseo finaliza en el puerto Tres Marías. Desde allí, caminando, podrás regresar a la Estación Cataratas, comienzo de los circuitos tradicionales o vía de retorno a la Estación Central.\n\nSE REALIZA DURANTE VISITA A CATARATAS ARGENTINAS.\n\nPrecio\n\n$25,000 mayores - 20% descuento jubilados y menores\n\nLas reservas se concretan una vez hecho el pago. Para reservar con un 48HS de anticipación antes de las 18:00 PM.",
  bannerBar: [
    { title: "Estación de Salida", message: "Garganta del Diablo" },
    {
      title: "Distancia del Paseo",
      message: "2.5 km navegando por el Río Iguazú Superior",
    },
  ],
  infoSection: [
    {
      infoTitle: "Reservas",
      infoMessage: "Requiere pago con 48 horas de anticipación.",
    },
    {
      infoTitle: "Nota",
      infoMessage: "Se realiza durante visita a Cataratas Argentinas.",
    },
  ],
  bulletSection: [
    {
      bulletTitle: "Detalles del Paseo",
      bulletMessages: [
        { content: "Navegación silenciosa en balsa a remo." },
        { content: "Conexión con flora y fauna del ambiente ribereño." },
        { content: "Finaliza en el Puerto Tres Marías." },
        { content: "Opción de regresar caminando a la Estación Cataratas." },
      ],
    },
  ],
  priceCategories: [
    {
      category: "Adultos Mayores",
      priceLower: "$25,000.00",
      priceHigher: "$31,750.00",
    },
    {
      category: "Jubilados y Menores",
      priceLower: "$20,000.00",
      priceHigher: "",
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

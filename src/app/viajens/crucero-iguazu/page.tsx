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
  mainTitle: "CRUCEROS IGUAZU",
  priceHigher: "$27,940.00",
  priceLower: "$22,000.00",
  discountPercent: "27% OFF",
  description:
    "El paseo se inicia en el Puerto local, navegando hacia las Tres Fronteras, donde el río Iguazú desemboca en el inmenso río Paraná. Luego de permanecer allí para visualizar los Hitos de los tres países: Argentina, Brasil y Paraguay, navegamos aguas arriba pasando por debajo del Puente Internacional Tancredo Neves para continuar hacia la ribera de la Selva Iryapu y alcanzar la altura de 'El Santuario', límite del Parque Nacional Iguazú, a unos 12 km de las Cataratas. Desde allí se emprende el regreso aguas abajo hasta su arribo. Show de música en vivo y gastronomía a bordo. NO INCLUYE TRASLADO AL PUERTO DE EMBARQUE.\n\nPrecio\n\n$22,000 adultos - $8,000 Niños (6 a 12) - FREE Infantes (5 años)\n\nLas reservas se concretan una vez hecho el pago. Para reservar con un 48HS de anticipación antes de las 18:00 PM.",
  bannerBar: [
    { title: "Ubicación", message: "Puerto local hacia Tres Fronteras" },
    {
      title: "Punto Destacado",
      message: "Hitos de Argentina, Brasil y Paraguay",
    },
    {
      title: "Gastronomía",
      message: "Show de música en vivo y gastronomía a bordo",
    },
  ],
  infoSection: [
    {
      infoTitle: "Reservas",
      infoMessage: "Requiere pago con 48 horas de anticipación.",
    },
    {
      infoTitle: "Restricciones",
      infoMessage: "No incluye traslado al puerto de embarque.",
    },
  ],
  bulletSection: [
    {
      bulletTitle: "Detalles del Crucero",
      bulletMessages: [
        { content: "Navegación hasta la unión de los Tres Fronteras." },
        {
          content:
            "Recorrido por debajo del Puente Internacional Tancredo Neves.",
        },
        { content: "Show de música en vivo a bordo." },
        { content: "Duración hasta el límite del Parque Nacional Iguazú." },
      ],
    },
  ],
  priceCategories: [
    {
      category: "Adultos",
      priceLower: "$22,000.00",
      priceHigher: "$27,940.00",
    },
    {
      category: "Niños (6 a 12 años)",
      priceLower: "$8,000.00",
      priceHigher: "$10,160.00",
    },
    { category: "Infantes (5 años)", priceLower: "FREE", priceHigher: "FREE" },
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

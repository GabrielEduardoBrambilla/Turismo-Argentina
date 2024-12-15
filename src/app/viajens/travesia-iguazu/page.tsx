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
  mainTitle: "TRAVESIA IGUAZU",
  priceHigher: "$44,450",
  priceLower: "$35,000",
  discountPercent: "27% OFF",
  description:
    "Recorremos 5.5 km en vehículos a través del Sendero Yacaratía hasta Puerto Macuco, desde donde navegamos por el río Iguazú 18 Km en lancha hasta la confluencia con el río Paraná, realizando paradas interpretativas y de contemplación, desembarcando en el Puerto Local de Iguazú. Guías bilingües acompañan a los pasajeros durante todo el recorrido del paseo. Horario de salida: A las 16 hs desde Oficina central Jungle Iguazú / 16:10 hs desde el embarque en el centro de visitantes. Duración total: 2Hs aproximadamente. El recorrido finaliza en el puerto de la ciudad de Puerto Iguazú, por lo tanto, aquellos pasajeros que ingresaron en vehículos particular al PN Iguazú no podrán realizar esta excursión porque no hay regreso al punto de inicio.",
  bannerBar: [
    {
      title: "Precio",
      message: "$35,000",
    },
    {
      title: "Duración",
      message: "2Hs aproximadamente",
    },
    {
      title: "Horario de salida",
      message:
        "16:00 hs desde Oficina central Jungle Iguazú / 16:10 hs desde el embarque en el centro de visitantes",
    },
  ],
  infoSection: [
    {
      infoTitle: "Recomendaciones",
      infoMessage:
        "Se recomienda llevar sombrero o similar, agua, repelente y protector solar.",
    },
    {
      infoTitle: "Condiciones especiales",
      infoMessage:
        "Menores de 6 años no abonan contra presentación de la documentación correspondiente.",
    },
  ],
  bulletSection: [
    {
      bulletTitle: "No Incluye",
      bulletMessages: [
        { content: "Comidas" },
        { content: "Bebidas" },
        { content: "Capas de lluvia" },
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

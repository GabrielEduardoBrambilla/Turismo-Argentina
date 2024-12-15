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
  mainTitle: "MACUCO SAFARI",
  priceHigher: "R$494",
  priceLower: "R$389",
  discountPercent: "27% OFF",
  description:
    "Este increíble recorrido se divide en tres etapas: Selva, Sendero y Bote. Todo comienza con un paseo de 2 km por la selva del Parque Nacional Iguazú, donde serás transportado por vehículos ecológicos impulsados por electricidad que, además de ser silenciosos, garantizan una vista panorámica de las innumerables especies de vegetación que componen el itinerario. Luego, guías bilingües conducen una caminata de 600 metros por el bosque, trayendo información y curiosidades sobre la fauna y flora local. En esta etapa del recorrido, el contacto con la naturaleza es mayor y los visitantes pueden ver los animales que habitan el parque. En la tercera etapa, un tranvía eléctrico transporta a los visitantes hasta el muelle en el río Iguazú, desde donde partirán en uno de los bimotores Macuco Safari para una vista espectacular y un baño en las Cataratas del Iguazú. Todos los días de 09:00 a 17:00hs. Salidas cada 20 minutos. No incluye ingresos al Parque Nacional Iguazú lado Brasileño. No incluye traslados. MENORES HASTA 6 AÑOS NO ABONAN. MENORES ENTRE 7 Y 11 AÑOS ABONAN 50% DE LA EXCURSIÓN.",
  bannerBar: [
    {
      title: "Precio",
      message: "R$389 (a cotización del día)",
    },
    {
      title: "Horario",
      message: "De 09:00 a 17:00hs, salidas cada 20 minutos",
    },
  ],
  infoSection: [
    {
      infoTitle: "Duración",
      infoMessage: "Recorrido dividido en tres etapas: Selva, Sendero y Bote.",
    },
    {
      infoTitle: "Condiciones especiales",
      infoMessage:
        "Menores hasta 6 años no abonan. Menores entre 7 y 11 años abonan 50% de la excursión.",
    },
  ],
  bulletSection: [
    {
      bulletTitle: "No Incluye",
      bulletMessages: [
        { content: "Ingresos al Parque Nacional Iguazú lado brasileño" },
        { content: "Traslados" },
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

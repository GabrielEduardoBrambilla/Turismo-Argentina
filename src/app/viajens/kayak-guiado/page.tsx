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
  mainTitle: "EXC. GUIADA KAYAK",
  priceHigher: "$43,815.00",
  priceLower: "$34,500.00",
  discountPercent: "27% OFF",
  description:
    "Travesía Río Iguazú, duración de 3 hs. Realizamos dos salidas diarias en kayak, del tipo recreativo (paseo), partiendo del puerto local sobre el Km 1.5 del Río Iguazú, ascendiendo en dirección al Parque Nacional, pasando por debajo del puente internacional Tancredo Neves que une las ciudades de Puerto Iguazú (Argentina), con Foz de Iguazú (Brasil) y navegando hasta el límite del Parque Nacional en el Km 5. En el trayecto visitamos distintos saltos de pequeños arroyos afluentes del Río Iguazú. Normalmente remamos la primera hora, parando la segunda para nadar, tomar sol, tomar fotos y volvemos la última hora hasta el punto de partida. Las salidas son en servicio regular, de 9 hs a 12 hs por la mañana y de 15:30 hs a 18:30 hs por la tarde. Trabajamos con un máximo de 10 pasajeros por salida, acompañados por dos instructores a cargo y matriculados por la PNA. Es fundamental que el pasajero sepa nadar, se encuentre en buena forma física y que cuente con experiencia mínima previa en canotaje recreativo. El paseo comienza y termina en el puerto local. Incluye kayak de travesía single o doble, remos, chalecos salvavidas, cubre cockpit, bolsas estanco para elementos personales y un responsable durante todo el recorrido. Charla técnica previa a cargo del instructor, ubicación geográfica, restricciones, limitaciones. Recomendamos ropa deportiva cómoda, traje de baño, protección solar e hidratación. El paseo está sujeto a las condiciones climáticas y reguladas por el área de operaciones de la PNA. No incluye traslado al Puerto local.",
  bannerBar: [
    { title: "Duración", message: "3 horas" },
    { title: "Horarios", message: "9:00 AM - 12:00 PM | 3:30 PM - 6:30 PM" },
    {
      title: "Requisito",
      message: "Experiencia mínima en canotaje y saber nadar",
    },
  ],
  infoSection: [
    {
      infoTitle: "Reservas",
      infoMessage: "Requiere pago con 48 horas de anticipación.",
    },
    {
      infoTitle: "Restricciones",
      infoMessage: "No incluye traslado al puerto local.",
    },
  ],
  bulletSection: [
    {
      bulletTitle: "Detalles del Paseo",
      bulletMessages: [
        { content: "Travesía en kayak por el Río Iguazú." },
        { content: "Paradas para nadar, tomar sol y tomar fotos." },
        { content: "Visita a pequeños arroyos y afluentes del río." },
        { content: "Kayak individual o doble, chalecos y remos incluidos." },
        {
          content:
            "Charla técnica previa a cargo de instructores matriculados.",
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

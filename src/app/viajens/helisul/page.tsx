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
  mainTitle: "HELSIUL",
  priceHigher: "R$806.45",
  priceLower: "R$635.00",
  discountPercent: "27% OFF",
  description:
    "Vuelo panorámico en helicóptero sobre el Parque Nacional Iguazú. La empresa prestadora se encuentra ubicada del lado brasileño de la frontera. Los despegues requieren un mínimo de 3, 4 o 5 pasajeros, dependiendo de la capacidad del helicóptero en uso. Para vuelos privados es necesario pagar todos los asientos del helicóptero. -Los niños mayores de dos años pagan el precio completo y tienen que ocupar un asiento en el avión. Se pueden cambiar los lugares sobrevolados y la secuencia del itinerario, pero sin reducir el tiempo de vuelo (10 MINUTOS). La fecha puede cambiar debido a las condiciones climáticas o las restricciones de espacio aéreo. Los vuelos especiales para filmaciones aéreas profesionales se realizan SOLO previa consulta. No incluye traslados.\n\nPrecio REALES (precio en pesos a cotización del día)\n\nR$635",
  bannerBar: [{ title: "Duración", message: "10 MINUTOS" }],
  infoSection: [
    {
      infoTitle: "Reservas",
      infoMessage: "Vuelos especiales y privados con consulta previa.",
    },
  ],
  bulletSection: [
    {
      bulletTitle: "Condiciones",
      bulletMessages: [
        { content: "Vuelo panorámico sobre el Parque Nacional Iguazú." },
        { content: "Salida desde el lado brasileño." },
        { content: "Niños mayores de 2 años pagan tarifa completa." },
        { content: "Cambios en el itinerario sin reducir tiempo de vuelo." },
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

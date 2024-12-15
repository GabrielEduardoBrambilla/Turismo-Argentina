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
  mainTitle: "JUNGLE FLY",
  priceHigher: "$50,800.00",
  priceLower: "$40,000.00",
  discountPercent: "27% OFF",
  description:
    "Circuito de aventuras en la selva.*Circuito de Canopy - vuelo de 300 mts de largo y 70 mts. de alto, sobre las copas de los árboles milenarios que embellecen la selva desde donde tendrás una ubicación privilegiada para tomar la mejor foto de tus vacaciones. *Caminata por la selva de 900 mts aprox, para adentrarse en la Selva misionera y respirar el entorno increíble en el cual nos sumergiremos.*PASARELAS COLGANTES*RAPPEL - Descenso por la cascada y luego un fresco chapuzón en las aguas del río. Salidas regulares todos los días. Turno mañana 8:00hs y 10:00hs. Turno tarde 14:00hs y 16:00hs.\n\nRestricciones menores de 6 AÑOS, mujeres embarazadas, discapacidades físicas.\n\nPrecio\n\n$40,000 (de 7 a 12 años) $28,800\n\nLas reservas se concretan una vez hecho el pago. Para reservar con un 48HS de anticipación antes de las 18:00pm.",
  bannerBar: [
    { title: "Altura del Canopy", message: "70 metros" },
    { title: "Longitud del Canopy", message: "300 metros" },
    { title: "Caminata", message: "900 metros por la selva" },
    { title: "Horarios", message: "8:00, 10:00, 14:00 y 16:00" },
  ],
  infoSection: [
    {
      infoTitle: "Restricciones",
      infoMessage:
        "Menores de 6 años, mujeres embarazadas y discapacidades físicas.",
    },
  ],
  bulletSection: [
    {
      bulletTitle: "Detalles del circuito",
      bulletMessages: [
        { content: "Vuelo de canopy sobre las copas de los árboles." },
        { content: "Caminata guiada de 900 metros por la selva." },
        { content: "Rappel y descenso por cascada con chapuzón en el río." },
      ],
    },
  ],
  priceCategories: [
    {
      category: "Adultos",
      priceLower: "$40,000.00",
      priceHigher: "$50,800.00",
    },
    { category: "Niños (7 a 12 años)", priceLower: "", priceHigher: "" },
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

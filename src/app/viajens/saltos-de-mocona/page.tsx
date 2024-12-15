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
  mainTitle: "SALTOS DEL MOCONA",
  priceHigher: "$93,726.00",
  priceLower: "$73,800.00",
  discountPercent: "27% OFF",
  description:
    "Saltos del Moconá están ubicados en la zona este de la provincia de Misiones, a aproximadamente 320 Km de la ciudad de Puerto Iguazú. Son unas cataratas que oscilan entre 5 y 10 m de altura, que interrumpen durante unos 3 km el curso del río Uruguay en la frontera entre Brasil y Argentina. Servicio grupal, incluye traslados y coordinación permanente. No incluye entrada, almuerzo, ni navegación. Salidas regulares Jueves y Domingos, 7:30 Hs aproximadamente. Mínimo 4 personas. INGRESOS, CONTRATACIÓN Y PAGO DE LA NAVEGACIÓN ÚNICAMENTE EN DESTINO.\n\nPrecio\n\n$73,800\n\nLas reservas se concretan una vez hecho el pago. Para reservar con un 48HS de anticipación antes de las 18:00 PM.",
  bannerBar: [
    {
      title: "Ubicación",
      message: "Zona este de Misiones, 320 Km de Puerto Iguazú",
    },
    { title: "Altura de Cataratas", message: "Entre 5 y 10 metros" },
  ],
  infoSection: [
    {
      infoTitle: "Reservas",
      infoMessage: "Requiere pago con 48 horas de anticipación.",
    },
  ],
  bulletSection: [
    {
      bulletTitle: "Detalles del tour",
      bulletMessages: [
        { content: "Incluye traslados y coordinación permanente." },
        { content: "No incluye entrada, almuerzo ni navegación." },
        { content: "Salidas regulares Jueves y Domingos a las 7:30 AM." },
        { content: "Mínimo 4 personas por grupo." },
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

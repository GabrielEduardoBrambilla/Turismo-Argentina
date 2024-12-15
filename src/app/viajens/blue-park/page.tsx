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
  mainTitle: "BLUE PARK INGRESOS",
  priceHigher: "R$279.40",
  priceLower: "R$220.00",
  discountPercent: "27% OFF",
  description:
    "Blue Park está ubicado sobre el Acuífero Guaraní, la segunda reserva de agua dulce más grande del mundo, lo que garantiza su suministro perenne de aguas termales cristalinas para su disfrute. El parque tiene la tercera playa de olas termales más grande del mundo y promete mucha diversión para todos. Hay 9 tipos de olas de hasta 1,20 m de altura, con arena natural y un entorno paradisíaco donde el color del agua recuerda al Mar Caribe. * Toboganes de agua extremos * Mega tirolesa * Playa termal con arena y olas * Plaza de alimentación * Atracciones infantiles y recreación. HORARIO: de 10hs a 17hs. Cerrado los días Martes. No incluye traslados.\n\nPrecio REALES (precio en pesos a cotización del día)\n\nADULTOS R$220\nMENORES DE 7 A 11 R$110\nINFANTES DE 1 A 6 R$35",
  bannerBar: [
    { title: "Horário", message: "10:00 AM - 17:00 PM" },
    { title: "Cerrado", message: "Martes" },
  ],
  infoSection: [
    { infoTitle: "Reservas", infoMessage: "No incluye traslados." },
    { infoTitle: "Adultos", infoMessage: "R$220.00" },
    { infoTitle: "Menores de 7 a 11 años", infoMessage: "R$110.00" },
    { infoTitle: "Infantes de 1 a 6 años", infoMessage: "R$35.00" },
  ],
  bulletSection: [
    {
      bulletTitle: "Atractivos principales",
      bulletMessages: [
        { content: "Tercera playa de olas termales más grande del mundo." },
        { content: "9 tipos de olas de hasta 1,20 m de altura." },
        { content: "Toboganes de agua extremos y mega tirolesa." },
        { content: "Playa termal con arena natural y entorno paradisíaco." },
        { content: "Atracciones infantiles y recreación." },
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

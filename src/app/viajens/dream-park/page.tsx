"use client";
import { FooterCards } from "@/components/footer-cards";

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

const text = {
  firstSmallTitle: "",
  mainTitle: "DREAMS PARK SHOW INGRESOS",
  priceHigher: "R$151.13", // R$119 + 27%
  priceLower: "R$119",
  discountPercent: "27% OFF",
  description:
    "Dreams Park Show es un complejo que reúne varios atractivos turísticos en la Ciudad de Foz do Iguaçu (Brasil). *Museo de Cera repleto de personajes que encantan a adultos y pequeños. Son más de 17 escenarios con personajes del cine, la música, la televisión y la historia, además de los favoritos de los niños, retratados en tamaño y peso reales. *Maravillas del Mundo te ofrece un viaje por algunos de los lugares más famosos del planeta proyectados en réplicas en miniatura. *Bar de hielo 'Una aventura glacial'. En el interior, todo está hecho de hielo: vasos, mesas, paredes y mostradores. Justo en la entrada, todos reciben abrigos y guantes para disfrutar de esta fiesta Open Bar (bebidas con y sin alcohol). *Valle de los Dinosaurios: Explora un bosque lleno de dinosaurios. En los senderos al aire libre, los visitantes encuentran y escuchan los sonidos de animales prehistóricos. Pueden adentrarse en el mundo de la imaginación, jugar y divertirse con los gigantes del pasado. *Centro de Halconería para conocer un arte milenario. La actividad de cetrería busca la educación histórica y ambiental, conjugada en un contexto natural de contemplación del vuelo libre de las aves rapaces. *Dreams Motor Show es un museo de motocicletas raras y exclusivas, lleno de máquinas clásicas y también modelos personalizados exclusivos con un bar y restaurante temático. Habrá espacio para reuniones y eventos, conciertos y música. *Dino Adventure es un paseo extremo que comienza con un recorrido arborícola de unos 60 m, entre árboles y colmillos de los gigantes prehistóricos del Valle de los Dinosaurios de casi 100 metros.",
  bannerBar: [
    {
      title: "Precio por 5 atractivos",
      message: "R$119",
    },
    {
      title: "Ubicación",
      message: "Ciudad de Foz do Iguaçu, Brasil",
    },
  ],
  infoSection: [
    {
      infoTitle: "Atractivos destacados",
      infoMessage:
        "Incluye Museo de Cera, Maravillas del Mundo, Bar de Hielo, Valle de los Dinosaurios, Centro de Halconería y más.",
    },
  ],
  bulletSection: [
    {
      bulletTitle: "Información adicional",
      bulletMessages: [
        {
          content: "Consultar por paquete familiar con descuento.",
        },
        {
          content: "Incluye acceso a múltiples atracciones en un solo ticket.",
        },
      ],
    },
  ],
};
// const imagens = {
//   imgBanner: img1,
//   imgCardMain: img3,
//   imgCardSecondary: img4,
//   imgCardThird: img1,
//   imgCardFourth: img2,
// };

function getRandomImageUrl(width: number, height: number) {
  return `https://picsum.photos/${width}/${height}?random=${Math.random()}`;
}
const imagens = {
  imgBanner: { src: getRandomImageUrl(800, 300), width: 800, height: 300 },
  imgCardMain: { src: getRandomImageUrl(300, 200), width: 300, height: 200 },
  imgCardSecondary: {
    src: getRandomImageUrl(300, 200),
    width: 300,
    height: 200,
  },
  imgCardThird: { src: getRandomImageUrl(300, 200), width: 300, height: 200 },
  imgCardFourth: { src: getRandomImageUrl(300, 200), width: 300, height: 200 },
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

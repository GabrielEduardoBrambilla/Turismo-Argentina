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
  mainTitle: "NOCHE EN LAS CATARATAS",
  priceHigher: "R$336.55 reales", // R$265 + 27%
  priceLower: "R$265 Reales",
  discountPercent: "27% OFF",
  description:
    "Noche en las Cataratas es una experiencia exclusiva en el Parque Nacional del Iguazú, que ofrece escenas sorprendentes como la luna llena y el cielo estrellado en las Cataratas. Incluye entrada después del cierre del parque y una experiencia gastronómica con queso y pasta en el Restaurante Porto Canoas. El recorrido comienza en el Centro de Visitantes del parque, con embarque único a las 19:30, llevando a los visitantes al Espacio Naipi, donde se encuentran los ascensores que conducen a la pasarela, con una vista privilegiada de la imponente Garganta del Diablo bajo la luz de las estrellas. El Restaurante Porto Canoas abre a partir de las 20 horas con servicio de quesos, pastas y guarniciones variadas, incluidas en el ticket del tour. Porto Canoas ofrece un ambiente único y acogedor, donde los visitantes pueden disfrutar de música en vivo mientras disfrutan de la vida nocturna en las Cataratas. Para regresar del recorrido, los visitantes tienen opciones de transporte a partir de las 21 horas, en el Espacio Porto Canoas, con un intervalo de media hora entre cada embarque, el último a las 22:30 horas.",
  bannerBar: [
    {
      title: "Duración",
      message: "De 19:30 a 22:30 (aproximadamente)",
    },
    {
      title: "Días disponibles",
      message: "Todos los sábados",
    },
  ],
  infoSection: [
    {
      infoTitle: "Condiciones",
      infoMessage:
        "El recorrido se realizará independientemente de las condiciones climáticas.",
    },
    {
      infoTitle: "Entrada válida",
      infoMessage: "Incluye entrada después del cierre del parque.",
    },
  ],
  bulletSection: [
    {
      bulletTitle: "Información adicional",
      bulletMessages: [
        {
          content:
            "No incluye traslado desde hotel hasta Parque Nacional Iguazú (lado brasileño).",
        },
        {
          content:
            "Incluye experiencia gastronómica con queso y pasta en el Restaurante Porto Canoas.",
        },
        {
          content:
            "Salidas de regreso: 21h, 21h30, 22h y 22h30 desde el Espacio Porto Canoas.",
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

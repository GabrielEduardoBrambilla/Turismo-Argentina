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
  mainTitle: "CICLOTURISMO",
  priceHigher: "$41,275",
  priceLower: "$32,500",
  discountPercent: "27% OFF",
  description:
    "Circuito 2000ha/4hs. Es el circuito más concurrido, porque mezcla un poco de ruta, caminos terrados por la comunidad Fortín Mbororé donde se verá sus costumbres, sus vivencias, su agricultura y un recorrido bien rústico y agreste, con mucho verde. Se puede disfrutar de una diversidad de vegetación, se recorre a pie donde se verán algunas trampas de animales que utilizaban. Luego retoman las bicicletas y siguen camino hacia las 2000ha donde podrán elegir hacer los Saltos del Turista o Saltos del Mbocay. Una vez en los saltos, se dejan las bicis en un lugar marcado, para luego empezar la travesía a pie de aprox. 2km, donde se encontrarán con árboles muy tupidos y senderos únicos, conociendo saltos y río donde también pueden disfrutar del agua. A la vuelta, se retorna en bicicleta hasta su hotel o se fija un punto de encuentro para que un móvil los busque. Tener en cuenta que no son 4hs de pedaleo, sino que se divide en 3 tramos. Se considera el uso frecuente o no de la bici para marcar un punto de salida y vuelta.",
  bannerBar: [
    {
      title: "Precio",
      message: "$32,500",
    },
    {
      title: "Distancia total",
      message: "22km aprox.",
    },
    {
      title: "Horarios",
      message: "7hs a 10hs / 14hs a 15.30hs en esos intervalos",
    },
  ],
  infoSection: [
    {
      infoTitle: "Duración",
      infoMessage:
        "4 horas (dividido em 3 tramos, não é 4hs contínuas de pedaleo).",
    },
    {
      infoTitle: "Requisito",
      infoMessage: "Mínimo 2 personas.",
    },
  ],
  bulletSection: [],
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

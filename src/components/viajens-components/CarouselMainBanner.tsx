import Image, { StaticImageData } from "next/image";
import React from "react";
import FluctuationBar from "./FluctuationBar";

interface CarouselProps {
  imgBanner: string | StaticImageData; // Allow both types
  bannerBar: { title: string; message: string }[];
  mainTitle: string;
}

const CarouselMainBanner: React.FC<CarouselProps> = ({
  bannerBar,
  mainTitle,
  imgBanner,
}) => {
  return (
    <>
      <section className="Carosel relative mb-60 w-full p-0 md:mb-28">
        <Image
          alt=""
          src={imgBanner}
          className="flex h-[660px] w-full flex-col rounded-b-[60px] object-cover p-0 drop-shadow-xl"
        />
        <FluctuationBar bannerBar={bannerBar}></FluctuationBar>
        <div className="fluctuation-title absolute bottom-52 left-1/2 z-40 -translate-x-1/2 text-center md:bottom-40">
          <h2 className="text-5xl font-bold text-white [text-shadow:_4px_4px_4px_rgba(0,_0,_0,_.5)]">
            {mainTitle}
          </h2>
        </div>
      </section>
    </>
  );
};

export default CarouselMainBanner;

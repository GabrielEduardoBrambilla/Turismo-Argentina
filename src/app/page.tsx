'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import img1 from '../assets/imgs/1a50c6f9-c42d-438c-8ca6-6a7ef59e4c16.jpeg'
import img2 from '../assets/imgs/498b328c-bacf-4595-8a10-0fca8cbd6b8a.jpeg'
import img3 from '../assets/imgs/97913c2a-c3c9-462f-b859-b52cf4e42ffb.jpeg'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import Marquee from 'react-fast-marquee'

export default function page() {
  return (
    <>
      <div className="Carosel relative w-full p-  bg-blue-500">
        <Carousel
          orientation="horizontal"
          plugins={[
            Autoplay({
              delay: 4000
            })
          ]}
          opts={{
            loop: true
          }}
        >
          <CarouselContent className="flex h-lvh">
            <CarouselItem className="flex justify-items-center">
              <Image alt="" src={img1} className="object-cover" />
            </CarouselItem>
            <CarouselItem>
              <Image alt="" src={img2} />
            </CarouselItem>
            <CarouselItem>
              <Image alt="" src={img3} />
            </CarouselItem>
          </CarouselContent>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 gap-4 flex">
            <CarouselPrevious className=" z-10 bottom-0 right-12 " />
            <CarouselNext className="  right-0 -bottom-10  " />
          </div>
        </Carousel>
        <Marquee className="text-white text-lg h-16 " pauseOnHover speed={60}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias saepe
          dolorem repellat maxime nostrum **** reprehenderit accusantium eum
          labore illum aperiam iure, minus rerum laboriosam excepturi
          dignissimos quas explicabo consequatur. Voluptatum?
        </Marquee>
      </div>
      <section className="Planos de viagem">
        <h2 className="text-4xl my-8 font-bold">Conoce nuestros tours</h2>

        <div className="grid grid-cols-3">
          <div className="card relative w-full h-96 rounded-s-md text-white ">
            <Image
              src={img3}
              alt=""
              className="w-full h-full object-cover rounded-md -z-10 absolute"
            />
            <div className="absolute m-6  ">
              <div className="tag-nacionalidade h-4 w-fit p-6 text-lg text-black bg-white flex flex-wrap content-center rounded-full">
                Nacional
              </div>
              <div className="text absolute top-0 ">
                <h2 className="trip-tittle">Carreta Austral Norte</h2>
                <div className="periodo">7 dias y 6 noches</div>
                <div className="price">
                  desde <strong>$750.000 USD</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

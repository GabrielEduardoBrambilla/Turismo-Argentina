'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import img1 from '../assets/imgs/1a50c6f9-c42d-438c-8ca6-6a7ef59e4c16.jpeg'
import img2 from '../assets/imgs/498b328c-bacf-4595-8a10-0fca8cbd6b8a.jpeg'
import img3 from '../assets/imgs/97913c2a-c3c9-462f-b859-b52cf4e42ffb.jpeg'

export default function page() {
  return (
    <>
      <div className="Carosel relative w-full p- bg-blue-500">
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
      <section className="Planos de viagem mx-8">
        <h2 className="text-4xl my-8 font-bold">Conoce nuestros tours</h2>

        <div className="grid grid-cols-3 gap-12">
          <Link href={'./viajens/first'} about="">
            <div className="content-center flex card relative overflow-hidden h-[32rem] text-white justify-items-end items-end rounded-3xl ">
              <Image
                alt=""
                src={img2}
                className=" absolute -z-10 object-cover top-0 h-full "
              />
              <p className="absolute top-0 px-8 py-4 m-4 bg-white text-gray-800 text-lg font-semibold rounded-full flex content-center flex-wrap">
                Nacional
              </p>

              <div className="content p-4 h-1/2 bg-gradient-to-t w-full   from-black to-transparent flex flex-col justify-center flex-wrap gap-6 rounded-b-lg ">
                <p className="font-bold w-fit text-3xl mt-6">
                  Carretara Austral
                </p>
                <p className=" p-2 px-6 bg-gray-950 text-lg flex w-fit content-center flex-wrap">
                  7 dias y 6 noches
                </p>
                <p className="text-lg">
                  desde <strong>$755.000 CLP</strong>
                </p>
              </div>
            </div>
          </Link>
          <Link href={''} about="">
            <div className="card relative flex content-center overflow-hidden h-[32rem] text-white justify-items-end items-end rounded-3xl ">
              <Image
                alt=""
                src={img3}
                className=" absolute -z-10 object-cover top-0 h-full "
              />
              <p className="absolute top-0 px-8 py-4 m-4 bg-white text-gray-800 text-lg font-semibold rounded-full flex content-center flex-wrap">
                Nacional
              </p>

              <div className="content p-4 h-1/2 w-full  bg-gradient-to-t from-black to-transparent flex flex-col justify-center flex-wrap gap-6 rounded-b-lg ">
                <p className="font-bold w-fit text-3xl mt-6">
                  Carretara Austral
                </p>
                <p className=" p-2 px-6 bg-gray-950 text-lg flex w-fit content-center flex-wrap">
                  7 dias y 6 noches
                </p>
                <p className="text-lg">
                  desde <strong>$755.000 CLP</strong>
                </p>
              </div>
            </div>
          </Link>
          <Link href={''} about="">
            <div className="card relative flex content-center overflow-hidden h-[32rem] text-white justify-items-end items-end rounded-3xl ">
              <Image
                alt=""
                src={img1}
                className=" absolute -z-10 object-cover top-0 h-full "
              />
              <p className="absolute top-0 px-8 py-4 m-4 bg-white text-gray-800 text-lg font-semibold rounded-full flex content-center flex-wrap">
                Nacional
              </p>

              <div className="content p-4 h-1/2 w-full  bg-gradient-to-t from-black to-transparent flex flex-col justify-center flex-wrap gap-6 rounded-b-lg ">
                <p className="font-bold w-fit text-3xl mt-6">
                  Carretara Austral
                </p>
                <p className=" p-2 px-6 bg-gray-950 text-lg flex w-fit content-center flex-wrap">
                  7 dias y 6 noches
                </p>
                <p className="text-lg">
                  desde <strong>$755.000 CLP</strong>
                </p>
              </div>
            </div>
          </Link>
          <Link href={''} about="">
            <div className="card relative flex content-center overflow-hidden h-[32rem] text-white justify-items-end items-end rounded-3xl ">
              <Image
                alt=""
                src={img1}
                className=" absolute -z-10 object-cover top-0 h-full "
              />
              <p className="absolute top-0 px-8 py-4 m-4 bg-white text-gray-800 text-lg font-semibold rounded-full flex content-center flex-wrap">
                Nacional
              </p>

              <div className="content p-4 h-1/2 w-full  bg-gradient-to-t from-black to-transparent flex flex-col justify-center flex-wrap gap-6 rounded-b-lg ">
                <p className="font-bold w-fit text-3xl mt-6">
                  Carretara Austral
                </p>
                <p className=" p-2 px-6 bg-gray-950 text-lg flex w-fit content-center flex-wrap">
                  7 dias y 6 noches
                </p>
                <p className="text-lg">
                  desde <strong>$755.000 CLP</strong>
                </p>
              </div>
            </div>
          </Link>{' '}
          <Link href={''} about="">
            <div className="card relative flex content-center overflow-hidden h-[32rem] text-white justify-items-end items-end rounded-3xl ">
              <Image
                alt=""
                src={img1}
                className=" absolute -z-10 object-cover top-0 h-full "
              />
              <p className="absolute top-0 px-8 py-4 m-4 bg-white text-gray-800 text-lg font-semibold rounded-full flex content-center flex-wrap">
                Nacional
              </p>

              <div className="content p-4 h-1/2 w-full  bg-gradient-to-t from-black to-transparent flex flex-col justify-center flex-wrap gap-6 rounded-b-lg ">
                <p className="font-bold w-fit text-3xl mt-6">
                  Carretara Austral
                </p>
                <p className=" p-2 px-6 bg-gray-950 text-lg flex w-fit content-center flex-wrap">
                  7 dias y 6 noches
                </p>
                <p className="text-lg">
                  desde <strong>$755.000 CLP</strong>
                </p>
              </div>
            </div>
          </Link>{' '}
          <Link href={''} about="">
            <div className="card relative flex content-center overflow-hidden h-[32rem] text-white justify-items-end items-end rounded-3xl ">
              <Image
                alt=""
                src={img1}
                className=" absolute -z-10 object-cover top-0 h-full "
              />
              <p className="absolute top-0 px-8 py-4 m-4 bg-white text-gray-800 text-lg font-semibold rounded-full flex content-center flex-wrap">
                Nacional
              </p>

              <div className="content p-4 h-1/2 w-full  bg-gradient-to-t from-black to-transparent flex flex-col justify-center flex-wrap gap-6 rounded-b-lg ">
                <p className="font-bold w-fit text-3xl mt-6">
                  Carretara Austral
                </p>
                <p className=" p-2 px-6 bg-gray-950 text-lg flex w-fit content-center flex-wrap">
                  7 dias y 6 noches
                </p>
                <p className="text-lg">
                  desde <strong>$755.000 CLP</strong>
                </p>
              </div>
            </div>
          </Link>{' '}
          <Link href={''} about="">
            <div className="card relative flex content-center overflow-hidden h-[32rem] text-white justify-items-end items-end rounded-3xl ">
              <Image
                alt=""
                src={img1}
                className=" absolute -z-10 object-cover top-0 h-full "
              />
              <p className="absolute top-0 px-8 py-4 m-4 bg-white text-gray-800 text-lg font-semibold rounded-full flex content-center flex-wrap">
                Nacional
              </p>

              <div className="content p-4 h-1/2 w-full  bg-gradient-to-t from-black to-transparent flex flex-col justify-center flex-wrap gap-6 rounded-b-lg ">
                <p className="font-bold w-fit text-3xl mt-6">
                  Carretara Austral
                </p>
                <p className=" p-2 px-6 bg-gray-950 text-lg flex w-fit content-center flex-wrap">
                  7 dias y 6 noches
                </p>
                <p className="text-lg">
                  desde <strong>$755.000 CLP</strong>
                </p>
              </div>
            </div>
          </Link>{' '}
          <Link href={''} about="">
            <div className="card relative flex content-center overflow-hidden h-[32rem] text-white justify-items-end items-end rounded-3xl ">
              <Image
                alt=""
                src={img1}
                className=" absolute -z-10 object-cover top-0 h-full "
              />
              <p className="absolute top-0 px-8 py-4 m-4 bg-white text-gray-800 text-lg font-semibold rounded-full flex content-center flex-wrap">
                Nacional
              </p>

              <div className="content p-4 h-1/2 w-full  bg-gradient-to-t from-black to-transparent flex flex-col justify-center flex-wrap gap-6 rounded-b-lg ">
                <p className="font-bold w-fit text-3xl mt-6">
                  Carretara Austral
                </p>
                <p className=" p-2 px-6 bg-gray-950 text-lg flex w-fit content-center flex-wrap">
                  7 dias y 6 noches
                </p>
                <p className="text-lg">
                  desde <strong>$755.000 CLP</strong>
                </p>
              </div>
            </div>
          </Link>{' '}
          <Link href={''} about="">
            <div className="card relative flex content-center overflow-hidden h-[32rem] text-white justify-items-end items-end rounded-3xl ">
              <Image
                alt=""
                src={img1}
                className=" absolute -z-10 object-cover top-0 h-full "
              />
              <p className="absolute top-0 px-8 py-4 m-4 bg-white text-gray-800 text-lg font-semibold rounded-full flex content-center flex-wrap">
                Nacional
              </p>

              <div className="content p-4 h-1/2 w-full  bg-gradient-to-t from-black to-transparent flex flex-col justify-center flex-wrap gap-6 rounded-b-lg ">
                <p className="font-bold w-fit text-3xl mt-6">
                  Carretara Austral
                </p>
                <p className=" p-2 px-6 bg-gray-950 text-lg flex w-fit content-center flex-wrap">
                  7 dias y 6 noches
                </p>
                <p className="text-lg">
                  desde <strong>$755.000 CLP</strong>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}

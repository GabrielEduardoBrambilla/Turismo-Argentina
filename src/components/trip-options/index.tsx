import image2 from "@/assets/imgs/cataratas-argentinas/WhatsApp Image 2024-11-15 at 18.31.50.jpeg";
import image from "@/assets/imgs/ruinas de san ignacio/WhatsApp Image 2024-11-15 at 18.39.27 (1).jpeg";
import Image from "next/image";
import Link from "next/link";

export default function TripOption() {
  return (
    <>
      <section className="mx-auto px-4 md:w-screen lg:w-3/4 lg:max-w-[97rem] lg:px-0">
        <div className="">
          <div className="px-4 py-4 sm:px-6 md:mx-auto md:py-16 lg:px-8">
            <div className="relative mx-auto grid space-y-5 sm:space-y-10">
              {/* Title */}
              <div className="text-center lg:py-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Conquista Tu Mundo
                </p>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  Elegí tu próximo destino turístico
                </h1>
              </div>
            </div>
            <div className="my-4 grid w-full gap-12 md:grid-cols-[55%_45%]">
              {/* Card */}
              <Link href={"/nacional/"} className="group" about="">
                <div className="card relative flex h-[28rem] content-center items-end justify-items-end text-white md:h-[32rem]">
                  <Image
                    alt=""
                    src={image}
                    className="absolute top-0 -z-10 h-full rounded-xl object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:shadow-lg"
                  />

                  <p className="absolute bottom-0 -mx-4 my-4 flex flex-wrap content-center rounded-bl-2xl rounded-br-2xl rounded-tr-2xl bg-blue-200 px-8 py-4 text-lg font-semibold text-gray-800 transition-transform duration-700 ease-in-out group-hover:scale-105">
                    Nacional
                  </p>
                </div>
              </Link>
              <Link href={"/internacional/"} className="group" about="">
                <div className="card relative flex h-[28rem] content-center items-end justify-items-end text-white md:h-[32rem]">
                  <Image
                    alt=""
                    src={image2}
                    className="absolute top-0 -z-10 h-full rounded-xl object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:shadow-lg"
                  />

                  <p className="absolute bottom-0 -mx-4 my-4 flex flex-wrap content-center rounded-bl-2xl rounded-br-2xl rounded-tr-2xl bg-yellow-200 px-8 py-4 text-lg font-semibold text-gray-800 transition-transform duration-700 ease-in-out group-hover:scale-105">
                    International
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

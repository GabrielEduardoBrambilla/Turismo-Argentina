import Image from "next/image";
import Link from "next/link";

import img10 from "@/assets/imgs/publicity/40396e6e-bdb7-45ec-bb06-b00b5236b1d2.jpeg";
import img20 from "@/assets/imgs/publicity/56dceac7-0d28-4f81-a2dc-1fe3276591d4.jpeg";
import img30 from "@/assets/imgs/publicity/c8797558-8c53-46bd-bd22-41a41ddda756.jpeg";

export function FooterCards() {
  return (
    <section className="Planos de viagem mx-2 md:mx-8">
      <h2 className="my-8 text-4xl font-bold">Conoce nuestros tours</h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        <Link href={"./viajens/first"} about="">
          <div className="card relative flex h-[28rem] content-center items-end justify-items-end overflow-hidden rounded-3xl text-white md:h-[32rem]">
            <Image
              alt=""
              src={img30}
              className="absolute top-0 -z-10 h-full object-cover"
            />
            <p className="absolute top-0 m-4 flex flex-wrap content-center rounded-full bg-yellow-200 px-8 py-4 text-lg font-semibold text-gray-800">
              Internacional
            </p>

            <div className="content flex h-3/5 w-full flex-col flex-wrap justify-center gap-6 rounded-b-lg bg-gradient-to-t from-black to-transparent p-4 md:h-1/2">
              <p className="mt-6 w-fit text-3xl font-bold">Carretara Austral</p>
              <p className="flex w-fit flex-wrap content-center bg-gray-950 p-2 px-6 text-lg">
                7 dias y 6 noches
              </p>
              <p className="text-lg">
                desde <strong>$755.000 CLP</strong>
              </p>
            </div>
          </div>
        </Link>
        <Link href={""} about="">
          <div className="card relative flex h-[32rem] content-center items-end justify-items-end overflow-hidden rounded-3xl text-white">
            <Image
              alt=""
              src={img20}
              className="absolute top-0 -z-10 h-full object-cover"
            />
            <p className="absolute top-0 m-4 flex flex-wrap content-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-800">
              Nacional
            </p>

            <div className="content flex h-1/2 w-full flex-col flex-wrap justify-center gap-6 rounded-b-lg bg-gradient-to-t from-black to-transparent p-4">
              <p className="mt-6 w-fit text-3xl font-bold">Carretara Austral</p>
              <p className="flex w-fit flex-wrap content-center bg-gray-950 p-2 px-6 text-lg">
                7 dias y 6 noches
              </p>
              <p className="text-lg">
                desde <strong>$755.000 CLP</strong>
              </p>
            </div>
          </div>
        </Link>
        <Link href={""} about="">
          <div className="card relative flex h-[32rem] content-center items-end justify-items-end overflow-hidden rounded-3xl text-white">
            <Image
              alt=""
              src={img10}
              className="absolute top-0 -z-10 h-full object-cover"
            />
            <p className="absolute top-0 m-4 flex flex-wrap content-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-800">
              Nacional
            </p>

            <div className="content flex h-1/2 w-full flex-col flex-wrap justify-center gap-6 rounded-b-lg bg-gradient-to-t from-black to-transparent p-4">
              <p className="mt-6 w-fit text-3xl font-bold">Carretara Austral</p>
              <p className="flex w-fit flex-wrap content-center bg-gray-950 p-2 px-6 text-lg">
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
  );
}

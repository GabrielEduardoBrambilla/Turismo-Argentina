import cataratasBrasil from "@/assets/imgs/cataratas-brasileiras/b2bf6a03-0e14-4e61-a7a9-260000f2d992.jpeg";
import cataratasBrasilAmanecer from "@/assets/imgs/Por do sol ou amanecer nas cataratas brasileiras/WhatsApp Image 2024-11-15 at 18.27.27 (1).jpeg";
import imgWand from "@/assets/imgs/wanda/WhatsApp Image 2024-11-15 at 18.32.27.jpeg";
import Image from "next/image";
import Link from "next/link";

export function FooterCards() {
  return (
    <section className="Planos de viagem mx-2 md:mx-8">
      <h2 className="my-8 text-4xl font-bold">Conoce nuestros tours</h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        <Link href={"./viajens/cataratas/brasil"} about="">
          <div className="card relative flex h-[28rem] content-center items-end justify-items-end overflow-hidden rounded-3xl text-white md:h-[32rem]">
            <Image
              alt=""
              src={cataratasBrasil}
              className="absolute top-0 -z-10 h-full object-cover"
            />
            <p className="absolute top-0 m-4 flex flex-wrap content-center rounded-full bg-yellow-200 px-8 py-4 text-lg font-semibold text-gray-800">
              Internacional
            </p>

            <div className="content flex h-3/5 w-full flex-col flex-wrap justify-center gap-6 rounded-b-lg bg-gradient-to-t from-black to-transparent p-4 md:h-1/2">
              <p className="mt-6 w-fit text-3xl font-bold">Cataratas Brasil</p>
              <p className="flex w-fit flex-wrap content-center bg-gray-950 p-2 px-6 text-lg">
                4:30 horas
              </p>
              <p className="text-lg">
                apartir de <strong>$42,000</strong>
              </p>
            </div>
          </div>
        </Link>
        <Link href={"/viajens/minas-wanda"} about="">
          <div className="card relative flex h-[32rem] content-center items-end justify-items-end overflow-hidden rounded-3xl text-white">
            <Image
              alt=""
              src={imgWand}
              className="absolute top-0 -z-10 h-full object-cover"
            />
            <p className="absolute top-0 m-4 flex flex-wrap content-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-800">
              Nacional
            </p>

            <div className="content flex h-1/2 w-full flex-col flex-wrap justify-center gap-6 rounded-b-lg bg-gradient-to-t from-black to-transparent p-4">
              <p className="mt-6 w-fit text-3xl font-bold">Minas Wanda</p>
              <p className="flex w-fit flex-wrap content-center bg-gray-950 p-2 px-6 text-lg">
                4 horas
              </p>
              <p className="text-lg">
                desde <strong>$19.200 CLP</strong>
              </p>
            </div>
          </div>
        </Link>

        <Link href={"/cataratas/amanecer"} about="">
          <div className="card relative flex h-[32rem] content-center items-end justify-items-end overflow-hidden rounded-3xl text-white">
            <Image
              alt=""
              src={cataratasBrasilAmanecer}
              className="absolute top-0 -z-10 h-full object-cover"
            />
            <p className="absolute top-0 m-4 flex flex-wrap content-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-800">
              Internacional
            </p>

            <div className="content flex h-1/2 w-full flex-col flex-wrap justify-center gap-6 rounded-b-lg bg-gradient-to-t from-black to-transparent p-4">
              <p className="mt-6 w-fit text-3xl font-bold">
                Cataratas Amanecer
              </p>
              <p className="flex w-fit flex-wrap content-center bg-gray-950 p-2 px-6 text-lg">
                1:00 hora
              </p>
              <p className="text-lg">
                <strong>R$210 reales</strong>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

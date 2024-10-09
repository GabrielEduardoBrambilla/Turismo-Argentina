import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardProps {
  image: StaticImageData;
  international?: boolean;
  name: string;
  duration: string;
  price: string;
  link: string;
}

export default function Card({
  duration,
  image,
  name,
  price,
  international,
  link,
}: CardProps) {
  return (
    <Link href={link} about="">
      <div className="card relative flex h-[28rem] content-center items-end justify-items-end overflow-hidden rounded-3xl text-white md:h-[32rem]">
        <Image
          alt=""
          src={image}
          className="absolute top-0 -z-10 h-full object-cover"
        />

        {international ? (
          <p className="absolute top-0 m-4 flex flex-wrap content-center rounded-full bg-yellow-200 px-8 py-4 text-lg font-semibold text-gray-800">
            International
          </p>
        ) : (
          <p className="absolute top-0 m-4 flex flex-wrap content-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-800">
            Nacional
          </p>
        )}
        <div className="content flex h-3/5 w-full flex-col flex-wrap justify-center gap-6 rounded-b-lg bg-gradient-to-t from-black to-transparent p-4 md:h-1/2">
          <p className="mt-6 w-fit text-3xl font-bold">{name}</p>
          <p className="flex w-fit flex-wrap content-center bg-gray-950 p-2 px-6 text-lg">
            {duration} duracion
          </p>
          <p className="text-lg">
            Precio <strong>${price}</strong>
          </p>
        </div>
      </div>
    </Link>
  );
}

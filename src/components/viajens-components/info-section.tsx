import { Button } from "@/components/ui/button";
import { Util } from "@/Util/Util";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

// interface BannerBar {
//   title: string;
//   message: string;
// }

interface InfoSection {
  infoTitle: string;
  infoMessage: string;
}

interface BulletMessages {
  content: string;
}

interface BulletSection {
  bulletTitle: string;
  bulletMessages: BulletMessages[];
}

interface TripInfoProps {
  imagens: {
    imgBanner: string | StaticImageData;
    imgCardMain: string | StaticImageData;
    imgCardSecondary: string | StaticImageData;
    imgCardThird: string | StaticImageData;
    imgCardFourth: string | StaticImageData;
  };
  text: {
    firstSmallTitle: string;
    mainTitle: string;
    priceHigher: string;
    priceLower: string;
    discountPercent: string;
    description: string;
    infoSection: InfoSection[];
    bulletSection: BulletSection[];
  };
  atencionComponent: ReactNode;
}

const TripInfo: React.FC<TripInfoProps> = ({
  imagens,
  text,
  atencionComponent,
}) => {
  return (
    <div className="hidden gap-6 md:m-auto md:mb-8 md:w-4/5 md:grid-cols-2 lg:grid">
      <div className="image-col top-0 grid h-max grid-cols-2 gap-6">
        <div className="img-wrapper col-span-2">
          <Image
            alt=""
            className="mb-2 w-full rounded-3xl"
            src={imagens.imgBanner}
          />
        </div>
        <Image
          alt=""
          className="h-96 w-full rounded-3xl object-cover"
          src={imagens.imgCardMain}
        />
        <Image
          alt=""
          className="h-96 w-full rounded-3xl object-cover"
          src={imagens.imgCardSecondary}
        />
        <Image
          alt=""
          className="h-96 w-full rounded-3xl object-cover"
          src={imagens.imgCardThird}
        />
        <Image
          alt=""
          className="h-96 w-full rounded-3xl object-cover"
          src={imagens.imgCardFourth}
        />
      </div>
      <div className="Info on desktop content-col sticky top-0 flex h-max min-h-screen flex-col gap-8 text-lg">
        <div className="">
          <h4 className="text-gray-500">{text.firstSmallTitle}</h4>
          <h2 className="mb-2 text-3xl font-bold">{text.mainTitle}</h2>
          <div className="price flex items-end gap-2">
            <p className="font-light text-gray-500 line-through">
              {text.priceHigher}
            </p>{" "}
            <p className="bold text-xl font-normal text-gray-900">
              {text.priceLower}
            </p>
          </div>
          <div className="oferta my-1 flex gap-2 text-center text-base">
            <p className="rounded-2xl bg-emerald-300 p-1 px-4 text-gray-600">
              Oferta
            </p>
            <p className="rounded-2xl bg-gray-300 p-1 px-4">
              {text.discountPercent}
            </p>
          </div>
        </div>
        <div className="">
          <p className="text-lg">{text.description}</p>
        </div>

        {text.infoSection.map((item) => {
          return (
            <>
              {item.infoMessage.length > 0 ? (
                <div className="" key={item.infoTitle}>
                  <h2 className="mb-2 text-2xl font-bold">{item.infoTitle}</h2>
                  <p className="text-lg">{item.infoMessage}</p>
                </div>
              ) : (
                <></>
              )}
            </>
          );
        })}
        {text.bulletSection.map((item) => {
          return (
            <div className="" key={item.bulletTitle}>
              <h2 className="mb-2 text-2xl font-bold">{item.bulletTitle}</h2>
              <p className="text-lg"></p>
              <ol className="text-md list-disc px-8">
                {item.bulletMessages.map((items) => {
                  return (
                    <>
                      <li>{items.content}</li>
                    </>
                  );
                })}
              </ol>
            </div>
          );
        })}

        {atencionComponent}
        <Link target="_blank" href={Util.WhatsappLink}>
          <label htmlFor="button">
            <Button
              id="button"
              className="text-md h-full w-full rounded-none bg-indigo-600 p-6"
            >
              Reservar ahora
            </Button>
          </label>
        </Link>
      </div>
    </div>
  );
};

export default TripInfo;

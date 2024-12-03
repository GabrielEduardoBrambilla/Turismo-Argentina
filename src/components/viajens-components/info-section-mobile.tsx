import { Button } from "@/components/ui/button";
import { Util } from "@/Util/Util";
import Link from "next/link";
import { ReactNode } from "react";

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

interface TripInfoMobileProps {
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

const TripInfoMobile: React.FC<TripInfoMobileProps> = ({
  text,
  atencionComponent,
}) => {
  return (
    <section className="Info on mobile mx-2 max-w-xl md:m-auto lg:hidden">
      <div className="content-row flex flex-col gap-8 text-lg">
        <div className="">
          <h4 className="text-gray-500">{text.firstSmallTitle}</h4>
          <h2 className="mb-2 text-3xl font-bold">{text.mainTitle}</h2>
          <div className="price flex items-end gap-2">
            <p className="font-light text-gray-500 line-through">
              {text.priceHigher}
            </p>
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
        {text.infoSection.map((item) => (
          <div className="" key={item.infoTitle}>
            <h2 className="mb-2 text-2xl font-bold">{item.infoTitle}</h2>
            <p className="text-lg">{item.infoMessage}</p>
          </div>
        ))}
        {text.bulletSection.map((item) => (
          <div className="" key={item.bulletTitle}>
            <h2 className="mb-2 text-2xl font-bold">{item.bulletTitle}</h2>
            <ol className="text-md list-disc px-8">
              {item.bulletMessages.map((bullet, index) => (
                <li key={index}>{bullet.content}</li>
              ))}
            </ol>
          </div>
        ))}
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
    </section>
  );
};

export default TripInfoMobile;

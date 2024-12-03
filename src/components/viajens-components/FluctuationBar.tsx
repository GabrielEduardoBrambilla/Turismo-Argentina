import { Util } from "@/Util/Util";
import React from "react";

interface BannerItem {
  title: string;
  message: string;
}

interface FluctuationBarProps {
  bannerBar: BannerItem[];
}

const FluctuationBar: React.FC<FluctuationBarProps> = ({ bannerBar }) => {
  return (
    <div className="fluctuation-bar absolute -bottom-48 left-1/2 flex w-4/5 -translate-x-1/2 transform flex-col overflow-clip rounded-2xl bg-white drop-shadow-xl md:-bottom-10 md:flex-row lg:max-w-6xl">
      <div className="fluctuation-bar flex w-full flex-col items-center gap-4 p-6 text-center md:flex-row lg:justify-evenly">
        {bannerBar.map((item) => (
          <div className="" key={item.message}>
            <h2 className="font-bold">{item.title}</h2>
            <p className="">{item.message}</p>
          </div>
        ))}
      </div>

      <a target="_blank" rel="noopener noreferrer" href={Util.WhatsappLink}>
        <label htmlFor="button">
          <button
            id="button"
            className="text-md h-full w-full rounded-none bg-indigo-600 p-6 text-white"
          >
            Reservar ahora
          </button>
        </label>
      </a>
    </div>
  );
};

export default FluctuationBar;

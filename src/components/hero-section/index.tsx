import imgCqtm from "@/assets/imgs/Zpublicity/ConquistaTuMundo-SLIDER-01.jpg";
import Image from "next/image";

export default function HeroSectionImageWithReviews() {
  return (
    <>
      {/* Hero */}
      <div className="container max-w-[87rem] py-16 md:py-24 lg:w-4/5">
        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Tours y actividades seleccionadas por nuestros expertos
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Nuestro destino nunca es un lugar, sino una nueva forma de ver
              las. cosas. Servicio 360º – ¡Nos encargamos de todo!
            </p>
            {/* Buttons */}

            {/* End Buttons */}
          </div>
          {/* Col */}
          <div className="relative md:ms-4">
            <Image
              className="w-full rounded-md"
              src={imgCqtm}
              alt="Image Description"
              width={700}
              height={800}
            />
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  );
}

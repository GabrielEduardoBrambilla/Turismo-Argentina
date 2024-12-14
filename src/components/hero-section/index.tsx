import imgCqtm from "@/assets/imgs/Zpublicity/ConquistaTuMundo-SLIDER-01.jpg";
import Image from "next/image";

export default function HeroSectionImageWithReviews() {
  return (
    <>
      {/* Hero */}
      <div className="container py-24 lg:py-32">
        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              CloudMaster: Elevate Your Projects
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Simplify team collaboration with CloudMaster, the ultimate tool
              for efficient project management.
            </p>
            {/* Buttons */}

            {/* End Buttons */}
          </div>
          {/* Col */}
          <div className="relative ms-4">
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

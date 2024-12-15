import cataratasBrasil from "@/assets/imgs/cataratas-brasileiras/b2bf6a03-0e14-4e61-a7a9-260000f2d992.jpeg";
import Image from "next/image";

const reviews = [
  {
    image: cataratasBrasil,
    name: "María Fernández",
    stars: 5,
    review:
      "Una experiencia inolvidable. Todo estuvo perfectamente organizado, desde el transporte hasta las visitas guiadas. ¡Definitivamente volveré!",
  },
  {
    image: cataratasBrasil,
    name: "Carlos López",
    stars: 4,
    review:
      "Muy buen servicio y los destinos fueron espectaculares. Solo un pequeño retraso con el transporte, pero en general, excelente. Definitivamente consideraré otra experiencia con esta compañía.",
  },
  {
    image: cataratasBrasil,
    name: "Lucía Rodríguez",
    stars: 5,
    review:
      "El guía turístico fue increíblemente amable y conocedor. Aprendí mucho mientras disfrutaba de vistas impresionantes. ¡Recomendado al 100%! Me encantó la atención personalizada y la facilidad para realizar el recorrido.",
  },
  {
    image: cataratasBrasil,
    name: "Javier Martínez",
    stars: 4,
    review:
      "La atención al cliente fue muy buena, pero creo que podrían ofrecer más opciones de comidas locales en los paquetes. Aun así, disfruté mucho. Fue una experiencia agradable en general, pero creo que algunos detalles logísticos podrían mejorarse para hacerla aún más memorable.",
  },
  {
    image: cataratasBrasil,
    name: "Sofía González",
    stars: 5,
    review:
      "Paisajes impresionantes y una organización impecable. Me sentí muy cómoda y segura durante todo el viaje. ¡Gracias por esta experiencia mágica! Fue sin duda una de las mejores aventuras que he tenido, y recomendaré esta agencia a todos mis amigos.",
  },
];

export default function CustomerReviewNOTFAKE() {
  const renderStars = (stars: number) => {
    const starArray = Array(stars).fill(0);
    return starArray.map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        className="size-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-[97rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Lea reseñas confiables de nuestros clientes
          </h2>
          <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="mb-8 sm:break-inside-avoid">
                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <Image
                      alt={review.name}
                      src={review.image}
                      className="size-14 rounded-full object-cover"
                      width={100}
                      height={100}
                    />
                    <div>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        {renderStars(review.stars)}
                      </div>
                      <p className="mt-0.5 text-lg font-medium text-gray-900">
                        {review.name}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">{review.review}</p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

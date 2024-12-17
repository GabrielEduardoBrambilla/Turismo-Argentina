import { FaCarSide } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";

export default function Featured() {
  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto max-w-[93rem] px-5 py-24">
          <div className="mb-20 text-center">
            <h2 className="mb-4 font-bold text-gray-900 sm:text-3xl lg:text-5xl">
              Nuestros tours tienen opciones de
            </h2>
            <p className="text-gray-500s mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">
              Estas son algunas de las opciones que puedes elegir para seguir
              nuestros tours.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="inline-flex h-1 w-16 rounded-full bg-blue-500"></div>
            </div>
          </div>
          <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap items-center justify-center space-y-6 sm:-m-4 md:flex-nowrap md:gap-6 md:space-y-0">
            <div className="flex flex-col items-center rounded-lg bg-blue-200 p-6 text-center md:w-full">
              <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <FaCarSide fontSize={32} />
              </div>
              <div className="flex-grow">
                <h2 className="title-font mb-3 h-full text-lg font-medium text-gray-900">
                  Translado
                </h2>
                <p className="text-base leading-relaxed">
                  Ofrecemos un servicio de traslado cómodo y seguro hasta el
                  lugar, garantizando su regreso con total practicidad y
                  tranquilidad durante su viaje.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-blue-200 p-6 text-center md:w-full">
              <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <FaUserCheck fontSize={32} />
              </div>
              <div className="flex-grow">
                <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
                  Guia Bilíngue (Espanhol/Inglês)
                </h2>
                <p className="text-base leading-relaxed">
                  Disfrute de una experiencia completa con nuestros guías
                  bilingües, preparados para ofrecer información y apoyo en
                  español e inglés, asegurando un viaje fluido y enriquecedor
                  para todos los pasajeros.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-blue-200 p-6 text-center md:w-full">
              <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
                  Atención personalizada
                </h2>
                <p className="text-base leading-relaxed">
                  Experimenta un servicio excepcional. Nuestro equipo estará
                  siempre disponible para garantizar que cada detalle de tu
                  experiencia sea inolvidable y único.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

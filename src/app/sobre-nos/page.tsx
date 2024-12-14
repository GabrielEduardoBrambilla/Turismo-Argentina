"use client";

import imgCardMain from "@/assets/imgs/aldea-frtin-mborore/img2.jpeg";
import imgCqtm from "@/assets/imgs/Zpublicity/ConquistaTuMundo-SLIDER-01.jpg";
import Image from "next/image";

export default function TripPage() {
  return (
    <>
      <div className="flex h-[560px] w-full object-cover">
        <Image src={imgCqtm} alt="" className="w-full object-cover" />
      </div>
      <main className="container mx-auto px-4 py-8">
        <section className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Quiéne somos
          </h2>
          <p className="mb-6 text-gray-700">
            Conquista Tu Mundo, es una joven empresa radicada en Puerto Iguazú.
            Nuestra Ciudad es cuna de una de las maravillas naturales del mundo
            “Las Cataratas del Iguazú”, al tiempo que hace frontera con los
            vecinos países Brasil y Paraguay. Somos anfitriones por excelencia,
            y ansiamos nos den la oportunidad de agasajarlos en nuestro destino.
            Nuestra empresa cuenta con un equipo de profesionales altamente
            capacitados tanto en el área operativa como en la de contacto
            directo con el turista, adecuados a todos los protocolos para
            brindar un servicio de calidad y de experiencia ajustado a las
            necesidades de nuestros pasajeros. Nuestras tarifas son muy
            competitivas en el mercado turístico adecuándose a las necesidades
            de nuestros clientes. Como empresa apuntamos a buscar la plena
            satisfacción de nuestros pasajeros con un servicio personalizado,
            hecho a medida para cada uno de ellos, respetando los estándares de
            seguridad, eficiencia y puntualidad. Priorizando, individualidades y
            gustos personales de quienes nos elijan para vivenciar esta
            experiencia. Deseamos construir un vínculo que perdure en el tiempo
            con nuestros pasajeros, basado en la mutua confianza, honestidad y
            respetando los términos acordados previamente. Fieles a nuestro
            nombre, aquí estaremos, esperándolos para conquistar su Mundo.
          </p>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-3 text-xl font-semibold text-gray-800">
              Nuestra Misión
            </h3>
            <p className="text-gray-700">
              Proporcionar aos nossos passageiros uma experiência única e
              personalizada, ajustada às suas necessidades e preferências
              individuais, enquanto garantimos os mais altos padrões de
              segurança, eficiência e pontualidade. Nosso objetivo é construir
              um vínculo duradouro, baseado na confiança mútua, honestidade e
              respeito, oferecendo um serviço de qualidade que permita vivenciar
              momentos inesquecíveis em um dos destinos mais deslumbrantes do
              mundo.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-3 text-xl font-semibold text-gray-800">
              Nuestra Visión
            </h3>
            <p className="text-gray-700">
              Ser reconhecidos como uma referência no setor turístico,
              destacando-nos pela excelência no atendimento personalizado e pela
              criação de experiências memoráveis. Aspiramos fortalecer o vínculo
              com nossos passageiros, consolidando-nos como a principal escolha
              para vivenciar e explorar as riquezas naturais e culturais da
              tríplice fronteira, sempre com respeito, integridade e inovação.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="mb-4 text-xl font-semibold text-gray-800">
            Conoce al equipo
          </h3>
          <div className="-mx-4 flex flex-wrap">
            <div className="mb-8 w-full px-4 sm:w-1/2 lg:w-1/3">
              <div className="rounded-lg bg-white p-6 text-center shadow-lg">
                <Image
                  src={imgCardMain}
                  alt="Team Member"
                  className="mx-auto mb-4 h-24 w-24 rounded-full"
                />
                <h4 className="text-lg font-semibold text-gray-900">Melanie</h4>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

import Card from "@/components/card"; // Import the Card component
import { StaticImageData } from "next/image";
import { useState } from "react";

interface Tour {
  image: StaticImageData;
  international?: boolean;
  name: string;
  duration: string;
  price: string;
  link: string;
}

interface CardListProps {
  tours: Tour[];
}

export default function CardList({ tours }: CardListProps) {
  const [visibleTours, setVisibleTours] = useState(6); // Número inicial de tours visíveis
  const [showAll, setShowAll] = useState(false); // Estado para controlar "Ver Mais/Menos"

  const handleToggleView = () => {
    if (showAll) {
      setVisibleTours(6); // Voltar a mostrar apenas 6 tours
    } else {
      setVisibleTours(tours.length); // Mostrar todos os tours
    }
    setShowAll(!showAll); // Alternar estado entre Ver Mais/Menos
  };

  return (
    <section className="Planos de viagem px-4 md:w-screen lg:m-auto lg:w-4/5">
      <h2 className="my-8 text-5xl font-bold">Conoce nuestros tours</h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {tours.slice(0, visibleTours).map((tour, index) => (
          <Card key={index} {...tour} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={handleToggleView}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          {showAll ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </section>
  );
}

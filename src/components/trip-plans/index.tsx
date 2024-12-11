import Card from "@/components/card"; // Import the Card component
import { StaticImageData } from "next/image";

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
  return (
    <section className="Planos de viagem px-4 md:w-screen lg:m-auto lg:w-4/5">
      <h2 className="my-8 text-5xl font-bold">Conoce nuestros tours</h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour, index) => (
          <Card key={index} {...tour} />
        ))}
      </div>
    </section>
  );
}

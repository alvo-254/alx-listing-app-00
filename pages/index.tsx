import { useState } from "react";
import Image from "next/image";
import Pill from "@/components/common/Pill";
import Card from "@/components/common/Card";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Pet Friendly",
  "Free Parking",
  "Beachfront",
  "Mountain View",
  "Private Pool",
];

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Toggle active pill
  const handleFilterClick = (label: string) =>
    setActiveFilter((prev) => (prev === label ? null : label));

  // Filter properties by selected pill
  const filteredProperties = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((p) => p.category.includes(activeFilter))
    : PROPERTYLISTINGSAMPLE;

  return (
    <>
      {/* ───────────── Hero Section ───────────── */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px] mb-10">
        {/* NOTE: Images in /public are referenced by string path */}
        <Image
          src="/assets/hero.jpg"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
          priority
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Find your favorite place here!
          </h1>
          <p className="mt-2 text-md sm:text-lg md:text-2xl max-w-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* ───────────── Filter Pills ───────────── */}
      <section className="flex flex-wrap gap-3 px-4 py-4 justify-center">
        {filters.map((label) => (
          <Pill
            key={label}
            label={label}
            active={activeFilter === label}
            onClick={() => handleFilterClick(label)}
          />
        ))}
      </section>

      {/* ───────────── Property Listings ───────────── */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-12">
        {filteredProperties.map((property, idx) => (
          <Card key={idx} property={property} />
        ))}
      </section>
    </>
  );
}

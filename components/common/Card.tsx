// components/common/Card.tsx
import React from "react";
import Image from "next/image";
import { PropertyProps } from "@/interfaces";

interface Props {
  property: PropertyProps;
}

const Card: React.FC<Props> = ({ property }) => {
  const { image, title, price, discount, address, offers } = property;

  return (
    <div className="w-[360px] rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition duration-300 cursor-pointer">
      {/* ─────────── Property image ─────────── */}
      <div className="relative w-full h-[240px]">
        <Image
          src={image}
          alt={title}
          fill
          objectFit="cover"
          className="rounded-t-xl"
        />

        {/* Optional discount badge */}
        {discount !== undefined && (
          <span className="absolute top-3 left-3 bg-white text-red-600 text-xs font-semibold px-2 py-1 rounded shadow">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* ─────────── Property details ─────────── */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>

        {/* Address (state is optional) */}
        <p className="text-sm text-gray-500 mb-2">
          {address.city}
          {address.state ? `, ${address.state}` : ""}, {address.country}
        </p>

        <p className="text-base font-bold text-indigo-600 mb-3">
          ${price} / night
        </p>

        {/* Offers */}
        <div className="flex justify-between text-sm text-gray-600">
          <span>🛏 {offers.bed} Beds</span>
          <span>🚿 {offers.shower} Showers</span>
          {offers.occupants && <span>👥 {offers.occupants} People</span>}
        </div>
      </div>
    </div>
  );
};

export default Card;

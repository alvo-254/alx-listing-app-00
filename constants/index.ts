import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Seaview Apartment",
    rating: 4.8,
    price: 120,
    discount: 10,
    address: {
      city: "Mombasa",
      country: "Kenya",
    },
    offers: {
      bed: 2,
      shower: 1,
    },
    image: "/assets/property1.jpg",
    category: ["Top Villa", "Beachfront"],
  },
  {
    name: "Mountain Retreat",
    rating: 4.6,
    price: 95,
    address: {
      city: "Nanyuki",
      country: "Kenya",
    },
    offers: {
      bed: 3,
      shower: 2,
    },
    image: "/assets/property2.jpg",
    category: ["Pet Friendly", "Mountain View"],
  },
  {
    name: "Urban Loft",
    rating: 4.9,
    price: 150,
    discount: 15,
    address: {
      city: "Nairobi",
      country: "Kenya",
    },
    offers: {
      bed: 1,
      shower: 1,
    },
    image: "/assets/property3.jpg",
    category: ["Free Parking", "Self Checkin"],
  },
  {
    name: "Private Pool Paradise",
    rating: 4.7,
    price: 200,
    address: {
      city: "Diani",
      country: "Kenya",
    },
    offers: {
      bed: 4,
      shower: 3,
    },
    image: "/assets/property4.jpg",
    category: ["Top Villa", "Private Pool"],
  },
];

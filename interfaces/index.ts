export interface AddressProps {
  state?: string;         // Optional state
  city: string;
  country: string;
}

export interface OfferProps {
  bed: number;            // Number type for count
  shower: number;
  occupants?: number;     // Optional
}

export interface PropertyProps {
  title: string;          // Title of the property
  rating: number;         // Rating value (e.g. 4.5)
  price: number;          // Use number for calculations
  discount?: number;      // Optional discount
  address: AddressProps;  // Reuse structured address
  offers: OfferProps;     // Renamed from 'facilities' to 'offers'
  image: string;          // Image path or URL
  category: string[];     // Array of categories (e.g. ["Luxury", "Apartment"])
}

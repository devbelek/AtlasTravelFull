import { CityInfo } from "./city";

interface Image {
  id: number;
  image: string;
}

export interface Tour {
  id: number;
  title: string;
  title_ru: string;
  title_ky: string;
  title_en: string;
  description_ru: string;
  description_ky: string;
  description_en: string;
  start_tour: string;
  end_tour: string;
  departure_date: string;
  nights: number;
  from_city: number;
  to_city: number;
  rating: number;
  manual_rating: number;
  rating_quantity: number;
  rating_count: number;
  average_rating: number;
  image: Image;
  cityInfo: CityInfo;
  linkTo: string;
}

export interface Hotel {
  id: number;
  rating_quantity: number;
  image: Image;
  title: string;
  title_ru: string;
  title_ky: string;
  title_en: string;
  description_ru: string;
  description_ky: string;
  description_en: string;
  address: string;
  city: string;
  start_tour: string;
  end_tour: string;
  departure_date: string;
  nights: number;
  from_city: number;
  to_city: number;
  rating: number;
  manual_rating: number;
  rating_count: number;
  average_rating: number;
  cityInfo: CityInfo;
  linkTo: string;
}

export interface Flight {
  id: number;
  image: Image;
  title: string;
  title_ru: string;
  title_ky: string;
  title_en: string;
  description_ru: string;
  description_ky: string;
  description_en: string;
  departure_city: string;
  arrival_city: string;
  departure_date: string;
  arrival_date: string;
  start_tour: string;
  end_tour: string;
  nights: number;
  from_city: number;
  to_city: number;
  rating: number;
  manual_rating: number;
  rating_quantity: number;
  rating_count: number;
  average_rating: number;
  cityInfo: CityInfo;
  linkTo: string;
}

export interface Transfer {
  id: number;
  image: Image;
  title: string;
  title_ru: string;
  title_ky: string;
  title_en: string;
  description_ru: string;
  description_ky: string;
  description_en: string;
  pickup_location: string;
  dropoff_location: string;
  transfer_date: string;
  start_tour: string;
  end_tour: string;
  departure_date: string;
  nights: number;
  from_city: number;
  to_city: number;
  rating: number;
  manual_rating: number;
  rating_quantity: number;
  rating_count: number;
  average_rating: number;
  cityInfo: CityInfo;
  linkTo: string;
}

export interface TourDetailsInterface {
  id: number;
  images: Image[];
  tags: Tag[];
  comments: Comment[];
  title: string;
  title_ru: string;
  title_ky: string;
  title_en: string;
  description: string;
  description_ru: string;
  description_ky: string;
  description_en: string;
  start_tour: string;
  end_tour: string;
  departure_date: string;
  return_date: string;
  nights: number;
  manual_rating: number;
  average_rating: number;
  rating_count: number;
  is_best_choice: boolean;
  is_rest_idea: boolean;
  from_city: number;
  to_city: number;
}

export interface Tag {
  id: number;
  icon: string;
  name: string;
  name_ru: string;
  name_ky: string;
  name_en: string;
}

export interface Comment {
  id: number;
  rate: number;
  full_name: string;
  phone_number: string | null;
  text: string;
  date: string;
  is_approved: boolean;
  is_processed: boolean;
  tour: number;
}

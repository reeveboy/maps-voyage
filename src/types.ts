export type Tour = {
  tourName: string;
  stars: number;
  days: number;
  description?: string;
  groupSize: string;
  cartegory?: string;
  location: string;
  cardImage: string;
  images: string[];
  overview?: string;
  tourPlan?: TourPlan[];
};

export type TourPlan = {
  day: number;
  title: string;
  description: string;
};

export type Destination = {
  destinationName: string;
  tours: number;
  imgUrl: string;
};

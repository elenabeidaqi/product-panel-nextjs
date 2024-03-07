import { IProductRating } from "./IProductRating";

export interface IProducts {
  category: string;
  description: string;
  id: number;
  image : string;
  price : number;
  title : string;
  rating : IProductRating;
  count : number;
}

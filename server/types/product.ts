export interface ProductType {
  product_name: string;
  brand: string;
  product_price: number;
  product_rating: number;
  product_img: string[];
  discounted_price?: number;
  product_category: string[];
}

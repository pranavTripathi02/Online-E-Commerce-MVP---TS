export interface FilterType {
  title?: string | null;
  seller?: string | null;
  price_low?: number | null;
  price_high?: number | null;
  review?: number | null;
}

export interface ProductType {
  title: string;
  selling_price: string;
  product_rating?: number;
  image_links: string;
  category_1: string;
  mrp: string;
  _id: string;
}

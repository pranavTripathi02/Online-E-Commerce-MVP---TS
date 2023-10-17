export interface FilterType {
    title?: string | null;
    seller?: string | null;
    price?: { min: number; max: number } | null;
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

export interface CartProductType {
    title: string;
    selling_price: string;
    image_links: string;
    mrp: string;
    _id: string;
    quantity: number;
}

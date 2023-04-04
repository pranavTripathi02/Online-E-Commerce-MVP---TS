import { FilterType, ProductType } from '../types';

const filterTitle = (array: any, title: string) => {
  return array.filter((item: ProductType) =>
    item.title.toLowerCase().includes(title.toLowerCase())
  );
};

const filterReviews = (array: any, review: number) => {
  return array.filter((item: ProductType) => {
    if (item.product_rating) return item.product_rating >= review;
  });
};

const filterPrice = (array: any, price: { min: number; max: number }) => {
  return array.filter(
    (item: ProductType) =>
      parseInt(item.selling_price.slice(1)) >= price.min &&
      parseInt(item.selling_price.slice(1)) <= price.max
  );
};

export default (array: any, filterList: FilterType) => {
  if (filterList.title) array = filterTitle(array, filterList.title);
  if (filterList.review) array = filterReviews(array, filterList.review);
  if (filterList.price) array = filterPrice(array, filterList.price);
  return array;
};

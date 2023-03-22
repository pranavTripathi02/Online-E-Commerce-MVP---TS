import { ProductType } from '../types';

// export default filterProducts = (array: any) => {
export const filterTitle = (array: any, title: string | undefined | null) => {
  if (title)
    return array.filter((item: ProductType) =>
      item.title.toLowerCase().includes(title.toLowerCase())
    );
  else return array;
};
export const filterReviews = (
  array: any,
  review: number | undefined | null
) => {
  if (review !== undefined && review !== null)
    return array.filter((item: ProductType) => {
      if (item.product_rating) return item.product_rating >= review;
    });
  else return array;
};
// };

// export const filterTitle = (array, title) => {
//   return array.filter((item) => item.title === title);
// };

// export const filterTitle = (array, title) => {
//   return array.filter((item) => item.title === title);
// };

// export const filterTitle = (array, title) => {
//   return array.filter((item) => item.title === title);
// };

import { ProductType } from '../types';

export const filterTitle = (array: any, title: string | undefined) => {
  if (title)
    return array.filter((item: ProductType) =>
      item.title.toLowerCase().includes(title.toLowerCase())
    );
  else return array;
};

// export const filterTitle = (array, title) => {
//   return array.filter((item) => item.title === title);
// };

// export const filterTitle = (array, title) => {
//   return array.filter((item) => item.title === title);
// };

// export const filterTitle = (array, title) => {
//   return array.filter((item) => item.title === title);
// };

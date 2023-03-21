import { ProductType } from '../types';

const fetchProducts = async () => {
  try {
    const url: string = 'http://localhost:8080/api/v1/products';
    const response = await fetch(url);
    if (response.ok) {
      try {
        const json = await response.json();
        return json.productList;
      } catch (err) {
        console.error(err);
      }
    }
    // console.log(response.json());
  } catch (err) {
    console.error('Error fetching products\n', err);
  }
  // const name = response;
  // console.log(response);
};

export { fetchProducts };

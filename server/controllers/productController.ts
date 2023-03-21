import { StatusCodes } from 'http-status-codes';
import { ProductType } from '../types/product';
import Product from '../models/Product';

const getAllProducts = async (_req: any, res: any) => {
  const productList: ProductType[] = await Product.find({});
  // console.log('Req /products');
  res.status(StatusCodes.OK).json({ productList });
};

const getProduct = async (req: any, res: any) => {
  const id: string = req.params.id;
  const product: ProductType[] = await Product.find({ _id: id });
  res.status(StatusCodes.OK).json({ product });
};

export { getAllProducts, getProduct };

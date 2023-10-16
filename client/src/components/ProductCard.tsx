import { faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { addToCart } from '../reducer/features/cart/cartSlice';
import { CartProductType, ProductType } from '../types';

export default function ProductCard({ product }: { product: ProductType }) {
    const { image_links, product_rating, title, selling_price, mrp } = product;
    const dispatch = useDispatch();

    const handleAddToCart = (product: ProductType) => {
        console.log("adding to cart", product);
        const productInfo: CartProductType = {
            _id: product._id,
            title: product.title,
            image_links: product.image_links,
            mrp: product.mrp,
            quantity: 1

        }

        dispatch(addToCart({ productInfo }));
    }

    // console.log(product)
    return (
        <div className='relative bg-transparent h-[30rem] w-72 hover:shadow-lg hover:shadow-[var(--primary)] ease-in-out duration-100 cursor-pointer'>
            <div className='img-container h-3/5'> {/* Product Image */}
                <img src={image_links} alt='' className='h-full p-2 m-auto' />
            </div>
            <div> {/* Reviews */}
                <span className='absolute right-0 top-0 text-xl px-2 backdrop-opacity-20 backdrop-invert'>
                    {product_rating}
                    <FontAwesomeIcon icon={faStar} className='ms-2 text-yellow-400' />
                </span>
            </div>
            <div className='h-2/5 text-center border-t border-[var(--primary)] p-1 pt-2 overflow-hidden'>
                <p>{title}</p>
                <div className='flex justify-center items-end'>
                    <p className='text-2xl font-bold pr-2'>{selling_price}</p>
                    <span className='text-sm font-light'>
                        <s>MRP:{mrp}</s>
                    </span>
                </div>
            </div>
            <div className="absolute flex bottom-2 w-full justify-center p-2">
                <button
                    className="border p-2 rounded-lg hover:bg-[var(--accent)]"
                    onClick={() => handleAddToCart(product)}
                >
                    <FontAwesomeIcon
                        icon={faCartPlus}
                        size="xl"
                    />
                    <span
                        className='mx-2'>
                        Add to cart
                    </span>
                </button>
            </div>
        </div >
    );
}

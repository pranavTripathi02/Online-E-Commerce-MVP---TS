import { faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProductType } from '../types';

export default function ProductCard({ product }: { product: ProductType }) {
    const { image_links, product_rating, title, selling_price, mrp } = product;
    console.log(product)
    return (
        <div className='relative bg-transparent h-[30rem] w-72 my-5 border-2 border-[var(--primary)] hover:shadow-lg hover:shadow-[var(--secondary)] transition-shadow ease-in-out duration-200 cursor-pointer'>
            <div className='img-container h-3/5'>
                <img src={image_links} alt='' className='h-full p-2 m-auto' />
            </div>
            <span className='absolute right-0 top-0 text-xl text-[var(--primary)]'>
                {product_rating}
                <FontAwesomeIcon icon={faStar} className='text-yellow-400' />
            </span>
            <div className='h-2/5 absolute text-center border-t-2 border-[var(--primary)] p-1 pt-2 overflow-hidden hover:text-[var(--accent)] cursor'>
                <p>{title}</p>
                <div className='flex justify-center items-end'>
                    <p className='text-2xl font-bold pr-2'>{selling_price}</p>
                    <span className='text-sm font-light'>
                        MRP <s>{mrp}</s>
                    </span>
                </div>
            </div>
            <div className="absolute flex bottom-2 w-full justify-center p-2">
                <div className=" border border-[var(--accent)] hover:bg-[var(--accent)] bg-[var(--primary)] p-2 rounded-xl">
                    <FontAwesomeIcon
                        icon={faCartPlus}
                        size="xl"
                    />
                    <span
                        className='mx-2'>
                        Add to cart
                    </span>
                </div>
            </div>
        </div >
    );
}

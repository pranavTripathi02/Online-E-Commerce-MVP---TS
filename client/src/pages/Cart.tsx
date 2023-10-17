import { useAppSelector } from "../hooks";
import { CartProductType } from "../types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../reducer/features/cart/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faRemove } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
    const cartProducts: CartProductType[] = useAppSelector((state) => state.cart);
    // console.log(cartProducts)

    const [subTotal, setSubTotal] = useState(0);
    const [savings, setSavings] = useState(0);

    const dispatch = useDispatch();
    const changeQuantity = (x: string, productInfo: CartProductType) => {
        console.log('here', x, productInfo);
        if (x === 'inc')
            dispatch(increaseQuantity({ productInfo }));
        else if (x === 'dec')
            dispatch(decreaseQuantity({ productInfo }));
        else
            dispatch(removeFromCart({ productInfo }));

    }
    // const [couponErr, setCouponErr] = useState(false);
    // const [couponCode, setCouponCode] = useState('');
    //
    //
    // const handleCouponSubmit = (e: any) => {
    //     setCouponErr(true);
    //     e.target.value = '';
    //     setTimeout(() => setCouponErr(false), 1000);
    // }

    useEffect(() => {
        setSubTotal(cartProducts.reduce((acc, item) => {
            return acc + (parseInt(
                item.selling_price.slice(1).replace(',', '')
            ) * item.quantity);
        }, 0)
        );
        setSavings(cartProducts.reduce((acc, item) => {
            return acc + (parseInt(
                item.mrp.slice(1).replace(',', '')
            ) * item.quantity);
        }, 0))
    }, [cartProducts])

    if (!cartProducts || cartProducts.length < 1) {
        return <>
            <h1>Empty Cart</h1>
        </>
    }

    return <>
        <div className="flex flex-col space-y-8 m-4">
            {cartProducts.map((item, idx) =>
                <>
                    <div
                        key={idx}
                        // className="flex justify-between mx-5">
                        className="grid grid-cols-9 items-center border-2 border-[var(--primary)] p-5">
                        <div className="flex col-span-7 items-center space-x-4 overflow-ellipsis"> {/* product image and title */}
                            <img
                                className="h-[50px] w-[50px]"
                                src={item.image_links}
                                alt="" />
                            <span>{item.title}</span>
                        </div>
                        <div> {/* quantity and inc dec buttons */}
                            <button
                                onClick={() => changeQuantity('dec', item)}
                            >
                                <FontAwesomeIcon
                                    size='xs'
                                    icon={faMinus} />
                            </button>
                            <span className="mx-2">{item.quantity}</span>
                            <button
                                onClick={() => changeQuantity('inc', item)}
                            >
                                <FontAwesomeIcon
                                    size='xs'
                                    icon={faPlus} />
                            </button>
                        </div>
                        <div
                            className="flex justify-between"
                        > {/* total price */}
                            <span>₹{parseInt(item.selling_price.slice(1).replace(',', '')) * item.quantity}</span>
                            <button
                                className="text-red-500"
                                onClick={() => changeQuantity('res', item)}
                            >
                                <FontAwesomeIcon
                                    size='lg'
                                    icon={faRemove} />
                            </button>
                        </div>
                    </div>
                </>
            )}
            <div className="w-1/2 mr-0 ms-auto my-5 px-20 border border-[var(--secondary)] relative self-end flex flex-col"> {/* total & checkout */}
                <div className="flex justify-between mt-5 
                text-lg font-semibold">
                    <span>Cart Subtotal:</span>
                    <span>₹{subTotal}</span>
                </div>
                <div className="flex justify-between mb-5 text-sm"> {/* selling-mrp */}
                    <span className="pl-5">Total savings:</span>
                    <span>₹{savings - subTotal}</span>
                </div>
                <div className="self-end flex space-x-4 justify-end"> {/* coupon */}
                    <span>use coupon</span>
                    <input
                        className="w-1/3 outline-none focus:outline-[var(--primary)]"
                        type="text"
                    />
                </div>
                <button
                    className="self-center p-2 rounded-xl mt-5
                    bg-[var(--primary)] hover:bg-[var(--accent)]"
                >
                    Checkout
                </button>
                <Link
                    className="self-center my-5 underline hover:text-[var(--primary)]"
                    to="/">
                    continue shopping
                </Link>
            </div>
        </div >
    </>;
}

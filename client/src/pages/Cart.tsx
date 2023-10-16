import { useAppSelector } from "../hooks";
import { CartProductType } from "../types";

export default function Cart() {
    const cartProducts: CartProductType[] = useAppSelector((state) => state.cart);
    console.log(cartProducts);

    return <></>;
}

import { IProduct } from "./product";

export type ICartProduct = {
    quantity: number;
    value: number;
} & IProduct


export interface UseCartHook {
    addProduct: (data: ICartProduct) => void
    getCart: () => ICartProduct[]
}


import { ICartProduct, UseCartHook, } from "@/domain/cart"

export const useProduct = (): UseCartHook => {

    const products: ICartProduct[] = [
        { id: 1, name: "Product 1", description: "Description 1", price: 10, value: 10, quantity: 2 },
        { id: 2, name: "Product 2", description: "Description 2", price: 10, value: 20, quantity: 2 }
    ];
    const addProduct = (data: ICartProduct) => {
        console.log(data)
        return
    }
    const getCart = (): ICartProduct[] => {
        return products
    }
    return {
        addProduct,
        getCart
    }
}
import { IProductList, UseProductHook } from "@/domain/product"

export const useProduct = (): UseProductHook => {

    const productList: IProductList[] = [
        { id: 1, name: "Product 1", description: "Description 1", price: 10 },
        { id: 2, name: "Product 2", description: "Description 2", price: 20 }
    ];

    const getProducts = (): IProductList[] => {
        return productList
    }
    
    return {
        getProducts
    }
}

export interface UseProductHook {
    getProducts: () => IProductList[]
}

export interface IProductList {
    id: number;
    name: string
    description: string;
    price: number;
}

export interface IProduct {
    id: number;
    name: string
    description: string;
    price: number;
}

import { createContext } from 'react';
import { Product } from '../../interfaces';
export interface ProductInCart extends Product {
	count: number;
}
interface CartContextValues {
	cart: ProductInCart[];
	setCart: React.Dispatch<React.SetStateAction<ProductInCart[]>>;
}
export const CartContext = createContext({} as CartContextValues);

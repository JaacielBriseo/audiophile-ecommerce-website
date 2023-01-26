import { createContext } from 'react';
import { Product } from '../../interfaces';
interface ProductInCart extends Product {
	count: number;
}
interface CartContextValues {
	cart: {
		[key: string]: ProductInCart;
	};
	setCart: React.Dispatch<
		React.SetStateAction<{
			[key: string]: ProductInCart;
		}>
	>;
}
export const CartContext = createContext({} as CartContextValues);

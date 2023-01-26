import { CartContext } from './CartContext';
import { useState } from 'react';

interface Props {
	children: React.ReactNode | React.ReactNode[];
}

export const CartProvider: React.FC<Props> = ({ children }) => {
	const [cart, setCart] = useState({});

	return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>;
};

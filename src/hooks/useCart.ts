import { useContext } from 'react';
import { CartContext } from '../context';

export const useCart = () => {
	const { cart, setCart } = useContext(CartContext);
	const incrementProductCount = (id: number) => {
		setCart(currentCart => {
			const updatedCart = currentCart.map(item => {
				if (item.id === id) {
					return { ...item, count: item.count + 1 };
				}
				return item;
			});
			return updatedCart;
		});
	};
	const decrementProductCount = (id: number) => {
		setCart(currentCart => {
			const updatedCart = currentCart.map(item => {
				if (item.id === id) {
					return { ...item, count: item.count - 1 };
				}
				return item;
			});
			return updatedCart.filter(item => item.count > 0);
		});
	};
	const removeAllProductsFromCart = () => {
		setCart([]);
	};

	return {
		cart,
		decrementProductCount,
		incrementProductCount,
    removeAllProductsFromCart
	};
};

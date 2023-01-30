import { useCart } from '../../hooks';
import { CartItem } from '.';

export const CartModalContent = () => {
	const { cart, removeAllProductsFromCart, totalWithFormat } = useCart();
	return (
		<>
			<div className='flex justify-between'>
				<h1 className='text-lg font-bold'>Cart( {cart.length} )</h1>
				<button onClick={removeAllProductsFromCart}>Remove all</button>
			</div>
			<div className='space-y-5'>
				{cart.map(item => (
					<CartItem item={item} key={item.id} renderQuantityController />
				))}
			</div>
			<div className='flex justify-between'>
				<p className='text-VeryBlack opacity-50 text-[15px] leading-6 uppercase'>Total</p>
				<p className='font-bold text-lg'>${totalWithFormat}</p>
			</div>
		</>
	);
};

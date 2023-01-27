import { useCart } from '../hooks';

export const CartModalContent = () => {
	const { cart, decrementProductCount, incrementProductCount, removeAllProductsFromCart } = useCart();
	return (
		<>
			<div className='flex justify-between'>
				<h1 className='text-lg font-bold'>Cart( {cart.length} )</h1>
				<button onClick={removeAllProductsFromCart}>Remove all</button>
			</div>
			<div className='space-y-5'>
				{cart.map(item => (
					<div key={item.id} className='flex justify-between items-center'>
						<img src={item.image.mobile} alt='' className='w-16 h-16 rounded-md' />
						<div className='w-1/3'>
							<p className='font-bold text-[15px]'>{item.name.substring(0, item.name.lastIndexOf(' '))}</p>
							<p className='text-VeryBlack opacity-50 text-sm'>${item.price}</p>
						</div>
						<div className='bg-VeryLightGrey w-24 h-8 flex items-center justify-between px-3 rounded'>
							<button onClick={() => decrementProductCount(item.id)}>-</button>
							<small className='font-bold'>{item.count}</small>
							<button onClick={() => incrementProductCount(item.id)}>+</button>
						</div>
					</div>
				))}
			</div>
			<div className='flex justify-between'>
				<p className='text-VeryBlack opacity-50 text-[15px] leading-6 uppercase'>Total</p>
				<p className='font-bold text-lg'>${cart.reduce((acc, item) => acc + item.price * item.count, 0)}</p>
			</div>
			
		</>
	);
};

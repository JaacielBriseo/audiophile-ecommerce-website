import { useCartContext } from '../../hooks';
export const ThanksModalContent = () => {
	const { cart } = useCartContext();
	let options = {
		style: 'decimal',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	};
	const totalWithFormat = new Intl.NumberFormat('en-US', options).format(
		cart.reduce((acc, item) => acc + item.price * item.count, 0)
	);

	return (
		<div className='flex flex-col space-y-5'>
			<img src='/assets/checkout/icon-order-confirmation.svg' alt='' className='w-16 h-16' />
			<h1 className='font-bold text-2xl uppercase tracking-widest'>Thank you for your order</h1>
			<p className='font-medium opacity-50 text-[15px]'>You will receive an email confirmation shortly.</p>
			<div className='h-60 rounded-md shadow'>
				<div className='bg-VeryLightGrey h-[60%] flex flex-col items-center p-8'>
					<div className='flex w-full justify-between items-center'>
						<img src={cart[0]?.image.mobile} alt='' className='h-16 w-16' />
						<div className='flex flex-col -ml-8'>
							<span className='font-bold text-[15px]'>{cart[0]?.name.substring(0, cart[0].name.lastIndexOf(' '))}</span>
							<span className='font-bold text-sm opacity-50'>${cart[0]?.price}</span>
						</div>
						<p className='font-bold text-sm opacity-50'>x{cart[0]?.count}</p>
					</div>
					<div className='bg-gray-800 w-full h-1 border-t-2' />
					<div>and {cart.length} other item(s)</div>
				</div>
				<div className='bg-VeryBlack h-[40%] rounded-b-md flex flex-col p-5 space-y-2'>
					<p className='text-White opacity-50 font-medium text-[15px] uppercase'>Grand Total</p>
					<p className='text-White font-bold text-lg'>${totalWithFormat}</p>
				</div>
			</div>
		</div>
	);
};

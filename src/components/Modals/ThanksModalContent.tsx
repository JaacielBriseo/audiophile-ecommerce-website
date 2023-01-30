import { useCart } from '../../hooks';
import { CartListInThanksModal } from '.';

export const ThanksModalContent = () => {
	const { totalWithFormat } = useCart();

	return (
		<div className='flex flex-col space-y-5'>
			<img src='/assets/checkout/icon-order-confirmation.svg' alt='Order' className='w-16 h-16' />
			<h1 className='font-bold text-2xl uppercase tracking-widest'>Thank you for your order</h1>
			<p className='font-medium opacity-50 text-[15px]'>You will receive an email confirmation shortly.</p>
			<div className='min-h-60 rounded-md shadow'>
				<CartListInThanksModal />
				<div className='bg-VeryBlack h-[40%] rounded-b-md flex flex-col p-5 space-y-2'>
					<p className='text-White opacity-50 font-medium text-[15px] uppercase'>Grand Total</p>
					<p className='text-White font-bold text-lg'>${totalWithFormat}</p>
				</div>
			</div>
		</div>
	);
};

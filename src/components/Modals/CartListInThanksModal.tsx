import { useState } from 'react';
import { useCart } from '../../hooks';
import { CartItem } from '.';

export const CartListInThanksModal = () => {
	const [showOtherItems, setShowOtherItems] = useState(false);
	const { cart } = useCart();
	return (
		<div className='bg-VeryLightGrey h-[60%] flex flex-col items-center p-8'>
			{cart.map((item, index) => {
				if (index === 0 || showOtherItems) {
					return <CartItem item={item} key={item.id} />;
				}
				return null;
			})}
			{cart.length > 1 && (
				<>
					<div className='bg-gray-500 w-full border-t-2' />
					<div
						onClick={() => setShowOtherItems(current => !current)}
						className='text-BurntOrange text-[15px] font-semibold'>
						{!showOtherItems ? `and ${cart.length - 1} other item(s)` : 'Hide items'}
					</div>
				</>
			)}
		</div>
	);
};

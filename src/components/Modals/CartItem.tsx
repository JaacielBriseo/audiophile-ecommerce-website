import { ProductInCart } from '../../context';
import { ProductQuantityController } from '.';

export const CartItem = ({
	item,
	renderQuantityController = false,
}: {
	item: ProductInCart;
	renderQuantityController?: boolean;
}) => {
	return (
		<div className='w-full flex justify-between items-center'>
			<img src={item.image.mobile} alt={item.name} className='h-16 w-16' />
			<div className='flex flex-col -ml-8'>
				<span className='font-bold text-[15px]'>{item.name.substring(0, item.name.lastIndexOf(' '))}</span>
				<span className='font-bold text-sm opacity-50'>${item.price}</span>
			</div>
			{renderQuantityController ? (
				<ProductQuantityController item={item} />
			) : (
				<p className='font-bold text-sm opacity-50'>x{item.count}</p>
			)}
		</div>
	);
};

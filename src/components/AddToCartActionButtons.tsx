import { useContext, useState } from 'react';
import { CartContext } from '../context';
import { Product } from '../interfaces';
interface Props {
	product: Product;
}
export const AddToCartActionButtons: React.FC<Props> = ({ product }) => {
	const [productCount, setProductCount] = useState<number>(0);
	const { cart, setCart } = useContext(CartContext);

	return (
		<div className='h-12 w-[296px] flex justify-between'>
			<div className='w-[120px] h-full bg-VeryLightGrey flex items-center justify-around'>
				<button onClick={() => setProductCount(current => Math.max(current - 1, 0))}>-</button>
				{productCount}
				<button onClick={() => setProductCount(current => current + 1)}>+</button>
			</div>
			<button
				disabled={productCount === 0}
				onClick={() =>
					setCart({
						...cart,
						[product.id]: { ...product, count: productCount },
					})
				}
				type='button'
				className='w-[160px] h-full bg-BurntOrange text-White disabled:bg-opacity-70 disabled:cursor-not-allowed'>
				add to cart
			</button>
		</div>
	);
};

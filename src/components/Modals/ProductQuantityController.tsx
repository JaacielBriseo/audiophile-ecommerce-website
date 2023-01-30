import { ProductInCart } from '../../context';
import { useCart } from '../../hooks';
interface Props {
	item: ProductInCart;
}
export const ProductQuantityController: React.FC<Props> = ({ item }) => {
	const { decrementProductCount, incrementProductCount } = useCart();
	return (
		<div className='bg-VeryLightGrey w-24 h-8 flex items-center justify-between px-3 rounded'>
			<button onClick={() => decrementProductCount(item.id)}>-</button>
			<small className='font-bold'>{item.count}</small>
			<button onClick={() => incrementProductCount(item.id)}>+</button>
		</div>
	);
};

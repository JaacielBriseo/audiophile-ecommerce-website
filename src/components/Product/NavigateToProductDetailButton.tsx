import { NavLink } from 'react-router-dom';
import { Product } from '../../interfaces';
interface Props {
	product: Product;
}
export const NavigateToProductDetailButton: React.FC<Props> = ({ product }) => {
	return (
		<NavLink
			to={`/product-detail/${product.category}/${product.id}`}
			className='py-3 px-6 uppercase bg-BurntOrange text-White font-bold text-xs md:py-6 md:px-10 md:text-sm'>
			see product
		</NavLink>
	);
};

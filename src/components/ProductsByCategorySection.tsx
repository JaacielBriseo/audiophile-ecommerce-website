import { Product } from '../interfaces';
import { ProductCard } from '.';
interface Props {
	products: Product[];
}
export const ProductsByCategorySection: React.FC<Props> = ({ products }) => {
	return (
		<div className='p-5 space-y-24'>
			{products.map(product => (
				<ProductCard product={product} key={product.id} renderingInPage='category' />
			))}
		</div>
	);
};

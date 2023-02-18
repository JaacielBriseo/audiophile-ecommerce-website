import { Product } from '../../interfaces';
import { ProductCard } from '..';
interface Props {
	products: Product[];
}
export const ProductsByCategorySection: React.FC<Props> = ({ products }) => {
	const sortedProductsByNew = products.sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1));

	return (
		<div className='p-5 space-y-24 md:p-16'>
			{sortedProductsByNew.map(product => (
				<ProductCard product={product} key={product.id} renderingInPage='category' />
			))}
		</div>
	);
};

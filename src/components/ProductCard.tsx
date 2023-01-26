import { Product } from '../interfaces/interfaces';
interface Props {
	products: Product[];
}
export const ProductCard: React.FC<Props> = ({ products }) => {
	return (
		<div>
			<div>
				{products.map(product => (
					<h1 key={product.id}>{product.name}</h1>
				))}
			</div>
		</div>
	);
};

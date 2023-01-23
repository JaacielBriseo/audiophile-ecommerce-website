import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../context';

export const CategoryPage = () => {
	const { category } = useParams();
	const { products } = useContext(ProductsContext);
	const productsToShow = products.filter(product => product.category === category);
	return (
		<div>
			<h3>Category: {category}</h3>
			<ul>
				{productsToShow.map(product => (
					<li key={product.id}>{product.name}</li>
				))}
			</ul>
		</div>
	);
};

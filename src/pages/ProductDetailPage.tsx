import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../context';

export const ProductDetailPage = () => {
	const { category, id } = useParams();
	const { products } = useContext(ProductsContext);
	const product = products.find(product => product.category === category && product.id === Number(id));
	return (
		<div>
			<h3>Product: {product && product.name}</h3>
			<p>Category: {product && product.category}</p>
			<p>Description: {product && product.description}</p>
		</div>
	);
};

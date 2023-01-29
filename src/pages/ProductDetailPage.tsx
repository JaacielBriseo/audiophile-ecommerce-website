import { useParams } from 'react-router-dom';
import { AdvertisingSection, CategoriesSection, Product } from '../components';
import { useProductsContext } from '../hooks';

export const ProductDetailPage = () => {
	const { category, id } = useParams();
	const { products } = useProductsContext();
	const product = products.find(product => product.category === category && product.id === Number(id));
	if (!product) {
		return (
			<h1>
				Not product with id:{id} / category:{category}
			</h1>
		);
	}
	return (
		<div className='p-5 space-y-24'>
			<Product product={product} />
			<CategoriesSection />
			<AdvertisingSection />
		</div>
	);
};

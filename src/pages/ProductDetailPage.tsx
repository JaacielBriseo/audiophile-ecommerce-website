import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
	AdvertisingSection,
	CategoriesSection,
	ProductBox,
	ProductCard,
	ProductFeatures,
	ProductGallery,
	RelatedProducts,
} from '../components';
import { ProductsContext } from '../context';

export const ProductDetailPage = () => {
	const { category, id } = useParams();
	const { products } = useContext(ProductsContext);
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
			<ProductCard product={product} renderingInPage='product' />
			<ProductFeatures features={product.features} />
			<ProductBox includes={product.includes} />
			<ProductGallery gallery={product.gallery} />
			<RelatedProducts relatedProducts={product.others} />
			<CategoriesSection />
			<AdvertisingSection />
		</div>
	);
};

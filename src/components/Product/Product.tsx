import { ProductBox, ProductCard, ProductFeatures, ProductGallery, RelatedProducts } from '..';
import { Product as ProductType } from '../../interfaces';
interface Props {
	product: ProductType;
}
export const Product: React.FC<Props> = ({ product }) => {
	const { features, includes, gallery, others } = product;
	return (
		<>
			<ProductCard product={product} renderingInPage='product' />
			<ProductFeatures features={features} />
			<ProductBox includes={includes} />
			<ProductGallery gallery={gallery} />
			<RelatedProducts relatedProducts={others} />
		</>
	);
};

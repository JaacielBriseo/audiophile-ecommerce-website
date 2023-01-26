import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AdvertisingSection, CategoriesSection, CategoryTitle, ProductsByCategorySection } from '../components';
import { ProductsContext } from '../context';
enum CategoriesPaths {
	Speakers = 'speakers',
	Earphones = 'earphones',
	Headphones = 'headphones',
}
export const CategoryPage = () => {
	const { category } = useParams();
	const { products } = useContext(ProductsContext);
	const productsToShow = products.filter(product => product.category === category);
	if (
		category !== CategoriesPaths.Earphones &&
		category !== CategoriesPaths.Headphones &&
		category !== CategoriesPaths.Speakers
	) {
		return <h1>Not category found with this path: {category}</h1>;
	}

	return (
		<div>
			<CategoryTitle title={category} />
			<ProductsByCategorySection products={productsToShow} />
			<CategoriesSection />
			<AdvertisingSection />
		</div>
	);
};

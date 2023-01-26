import { HeroSection, ProductsSection } from '.';
import { AdvertisingSection, CategoriesSection } from '../components';

export const HomePage = () => {
	return (
		<>
			<HeroSection />
			<CategoriesSection />
			<ProductsSection />
			<AdvertisingSection />
		</>
	);
};

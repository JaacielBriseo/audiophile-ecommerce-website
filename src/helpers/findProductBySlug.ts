import { Product } from '../interfaces';

export const findProductBySlug = (products: Product[], slug: string) =>
	products.find(product => product.slug.toLowerCase().includes(slug.toLowerCase()));

import { Product } from '../interfaces';

export const findProductByName = (products: Product[], name: string) =>
	products.find(product => product.name.includes(name.toUpperCase()));

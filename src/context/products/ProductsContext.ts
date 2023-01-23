import { createContext } from 'react';
import { Product } from '../../interfaces/interface';

interface ProductsContextValues {
	products: Product[];
}
export const ProductsContext = createContext({} as ProductsContextValues);

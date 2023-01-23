import { ProductsContext } from './ProductsContext';
import products from '../../data/data.json';
interface Props {
	children: React.ReactElement | React.ReactElement[];
}
export const ProductsProvider = ({ children }: Props) => {
	return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>;
};

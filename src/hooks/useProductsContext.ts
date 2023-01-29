import { useContext } from 'react';
import { ProductsContext } from '../context';

export const useProductsContext = () => useContext(ProductsContext);

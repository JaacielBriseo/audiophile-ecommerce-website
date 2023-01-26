import { Other } from '../interfaces';
import { findProductBySlug } from '../helpers';
import { useContext } from 'react';
import { ProductsContext } from '../context';
import { NavLink } from 'react-router-dom';

interface Props {
	relatedProducts: Other[];
}
export const RelatedProducts: React.FC<Props> = ({ relatedProducts }) => {
	const { products } = useContext(ProductsContext);
	return (
		<div className='w-[327px] h-[983px] space-y-14'>
			<h1 className='font-bold text-2xl uppercase text-center'>You may also like</h1>
			{relatedProducts.map(({ image, name, slug }) => {
				const product = findProductBySlug(products, slug);
				return (
					<div className='w-full h-[265px] flex flex-col items-center justify-between' key={name}>
						<img src={image.mobile} alt='' />
						<h2 className='font-bold text-2xl uppercase text-center mt-5'>{name}</h2>
						<NavLink
							to={`/product-detail/${product!.category}/${product!.id}`}
							className='py-3 px-6 uppercase bg-BurntOrange text-White font-bold text-xs'>
							see product
						</NavLink>
					</div>
				);
			})}
		</div>
	);
};

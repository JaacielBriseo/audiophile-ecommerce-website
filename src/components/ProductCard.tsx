import { NavLink } from 'react-router-dom';
import { Product } from '../interfaces';
interface Props {
	products: Product[];
}
export const ProductCard: React.FC<Props> = ({ products }) => {
	return (
		<div className='p-5 space-y-24'>
			{products.map(product => (
				<div key={product.id} className='min-h-[681px] space-y-10'>
					<img src={product.image.mobile} alt={product.name} className='rounded-md' />
					<div className='h-72 flex flex-col justify-between items-center'>
						{product.new && (
							<span className='text-BurntOrange text-sm leading-5 tracking-[10px] uppercase'>new product</span>
						)}
						<h1 className='font-bold text-[28px] leading-[38px] tracking-[1px] uppercase text-center'>
							{product.name}
						</h1>
						<p className='text-center font-medium text-[15px] leading-6 text-VeryBlack opacity-50'>
							{product.description}
						</p>
						<NavLink
							to={`/product-detail/${product.category}/${product.id}`}
							className='py-3 px-6 uppercase bg-BurntOrange text-White font-bold text-xs'>
							see product
						</NavLink>
					</div>
				</div>
			))}
		</div>
	);
};

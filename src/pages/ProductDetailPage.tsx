import { useContext, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { CartContext, ProductsContext } from '../context';

export const ProductDetailPage = () => {
	const [productCount, setProductCount] = useState<number>(0);
	const { category, id } = useParams();
	const { products } = useContext(ProductsContext);
	const { cart, setCart } = useContext(CartContext);
	const product = products.find(product => product.category === category && product.id === Number(id));
	if (!product) {
		return (
			<h1>
				Not product with id:{id} / category:{category}
			</h1>
		);
	}
	return (
		<div className='p-5 space-y-24'>
			<div key={product.id} className='min-h-[681px] space-y-10'>
				<img src={product.image.mobile} alt={product.name} className='rounded-md' />
				<div className='h-72 flex flex-col justify-between items-center'>
					{product.new && (
						<span className='text-BurntOrange text-sm leading-5 tracking-[10px] uppercase'>new product</span>
					)}
					<h1 className='font-bold text-[28px] leading-[38px] tracking-[1px] uppercase text-center'>{product.name}</h1>
					<p className='text-center font-medium text-[15px] leading-6 text-VeryBlack opacity-50'>
						{product.description}
					</p>
					<div className='h-12 w-[296px] flex justify-between'>
						<div className='w-[120px] h-full bg-VeryLightGrey flex items-center justify-around'>
							<button onClick={() => setProductCount(current => Math.max(current - 1, 0))}>-</button>
							{productCount}
							<button onClick={() => setProductCount(current => current + 1)}>+</button>
						</div>
						<button
							onClick={() =>
								setCart({
									...cart,
									[product.id]: { ...product, count: productCount },
								})
							}
							type='button'
							className='w-[160px] h-full bg-BurntOrange text-White'>
							add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ProductsContext } from '../../../context';
import { GoChevronRight } from 'react-icons/go';
export const CategoriesSection = () => {
	const { products } = useContext(ProductsContext);
	const productsCategories = products.map(product => product.category);
	const noDuplicateCategoriesNames = Array.from(new Set(productsCategories));
	const productsToShow = noDuplicateCategoriesNames.map(name => products.find(product => product.category === name));
	console.log(productsToShow);
	return (
		<section className='p-5'>
			<div className='h-[683px]'>
				{productsToShow.map(product => (
					<div key={product?.id} className='h-1/3 flex flex-col justify-end relative'>
						<div className='bg-VeryLightGrey h-2/3 rounded-lg flex flex-col items-center justify-center'>
							<img src={product?.categoryImage.mobile} alt='' className='w-32 h-32 object-cover absolute top-3' />
							<div className='text-center mt-10 uppercase font-bold'>
								<h1 className='text-VeryBlack'>{product?.category}</h1>
								<NavLink to={`/category/${product?.category}`} className='text-VeryLightGrey font-bold flex items-center justify-center'>
									Shop
									<GoChevronRight className='text-BurntOrange w-8 h-5'/>
								</NavLink>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

import { NavLink } from 'react-router-dom';
import { GoChevronRight } from 'react-icons/go';
import { categoriesData } from '../../../constants';

export const CategoriesSection = () => {
	return (
		<section className='p-5'>
			<div className='h-[683px] md:grid md:grid-cols-3 md:gap-4 md:h-[217px]'>
				{categoriesData.map(category => (
					<div key={category.name} className='h-1/3 flex flex-col justify-end relative md:h-full'>
						<div className='bg-VeryLightGrey h-2/3 rounded-lg flex flex-col items-center justify-center md:h-10/12'>
							<img src={category.img} alt='' className='absolute top-3 drop-shadow-2xl' />
							<div className='text-center mt-10 uppercase font-bold'>
								<h1 className='text-VeryBlack'>{category.name}</h1>
								<NavLink
									to={`/category/${category.name}`}
									className='text-gray-400 font-medium flex items-center justify-center'>
									Shop
									<GoChevronRight className='text-BurntOrange w-8 h-5' />
								</NavLink>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

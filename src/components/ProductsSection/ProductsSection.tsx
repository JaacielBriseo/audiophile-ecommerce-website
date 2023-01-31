import { useContext } from 'react';
import { ProductsContext } from '../../context';
import { NavLink } from 'react-router-dom';
import { findProductByName } from '../../helpers';
export const ProductsSection = () => {
	const { products } = useContext(ProductsContext);
	const zx9 = findProductByName(products, 'zx9');
	const zx7 = findProductByName(products, 'zx7');
	const yx1 = findProductByName(products, 'yx1');
	return (
		<section className='p-5'>
			<div className='space-y-5 grid grid-cols-1 md:grid-cols-2'>
				<div className='h-[600px] bg-BurntOrange flex flex-col items-center justify-evenly rounded-md md:col-span-2'>
					<img src='/assets/home/mobile/image-speaker-zx9.png' alt='speaker' className='w-44 h-52 ' />
					<h1 className='text-4xl text-White font-bold uppercase md:text-5xl'>{zx9?.name}</h1>
					<p className='font-medium text-gray-200 text-sm text-center md:text-base md:w-6/12'>
						Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
					</p>
					<NavLink to={`/product-detail/${zx9?.category}/${zx9?.id}`} className='btnSecondary'>
						see product
					</NavLink>
				</div>
				<div className='h-80 bg-HomeSpeaker bg-cover flex flex-col items-start justify-center rounded-md md:bg-HomeSpeakerTablet md:col-span-2'>
					<div className='flex flex-col justify-between h-28 w-52 ml-5'>
						<h1 className='font-bold text-3xl uppercase'>{zx7?.name}</h1>
						<NavLink to={`/product-detail/${zx7?.category}/${zx7?.id}`} className='btnDefault'>
							see product
						</NavLink>
					</div>
				</div>
				<div className='h-52 bg-HomeEarphones bg-cover rounded-md md:h-80' />
				<div className='h-52 bg-VeryLightGrey flex items-center rounded-md md:h-80 md:ml-5'>
					<div className='w-60 h-28 flex flex-col justify-between items-start ml-5'>
						<h1 className='uppercase font-bold text-3xl'>{yx1?.name.replace('Wireless', '')}</h1>
						<NavLink to={`/product-detail/${yx1?.category}/${yx1?.id}`} className='btnDefault'>
							see product
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
};

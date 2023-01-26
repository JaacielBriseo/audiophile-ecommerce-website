import { useContext } from 'react';
import { ProductsContext } from '../../../context';
import { NavLink } from 'react-router-dom';
import { findProductByName } from '../../../helpers';
export const ProductsSection = () => {
	const { products } = useContext(ProductsContext);
	const zx9 = findProductByName(products,'zx9')
	const zx7 = findProductByName(products,'zx7')
	const yx1 = findProductByName(products,'yx1')
	return (
		<section className='p-5'>
			<div className='space-y-5 grid grid-cols-1'>
				<div className='h-[600px] bg-BurntOrange flex flex-col items-center justify-evenly rounded-md'>
					<img src='/assets/home/mobile/image-speaker-zx9.png' alt='speaker' className='w-44 h-52 ' />
					<h1 className='text-4xl text-White font-bold uppercase'>{zx9?.name}</h1>
					<p className='font-medium text-gray-200 text-sm text-center'>
						Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
					</p>
					<NavLink
						to={`/product-detail/${zx9?.category}/${zx9?.id}`}
						className='bg-VeryBlack text-White py-4 px-9 font-bold uppercase'>
						see product
					</NavLink>
				</div>
				<div className='h-80 bg-HomeSpeaker bg-cover flex flex-col items-start justify-center rounded-md'>
					<div className='flex flex-col justify-between h-28 w-52 ml-5'>
						<h1 className='font-bold text-3xl uppercase'>{zx7?.name}</h1>
						<NavLink
							to={`/product-detail/${zx7?.category}/${zx7?.id}`}
							className='border border-VeryBlack py-3 font-black w-[75%] uppercase text-center'>
							see product
						</NavLink>
					</div>
				</div>
				<div className='h-52 bg-HomeEarphones bg-cover rounded-md' />
				<div className='h-52 bg-VeryLightGrey flex items-center rounded-md'>
					<div className='w-60 h-28 flex flex-col justify-between items-start ml-5'>
						<h1 className='uppercase font-bold text-3xl'>{yx1?.name.split(' ').splice(0, 2).join(' ')}</h1>
						<NavLink
							to={`/product-detail/${yx1?.category}/${yx1?.id}`}
							className='uppercase font-bold border border-VeryBlack px-5 py-3'>
							see product
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
};

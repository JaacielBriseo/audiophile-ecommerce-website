import { NavLink } from "react-router-dom";

export const HeroSection = () => {
	return (
		<section className='bg-HomeHero bg-center bg-cover h-[33rem] text-center space-y-5 flex flex-col items-center justify-center'>
			<h1 className='uppercase tracking-[0.6rem] text-gray-400'>new product</h1>
			<h2 className='text-White text-5xl font-bold'>XX99 Mark II HeadphoneS</h2>
			<p className='w-10/12 text-gray-300'>
				Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
			</p>
			<NavLink to='/product-detail/headphones/4' className='uppercase bg-BurntOrange py-3 px-7 text-White font-medium'>see product</NavLink>
		</section>
	);
};

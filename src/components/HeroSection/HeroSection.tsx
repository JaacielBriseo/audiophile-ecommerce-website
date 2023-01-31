import { NavLink } from 'react-router-dom';
import { heroContent } from '../../constants';

export const HeroSection = () => (
	<section className='bg-HomeHero bg-center bg-cover h-[33rem] flex md:h-[729px] md:bg-HomeHeroTablet'>
		<div className='text-center space-y-5 flex flex-col items-center justify-center md:w-96 md:mx-auto md:space-y-10'>
			<h1 className='uppercase tracking-[0.6rem] text-gray-400'>{heroContent.title}</h1>
			<h2 className='text-White text-5xl font-bold uppercase'>{heroContent.subtitle}</h2>
			<p className='w-10/12 text-gray-300 md:w-full'>{heroContent.text}</p>
			<NavLink to={heroContent.path} className='btnPrimary'>
				see product
			</NavLink>
		</div>
	</section>
);

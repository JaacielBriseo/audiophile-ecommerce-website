import { NavLink } from 'react-router-dom';
import { footerLinks } from '../../../constants';

export const Footer = () => {
	return (
		<div className='bg-VeryBlack h-[654px] mt-20 space-y-10 flex flex-col md:px-8 md:h-[400px]'>
			<div className='h-1 bg-BurntOrange w-28 mx-auto md:mx-0 md:h-10' />
			<h1 className='text-White text-center font-bold text-3xl md:text-start'>audiophile</h1>
			<div className='w-28 h-36 mx-auto text-WhiteSmoke font-bold text-center text-sm md:mx-0'>
				<ul className='space-y-3 md:flex md:items-start md:space-y-0 md:space-x-5'>
					{footerLinks.map(({ label, path }) => (
						<li key={path}>
							<NavLink to={path}>{label}</NavLink>
						</li>
					))}
				</ul>
			</div>
			<div className='w-10/12 mx-auto text-center space-y-16 md:mx-0 md:text-start md:py-8 md:w-full'>
				<p className='text-White opacity-50 text-[15px] '>
					Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
					specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
					facility - we're open 7 days a week.
				</p>
				<div className='space-y-16 flex flex-col md:flex-row md:justify-between md:items-center md:space-y-0'>
					<p className='text-White opacity-50 text-[15px] '>Copyright 2021. All Rights Reserved</p>
					<div className='flex w-[104px] h-6 mx-auto justify-between md:mx-0'>
						<img src='/assets/facebook.svg' alt='facebook' />
						<img src='/assets/twitter.svg' alt='twitter' />
						<img src='/assets/instagram.svg' alt='instagram' />
					</div>
				</div>
			</div>
		</div>
	);
};

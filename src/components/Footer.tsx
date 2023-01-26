import { NavLink } from 'react-router-dom';
import { footerLinks } from '../constants';

export const Footer = () => {
	return (
		<div className='bg-VeryBlack h-[654px] mt-20 space-y-10'>
			<div className='h-1 bg-BurntOrange w-28 mx-auto' />
			<h1 className='text-White text-center font-bold text-3xl'>audiophile</h1>
			<div className='w-28 h-36 mx-auto text-WhiteSmoke font-bold text-center text-sm'>
				<ul className='space-y-3'>
					{footerLinks.map(({ label, path }) => (
						<li key={path}>
							<NavLink to={path}>{label}</NavLink>
						</li>
					))}
				</ul>
			</div>
			<div className='w-10/12 mx-auto text-White opacity-50 text-[15px] text-center space-y-16'>
				<p>
					Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
					specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
					facility - we're open 7 days a week.
				</p>
				<p>Copyright 2021. All Rights Reserved</p>
			</div>
			<div className='flex w-[104px] h-6 mx-auto justify-between'>
				<img src='/assets/facebook.svg' alt='facebook' />
				<img src='/assets/twitter.svg' alt='twitter' />
				<img src='/assets/instagram.svg' alt='instagram' />
			</div>
		</div>
	);
};

import { NavLink } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { HamburgerButton } from './HamburgerButton';
import { IconContext } from 'react-icons';

export const Navbar = () => {
	return (
		<nav className='w-full h-28 bg-VeryBlack text-White flex flex-col justify-center'>
			<ul className='flex justify-around items-center'>
				<li>
					<HamburgerButton />
				</li>
				<li>
					<NavLink to='/' className='font-bold text-3xl tracking-wider'>
						audiophile
					</NavLink>
				</li>
				<li>
					<button>
						<IconContext.Provider value={{size:'1.3em'}}>
							<HiOutlineShoppingCart />
						</IconContext.Provider>
					</button>
				</li>
			</ul>
		</nav>
	);
};

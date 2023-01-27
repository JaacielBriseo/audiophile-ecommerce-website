import { NavLink } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { HamburgerButton } from './HamburgerButton';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import { CartModal, CartModalContent } from '.';
import { useCartContext } from '../hooks';

export const Navbar = () => {
	const [showCartModal, setShowCartModal] = useState<boolean>(false);
	const { cart } = useCartContext();
	const handleClose = () => {
		setShowCartModal(false);
	};
	const actionBar = (
		<button
			disabled={cart.length === 0}
			onClick={handleClose}
			className='text-White bg-BurntOrange mx-auto px-20 py-4 uppercase font-bold text-[13px] tracking-[1px] disabled:bg-opacity-60 disabled:cursor-not-allowed'>
			Checkout
		</button>
	);

	return (
		<nav className='w-full h-28 bg-VeryBlack text-White flex flex-col justify-center border-b border-[#979797]'>
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
					<button onClick={() => setShowCartModal(current => !current)}>
						<IconContext.Provider value={{ size: '1.3em' }}>
							<HiOutlineShoppingCart />
						</IconContext.Provider>
					</button>
				</li>
			</ul>
			{showCartModal && (
				<CartModal onClose={handleClose} actionBar={actionBar}>
					<CartModalContent />
				</CartModal>
			)}
		</nav>
	);
};

import { NavLink, useNavigate } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { HamburgerButton } from './HamburgerButton';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import { Modal, CartModalContent } from '../..';
import { useCartContext } from '../../../hooks';

export const Navbar = () => {
	const [showCartModal, setShowCartModal] = useState<boolean>(false);
	const { cart } = useCartContext();
	const navigate = useNavigate();
	const handleClose = () => {
		setShowCartModal(false);
	};
	const goToCheckoutPage = () => {
		setShowCartModal(false);
		navigate('/checkout');
	};
	const actionBar = (
		<button
			disabled={cart.length === 0}
			onClick={goToCheckoutPage}
			className='text-White bg-BurntOrange mx-auto px-20 py-4 uppercase font-bold text-[13px] tracking-[1px] disabled:bg-opacity-60 disabled:cursor-not-allowed'>
			Checkout
		</button>
	);

	return (
		<nav className='w-full h-28 bg-VeryBlack text-White flex flex-col justify-center border-b border-[#9797973d]'>
			<ul className='flex justify-around items-center md:justify-between md:w-11/12 md:mx-auto'>
				<li className='flex space-x-10'>
					<HamburgerButton />
					<NavLink to='/' className='hidden font-bold text-3xl tracking-wider md:block'>
						audiophile
					</NavLink>
				</li>
				<li>
					<NavLink to='/' className='font-bold text-3xl tracking-wider md:hidden'>
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
				<Modal onClose={handleClose} actionBar={actionBar}>
					<CartModalContent />
				</Modal>
			)}
		</nav>
	);
};

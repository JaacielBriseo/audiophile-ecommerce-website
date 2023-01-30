import { useFormikContext } from 'formik';
import { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart, useCartContext } from '.';

export const useSummary = () => {
	const { setCart } = useCartContext();
	const { totalWithFormat, cart } = useCart();
	const { submitForm } = useFormikContext();
	const [showThanksModal, setShowThanksModal] = useState(false);
	const handleSubmit = useCallback(() => {
		submitForm();
		setShowThanksModal(true);
	}, [submitForm]);

	const handleClose = useCallback(() => setShowThanksModal(current => !current), []);
	const actionBar = (
		<NavLink onClick={() => setCart([])} to='/' className='bg-BurntOrange text-White py-3 px-14 uppercase mx-auto'>
			back to home
		</NavLink>
	);
	return {
		actionBar,
		handleClose,
		cart,
		totalWithFormat,
		handleSubmit,
		showThanksModal,
	};
};

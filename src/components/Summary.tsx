import { useFormikContext } from 'formik';
import { useCartContext } from '../hooks';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThanksModalContent, Modal } from '.';

export const Summary = () => {
	const { cart } = useCartContext();
	const { submitForm } = useFormikContext();
	const [showThanksModal, setShowThanksModal] = useState(false);
	const handleSubmit = () => {
		submitForm();
		setShowThanksModal(true);
	};
	const actionBar = (
		<NavLink to='/' className='bg-BurntOrange text-White py-3 px-14 uppercase mx-auto'>
			back to home
		</NavLink>
	);
	return (
		<>
			<div className='bg-White shadow p-4 rounded space-y-7'>
				<h1 className='uppercase font-bold text-2xl'>Summary</h1>
				<div className='flex flex-col space-y-8'>
					{cart.map(item => (
						<div key={item.id} className='flex justify-between'>
							<div className='flex space-x-7'>
								<img src={item.image.mobile} alt={item.slug} className='w-16 h-16 rounded' />
								<div className='flex flex-col'>
									<span className='font-bold text-[15px]'>{item.name.substring(0, item.name.lastIndexOf(' '))}</span>
									<span className='text-VeryBlack opacity-50 font-bold text-sm'>${item.price}</span>
								</div>
							</div>
							<div>
								<span className='text-VeryBlack opacity-50 font-bold'>x{item.count}</span>
							</div>
						</div>
					))}
				</div>
				<div>
					<span className='font-medium text-[15px] text-VeryBlack opacity-50'>
						Total${cart.reduce((acc, item) => acc + item.price * item.count, 0)}
					</span>
				</div>
				<div className='flex justify-center'>
					<button type='button' onClick={handleSubmit} className='bg-BurntOrange text-White py-3 px-14'>
						Continue and pay
					</button>
				</div>
			</div>
			{showThanksModal && (
				<Modal onClose={() => setShowThanksModal(current => !current)} actionBar={actionBar}>
					<ThanksModalContent />
				</Modal>
			)}
		</>
	);
};

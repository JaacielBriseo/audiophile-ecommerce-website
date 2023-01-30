import { useSummary } from '../../hooks';
import { ThanksModalContent, Modal, CartItem } from '..';

export const Summary = () => {
	const { actionBar, handleClose, cart, totalWithFormat, handleSubmit, showThanksModal } = useSummary();
	return (
		<>
			<div className='bg-White shadow p-4 rounded space-y-7'>
				<h1 className='uppercase font-bold text-2xl'>Summary</h1>
				<div className='flex flex-col space-y-8'>
					{cart.map(item => (
						<CartItem item={item} key={item.id} />
					))}
				</div>
				<div>
					<span className='font-medium text-[15px] text-VeryBlack opacity-50'>Total${totalWithFormat}</span>
				</div>
				<div className='flex justify-center'>
					<button type='button' onClick={handleSubmit} className='bg-BurntOrange text-White py-3 px-14'>
						Continue and pay
					</button>
				</div>
			</div>
			{showThanksModal && (
				<Modal onClose={handleClose} actionBar={actionBar}>
					<ThanksModalContent />
				</Modal>
			)}
		</>
	);
};

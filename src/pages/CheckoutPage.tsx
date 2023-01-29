import { useNavigate } from 'react-router-dom';
import { CheckoutForm } from '../components';

export const CheckoutPage = () => {
	const navigate = useNavigate();
	return (
		<div className='p-5 space-y-7 bg-VeryLightGrey'>
			<button onClick={() => navigate(-1)} className='text-[15px] text-VeryBlack opacity-50 cursor-pointer'>
				Go back
			</button>
			<CheckoutForm />
		</div>
	);
};

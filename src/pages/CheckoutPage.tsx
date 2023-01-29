import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { CheckoutForm, Summary } from '../components';
import { FormValues } from '../interfaces';

const formData: FormValues = {
	name: '',
	email: '',
	phoneNumber: '',
	address: '',
	zipCode: '',
	city: '',
	country: '',
	paymentWithEmoney: true,
	emoneyNumber: '',
	emoneyPin: '',
};
export const CheckoutPage = () => {
	const navigate = useNavigate();
	return (
		<div className='p-5 space-y-7 bg-VeryLightGrey'>
			<button onClick={() => navigate(-1)} className='text-[15px] text-VeryBlack opacity-50 cursor-pointer'>
				Go back
			</button>
			<Formik initialValues={formData} onSubmit={console.log}>
				{({ setFieldValue }) => (
					<>
						<CheckoutForm setFieldValue={setFieldValue} />
						<Summary />
					</>
				)}
			</Formik>
		</div>
	);
};

import { Form, Formik } from 'formik';
import { BillingDetails, PaymentDetails, ShippingInfo } from '.';
import { FormValues } from '../../interfaces';

export const CheckoutForm = () => {
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
	return (
		<Formik initialValues={formData} onSubmit={console.log}>
			{({ values, setFieldValue }) => (
				<Form className='bg-White shadow p-4 rounded space-y-7'>
					<h1 className='uppercase font-bold text-2xl'>Checkout</h1>
					<BillingDetails />
					<ShippingInfo />
					<PaymentDetails values={values} setFieldValue={setFieldValue} />
					<button type='submit'>Submit</button>
				</Form>
			)}
		</Formik>
	);
};

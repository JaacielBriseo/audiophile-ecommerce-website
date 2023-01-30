import { Form } from 'formik';
import { BillingDetails, PaymentDetails, ShippingInfo } from '.';

export const CheckoutForm = () => {
	return (
		<Form className='bg-White shadow p-4 rounded space-y-7'>
			<h1 className='uppercase font-bold text-2xl'>Checkout</h1>
			<BillingDetails />
			<ShippingInfo />
			<PaymentDetails />
		</Form>
	);
};

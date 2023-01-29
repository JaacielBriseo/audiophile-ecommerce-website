import { Form } from 'formik';
import { BillingDetails, PaymentDetails, ShippingInfo } from '.';
import { FormSectionsProps } from '../../interfaces';

export const CheckoutForm: React.FC<Omit<FormSectionsProps, 'values'>> = ({ setFieldValue }) => {
	return (
		<Form className='bg-White shadow p-4 rounded space-y-7'>
			<h1 className='uppercase font-bold text-2xl'>Checkout</h1>
			<BillingDetails />
			<ShippingInfo />
			<PaymentDetails setFieldValue={setFieldValue} />
		</Form>
	);
};

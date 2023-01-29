import { Field } from 'formik';
import { CheckoutInput } from '..';
import { FormSectionsProps } from '../../interfaces';

export const PaymentDetails: React.FC<FormSectionsProps> = ({ values, setFieldValue }) => (
	<div className='space-y-4'>
		<h3 className='text-BurntOrange font-bold text-[13px]'>Payment Details</h3>
		<div className='flex flex-col space-y-4'>
			<label
				className={`border p-4 rounded-md flex items-center space-x-5 ${
					values.paymentWithEmoney && 'border-2 border-BurntOrange'
				}`}>
				<Field type='checkbox' name='paymentWithEmoney' className='form-checkbox rounded-full text-BurntOrange' />
				<p className='font-bold text-sm'>e-Money</p>
			</label>
			<label
				className={`border p-4 rounded-md flex items-center space-x-5 ${
					!values.paymentWithEmoney && 'border-2 border-BurntOrange'
				}`}>
				<Field
					type='checkbox'
					name='paymentWithEmoney'
					className='form-checkbox rounded-full text-BurntOrange'
					onChange={() => setFieldValue('paymentWithEmoney', !values.paymentWithEmoney)}
					checked={!values.paymentWithEmoney}
				/>
				<p className='font-bold text-sm'>Cash on Delivery</p>
			</label>
		</div>
		{values.paymentWithEmoney && (
			<>
				<CheckoutInput label='e-Money Number' name='emoneyNumber' placeholder='2314589521' />
				<CheckoutInput label='e-Money PIN' name='emoneyPin' placeholder='6981' />
			</>
		)}
	</div>
);

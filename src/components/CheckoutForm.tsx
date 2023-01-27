import { Field, Form, Formik } from 'formik';
import { FormValues } from '../interfaces';
import { CheckoutInput } from './CheckoutInput';

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
			{({ values }) => (
				<Form className='bg-White shadow p-4 rounded space-y-7'>
					<h1 className='uppercase font-bold text-2xl'>Checkout</h1>
					<div className='space-y-4'>
						<h3 className='text-BurntOrange font-bold text-[13px]'>Billing details</h3>
						<CheckoutInput label='Name' name='name' placeholder='Alexei Ward' />
						<CheckoutInput label='Email' name='email' placeholder='alexei@mail.com' />
						<CheckoutInput label='Phone Number' name='phoneNumber' placeholder='+1 202-555-4789' />
					</div>
					<div className='space-y-4'>
						<h3 className='text-BurntOrange font-bold text-[13px]'>Shipping Info</h3>
						<CheckoutInput label='Your address' name='address' placeholder='1137 Williams Avenue' />
						<CheckoutInput label='ZIP Code' name='zipCode' placeholder='100001' />
						<CheckoutInput label='City' name='city' placeholder='New York' />
						<CheckoutInput label='Country' name='country' placeholder='United States' />
					</div>
					<div className='space-y-4'>
						<h3 className='text-BurntOrange font-bold text-[13px]'>Payment Details</h3>
						<div className='flex flex-col space-y-4'>
							<label
								className={`border p-4 rounded-md flex items-center space-x-5 ${
									values.paymentWithEmoney && 'border-2 border-BurntOrange'
								}`}>
								<Field
									type='checkbox'
									name='paymentWithEmoney'
									className='form-checkbox rounded-full text-BurntOrange'
								/>
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
								/>
								<p className='font-bold text-sm'>Cash on Delivery</p>
							</label>
						</div>
						{values.paymentWithEmoney && (
							<>
								<CheckoutInput label='e-Money Number' name='city' placeholder='2314589521' />
								<CheckoutInput label='e-Money PIN' name='country' placeholder='6981' />
							</>
						)}
					</div>
					<button type='submit'>Submit</button>
				</Form>
			)}
		</Formik>
	);
};

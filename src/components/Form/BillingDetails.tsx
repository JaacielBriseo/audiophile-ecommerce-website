import { CheckoutInput } from '..';

export const BillingDetails = () => (
	<div className='space-y-4'>
		<h3 className='text-BurntOrange font-bold text-[13px]'>Billing details</h3>
		<CheckoutInput label='Name' name='name' placeholder='Alexei Ward' />
		<CheckoutInput label='Email' name='email' placeholder='alexei@mail.com' />
		<CheckoutInput label='Phone Number' name='phoneNumber' placeholder='+1 202-555-4789' />
	</div>
);

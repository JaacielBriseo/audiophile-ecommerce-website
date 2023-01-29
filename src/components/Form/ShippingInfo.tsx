import { CheckoutInput } from '..';

export const ShippingInfo = () => (
	<div className='space-y-4'>
		<h3 className='text-BurntOrange font-bold text-[13px]'>Shipping Info</h3>
		<CheckoutInput label='Your address' name='address' placeholder='1137 Williams Avenue' />
		<CheckoutInput label='ZIP Code' name='zipCode' placeholder='100001' />
		<CheckoutInput label='City' name='city' placeholder='New York' />
		<CheckoutInput label='Country' name='country' placeholder='United States' />
	</div>
);

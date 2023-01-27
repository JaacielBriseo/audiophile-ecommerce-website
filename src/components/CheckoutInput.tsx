import { ErrorMessage } from 'formik';
import { useCheckoutInput } from '../hooks';
interface Props {
	name: string;
	placeholder: string;
	label: string;
}
export const CheckoutInput: React.FC<Props> = ({ name, placeholder, label }) => {
	const { value, onChange, onBlur } = useCheckoutInput(name);
	return (
		<div className='flex flex-col space-y-3'>
			<label className='font-bold text-xs'>{label}</label>
			<input
				type='text'
				name={name}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				placeholder={placeholder}
				className='border p-3 rounded-lg placeholder:text-VeryBlack placeholder:opacity-40 placeholder:text-sm placeholder:font-bold'
			/>
			<ErrorMessage name={name} />
		</div>
	);
};

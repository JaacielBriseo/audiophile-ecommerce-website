import { ReactElement, useEffect } from 'react';
import ReactDOM from 'react-dom';
interface Props {
	children: ReactElement | ReactElement[] | string | number;
	actionBar: JSX.Element;
	onClose: () => void;
}

export const Modal = ({ onClose, actionBar, children }: Props) => {
	useEffect(() => {
		document.body.classList.add('overflow-hidden');
		return () => document.body.classList.remove('overflow-hidden');
	}, []);

	return ReactDOM.createPortal(
		<div>
			<div onClick={onClose} className='fixed inset-0 bg-VeryBlack opacity-80' />
			<div className='fixed top-10 left-6 p-5 bg-white w-[327px] min-h-[300px] rounded-md'>
				<div className='flex flex-col justify-between h-full space-y-8'>
					{children}
					<div className='flex justify-end'>{actionBar}</div>
				</div>
			</div>
		</div>,
		document.querySelector('.modal-container')!
	);
};

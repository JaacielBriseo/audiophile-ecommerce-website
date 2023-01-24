import { useState } from 'react';

export const HamburgerButton = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				className={` z-40 block h-10 w-10 p-2 focus:outline-none space-y-1 transition-all `}
				onClick={() => setIsOpen(!isOpen)}>
				<span className={`transition-all h-[3px] bg-White block ${isOpen && 'rotate-45 translate-y-1'}  `}></span>
				<span className={`transition-all h-[3px] bg-White ${isOpen ? 'hidden' : 'block'}`}></span>
				<span className={`transition-all h-[3px] bg-White block ${isOpen && '-rotate-45 -translate-y-1'}`}></span>
			</button>
		</>
	);
};

import { Include } from '../interfaces';
interface Props {
	includes: Include[];
}
export const ProductBox: React.FC<Props> = ({ includes }) => {
	return (
		<div className='w-[327px] h-[217px] flex flex-col justify-between'>
			<h1 className='font-bold text-2xl uppercase tracking-wide'>In the box</h1>
			<div className='h-[157px] w-[199px]'>
				{includes.map(include => (
					<div key={include.item} className='flex justify-between items-start m-1'>
						<p className='font-bold text-[15px] text-BurntOrange'>{include.quantity}x</p>
						<p className='text-VeryBlack opacity-50 text-[15px]'>{include.item}</p>
					</div>
				))}
			</div>
		</div>
	);
};

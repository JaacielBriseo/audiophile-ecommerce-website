import { Gallery } from '../../interfaces';

interface Props {
	gallery: Gallery;
}
export const ProductGallery: React.FC<Props> = ({ gallery }) => {
	return (
		<div className='grid grid-cols-1 grid-rows-4 space-y-5'>
			{Object.values(gallery).map((image, index) => (
				<img
					src={image.mobile}
					alt='Product'
					key={image.mobile}
					className={`${index === Object.values(gallery).length - 1 ? 'row-span-2' : 'row-span-1'} rounded-md`}
				/>
			))}
		</div>
	);
};

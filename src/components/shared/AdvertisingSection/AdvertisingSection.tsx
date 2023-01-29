import { advertisingData } from '../../../constants';

export const AdvertisingSection = () => {
	const titleWords = advertisingData.title.split(' ');
	return (
		<section className='p-5'>
			<div className='h-[698px] flex flex-col items-center justify-between'>
				<img src={advertisingData.img} alt={advertisingData.title} className='rounded-md' />
				<h1 className='font-bold text-3xl text-center leading-snug uppercase'>
					{titleWords.map((word, index) => {
						if (index === 3) {
							return (
								<span key={word} className='text-BurntOrange font-bold'>
									{word + ' '}
								</span>
							);
						}
						return word + ' ';
					})}
				</h1>
				<p className='text-center font-medium text-gray-600'>{advertisingData.text}</p>
			</div>
		</section>
	);
};

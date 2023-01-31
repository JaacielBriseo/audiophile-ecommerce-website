import { advertisingData } from '../../../constants';
import { useWindowSize } from '../../../hooks';

export const AdvertisingSection = () => {
	const titleWords = advertisingData.title.split(' ');
	const { width } = useWindowSize();
	let pathToImg = advertisingData.img;
	if (width && width >= 768) {
		pathToImg = advertisingData.img.replace('mobile', 'tablet');
	}
	if (width && width >= 1024) {
		pathToImg = advertisingData.img.replace('mobile', 'desktop');
	}
	return (
		<section className='p-5'>
			<div className='h-[698px] flex flex-col items-center justify-between md:justify-around'>
				<img src={pathToImg} alt={advertisingData.title} className='rounded-md' />
				<h1 className='font-bold text-3xl text-center leading-snug uppercase md:text-4xl md:max-w-[540px]'>
					{titleWords.map(word => {
						if (word.includes('best')) {
							return (
								<span key={word} className='text-BurntOrange'>
									{word + ' '}
								</span>
							);
						}
						return word + ' ';
					})}
				</h1>
				<p className='text-center font-medium text-gray-600 md:w-10/12'>{advertisingData.text}</p>
			</div>
		</section>
	);
};

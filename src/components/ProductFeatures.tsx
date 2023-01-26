interface Props {
	features: string;
}
export const ProductFeatures: React.FC<Props> = ({ features }) => {
	//? I used this to divide the features in two paragraphs as in the design
	const featuresParagraphs = features.split('\n');
	return (
		<div className='space-y-5'>
			<h1 className='font-bold text-2xl'>Features</h1>
			{featuresParagraphs.map((feature, index) => (
				<p key={index} className='font-medium text-[15px] text-VeryBlack opacity-50 leading-[25px]'>
					{feature}
				</p>
			))}
		</div>
	);
};

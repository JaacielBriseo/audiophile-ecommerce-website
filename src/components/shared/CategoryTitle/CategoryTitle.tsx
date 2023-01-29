interface Props {
	title: string;
}
export const CategoryTitle: React.FC<Props> = ({ title }) => (
	<header className='h-24 bg-VeryBlack text-White flex items-center justify-center'>
		<div className='w-52 h-9 text-center'>
			<h1 className='uppercase font-bold text-3xl'>{title}</h1>
		</div>
	</header>
);

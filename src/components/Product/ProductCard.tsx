import { useNavigate } from 'react-router-dom';
import { Product } from '../../interfaces';
import { AddToCartActionButtons, NavigateToProductDetailButton } from '..';
import { useWindowSize } from '../../hooks';
interface Props {
	product: Product;
	renderingInPage: 'category' | 'product';
}
export const ProductCard: React.FC<Props> = ({ product, renderingInPage }) => {
	const navigate = useNavigate();
	const { width } = useWindowSize();
	let imgToRender;
	if (width && width >= 768) {
		imgToRender = product.categoryImage.tablet;
	} else if (width && width >= 1024) {
		imgToRender = product.categoryImage.desktop;
	} else {
		imgToRender = product.categoryImage.mobile;
	}
	return (
		<div className='min-h-[681px] space-y-10'>
			{renderingInPage === 'product' && (
				<button onClick={() => navigate(-1)} className='text-[15px] text-VeryBlack opacity-50 cursor-pointer'>
					Go back
				</button>
			)}
			<img src={imgToRender} alt={product.name} className='rounded-md' />
			<div className='h-80 flex flex-col justify-between items-center'>
				{product.new && (
					<span className='text-BurntOrange text-sm leading-5 tracking-[10px] uppercase'>new product</span>
				)}
				<h1
					className={`font-bold text-[28px] md:text-[40px] leading-[38px] tracking-[1px] uppercase ${
						renderingInPage === 'product' ? 'text-start' : 'text-center'
					} `}>
					{product.name}
				</h1>
				<p
					className={`${
						renderingInPage === 'product' ? 'text-start' : 'text-center'
					} font-medium text-[15px] leading-6 text-VeryBlack opacity-50`}>
					{product.description}
				</p>
				{renderingInPage === 'product' && <h2 className='self-start font-bold text-lg'>${product.price}</h2>}
				{renderingInPage === 'category' && <NavigateToProductDetailButton product={product} />}
				{renderingInPage === 'product' && <AddToCartActionButtons product={product} />}
			</div>
		</div>
	);
};

import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation';
import { CategoryPage, CheckoutPage, HomePage, ProductDetailPage } from '../pages';
import ScrollToTop from './ScrollToTop';

export default function AppRouter() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<HomePage />} />
					<Route path='/category/:category' element={<CategoryPage />} />
					<Route path='/product-detail/:category/:id' element={<ProductDetailPage />} />
					<Route path='/checkout' element={<CheckoutPage />} />

					<Route path='*' element={<h1>Not found</h1>} />
				</Route>
			</Routes>
			<ScrollToTop />
		</>
	);
}

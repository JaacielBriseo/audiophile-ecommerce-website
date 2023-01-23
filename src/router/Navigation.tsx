import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';

export const Navigation = () => {
	return (
		<>
			<Navbar />
			<hr />
			<Outlet />
			<hr />
			<Footer />
		</>
	);
};

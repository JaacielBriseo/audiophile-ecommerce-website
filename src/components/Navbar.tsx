import { NavLink } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav>
			<ul className='flex justify-between'>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='category/headphones'>Headphones</NavLink>
				</li>
				<li>
					<NavLink to='category/speakers'>Speakers</NavLink>
				</li>
				<li>
					<NavLink to='category/earphones'>Earphones</NavLink>
				</li>
			</ul>
		</nav>
	);
};

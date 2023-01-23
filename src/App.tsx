import { useContext } from "react";
import { ProductsContext } from "./context";

function App() {
	const {products} = useContext(ProductsContext)
	return (
		<div className='App'>
			<h1 className='font-Manrope font-bold'>App</h1>
			<img src='./assets/product-yx1-earphones/mobile/image-product.jpg' alt='' />
		</div>
	);
}

export default App;

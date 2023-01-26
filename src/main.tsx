import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider, CartProvider } from './context';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<ProductsProvider>
				<CartProvider>
					<App />
				</CartProvider>
			</ProductsProvider>
		</BrowserRouter>
	</React.StrictMode>
);

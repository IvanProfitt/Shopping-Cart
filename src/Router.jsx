import App from './App.jsx'
import Cart from './Cart.jsx'
import Shop from './Shop.jsx'
import ProductPage from './Product.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />
        },
        {
            path: "cart",
            element: <Cart />
        },
        {
            path: "shop",
            element: <Shop />
        },
        {
            path: "shop/:id",
            element: <ProductPage />
        }
    ]);

    return <RouterProvider router={router} />;
}

export default Router;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Homepage from './pages/home/Homepage.jsx';
import Aboutpage from './pages/about/Aboutpage.jsx';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <div>Page Not available</div>,
		children: [
			{
				index: true,
				element: <Homepage />,
			},
			{
				path: "about",
				element: <Aboutpage />,
			},
			{
				path: "products",
				element: <div>Products page</div>,
			},
			{
				path: "hospital",
				element: <div>Hospital page</div>,
			},
			{
				path: "blogs",
				element: <div>Blogs page</div>,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

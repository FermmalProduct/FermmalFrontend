import { Outlet } from "react-router-dom";
import Navbar from "./components/header/Nav";
import Footer from "./components/footer/Footer";

function App() {

  return (
		<div>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default App

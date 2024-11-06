import { navLinks } from "../../data/navlinks";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";

const Navbar = () => {
	return (
		<nav>
			<div className={styles.nav_wrapper}>
				<div className={styles.logo}>
					<img src={"/icons/fermmal-logo.svg"} alt="" />
				</div>
				<div className={styles.links_wrapper}>
					{navLinks.map((link) => (
						<NavLink
							to={link.url}
							className={({ isActive }) => (isActive ? "active-link" : "")}
						>
							{link.label}
						</NavLink>
					))}
				</div>
				<div className={styles.login}>
					<button className={styles.login_button}>Log in</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

import { navLinks } from "../../data/links";
import { Link, NavLink } from "react-router-dom";
import styles from "./nav.module.css";
import { Button, Drawer } from "antd";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	return (
		<nav>
			<div className={styles.nav_wrapper}>
				<Link to={"/"} className={styles.logo}>
					<img src={"/icons/fermmal-logo.svg"} alt="" />
				</Link>
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

				<div className={styles.mobile_menu}>
					<Button htmlType="button" onClick={showDrawer}>
						<FiMenu size={24} color="#39434B" />
					</Button>
				</div>
			</div>

			<Drawer title="" onClose={onClose} open={open}>
				<div className={styles.mobile_links_wrapper}>
					{navLinks.map((link) => (
						<NavLink
							to={link.url}
							className={({ isActive }) => (isActive ? "active-link" : "")}
						>
							{link.label}
						</NavLink>
					))}
				</div>
				<div className={styles.mobile_login}>
					<button className={styles.login_button}>Log in</button>
				</div>
			</Drawer>
		</nav>
	);
};

export default Navbar;

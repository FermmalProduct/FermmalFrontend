import React from "react";
import styles from "./hero.module.css";

const AboutHerosection = () => {
	return (
		<section className={styles.wrapper}>
			<h2>We’re kicking against <br /> malaria.</h2>

			<div className={styles.hero_buttons}>
				<button className={styles.section_one_login_button}>Log in</button>
				<button className={styles.section_one_signup_button}>Sign Up</button>
			</div>
		</section>
	);
};

export default AboutHerosection;

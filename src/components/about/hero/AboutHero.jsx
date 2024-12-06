import React from "react";
import styles from "./hero.module.css";
import LoginButton from "../../buttons/LoginButton";
import SignupButton from "../../buttons/SignupButton";

const AboutHerosection = () => {
	return (
		<section className={styles.wrapper}>
			<h2>
				We’re kicking against <br /> malaria.
			</h2>

			<div className={styles.hero_buttons}>
				<LoginButton />
				<SignupButton />
			</div>
		</section>
	);
};

export default AboutHerosection;

import React from 'react'
import styles from "./hero.module.css"

const Herosection = () => {
  return (
		<section className={styles.wrapper}>
			<h1>
				Let's Combat Malaria <br /> Together
			</h1>
			<h5>
				Malaria is a life threatening illness, commonly faced by Nigerians, it’s
				caused by bites of infected female Anopheles mosquitoes.
			</h5>
			<div className={styles.hero_buttons}>
				<button className={styles.section_one_login_button}>Log in</button>
				<button className={styles.section_one_signup_button}>Sign Up</button>
			</div>
		</section>
	);
}

export default Herosection

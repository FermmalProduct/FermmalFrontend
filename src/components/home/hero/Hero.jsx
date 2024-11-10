import React from 'react'
import styles from "./hero.module.css"

const Herosection = () => {
  return (
		<section className={styles.container}>
			<div className={styles.wrapper}>
				<h1>
					Let's Combat Malaria <br /> Together
				</h1>
				<h5>
					Malaria is a life threatening illness, commonly faced by Nigerians,
					it’s caused by bites of infected female Anopheles mosquitoes.
				</h5>
				<div className={styles.hero_buttons}>
					<button>Log in</button>
					<button>Sign Up</button>
				</div>
			</div>
		</section>
	);
}

export default Herosection

import React from 'react'
import styles from "./join-fermmal.module.css";

const JoinFermmal = () => {
  return (
		<section className={styles.join_fermmal}>
			<div className={styles.content}>
				<div className={styles.text_section}>
					<h3>The malaria app for Nigerians</h3>
					<p>Free testing, drugs, and mosquito nets to help combat malaria.</p>
				</div>

				<button type="button">Join Fermmal</button>
			</div>

			<div className={styles.image_section}>
				<img src="/images/mobile-app.jpg" alt="fermmal mobile app" />
			</div>
		</section>
	);
}

export default JoinFermmal

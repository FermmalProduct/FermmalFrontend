import React from 'react'
import styles from "./whyfermmal.module.css";

const WhyFermmal = () => {
  return (
		<section className={styles.wrapper}>
			<div className={styles.why_fermmal}>Why Fermmal?</div>
			<p className={styles.section_three_subheading}>
				Fermmal is an agency that offers free testing, drugs and mosquito nets
				to help combat/curb malaria.
			</p>
			<div className={styles.section_three_write_ups}>
				<div className={styles.write_up_container}>
					<div className={styles.top_write_up}> Free testing</div>
					<div className={styles.bottom_write_up}>
						Our website is dedicated to providing free malaria testing to
						communities at risk.
					</div>
				</div>
				<div className={styles.write_up_container}>
					<div className={styles.top_write_up}>Free anti-malaria drugs</div>
					<div className={styles.bottom_write_up}>
						We offers free malaria drugs to those in need, especially in endemic
						regions.
					</div>
				</div>
				<div className={styles.write_up_container}>
					<div className={styles.top_write_up}>Mosquito nets</div>
					<div className={styles.bottom_write_up}>
						By distributing free mosquito nets, we empower families to protect
						themselves
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhyFermmal

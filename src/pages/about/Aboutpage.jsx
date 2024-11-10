import React from 'react'
import AboutHerosection from '../../components/about/hero/AboutHero';
import styles from "./about.module.css";
import Partners from '../../components/about/partners/Partners';

const Aboutpage = () => {
  return (
		<section className={styles.wrapper}>
			<AboutHerosection />

			<div className={styles.inner_wrapper}>
				<section className={styles.story}>
					<h2>Our Story</h2>
					<p>
						We are working to combat malaria in Nigeria, addressing the needs of
						both young and old, across all genders.
					</p>

					<div className={styles.story_wrapper}>
						<div className={styles.story_content}>
							<h2>Contact Monitoring</h2>
							<p>
								The goal of contact monitoring is to detect new infections
								early, provide timely treatment, This strategy is particularly
								useful to eliminate malaria or in controlling outbreaks.
							</p>
						</div>
						<div className={styles.story_content}>
							<h2>5 years of intense research</h2>
							<p>
								The ultimate aim of intense malaria research develop more
								effective strategies to prevent, treat, and ultimately eradicate
								malaria in Nigeria.
							</p>
						</div>
					</div>
				</section>

				<section className={styles.mission}>
					<h2>Our Mission</h2>
					<p>
						We are actively engaged in the fight against malaria in Nigeria,
						focusing on reducing its impact on people of all ages. Our efforts
						aim to reach every individual regardless of gender, ensuring that
						both have equal access to life-saving treatment. we are committed to
						creating a healthier, malaria-free Nigeria for everyone.
					</p>
					<img src="/images/mission.png" alt="" />
				</section>

				<section className={styles.vision}>
					<h2>Our Vision</h2>
					<p>
						Our vision at Fermmal is to create a malaria-free future by
						providing accessible healthcare resources, and empowering
						communities with the tools to prevent, and treat malaria
						effectively.
					</p>
					<img src="/images/vision.png" alt="" />
				</section>
			</div>

			<Partners />
		</section>
	);
}

export default Aboutpage

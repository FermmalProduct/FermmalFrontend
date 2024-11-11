
import Herosection from "../../components/home/hero/Hero";
import JoinFermmal from "../../components/home/join-fermmal/JoinFermmal";
import Statistics from "../../components/home/statistics/Statistics";
import WhyFermmal from "../../components/home/why-fermmal/WhyFermmal";
import styles from "./homepage.module.css";

const Homepage = () => {
  return (
		<div>
			<Herosection />

			{/* second section with value Proposition */}
			<div className={styles.section_two}>
				<h2 className={styles.value_proposition}>Value Proposition</h2>
				<img
					className={styles.balance_icon}
					src={"/icons/value-scale.svg"}
					alt="balance"
				/>
				<p className={styles.section_two_subheading}>
					Empowering communities in the fight against malaria with free testing,
					life-saving medications, and protective mosquito nets. Together, we
					can create a healthier, malaria-free future.
				</p>
			</div>

			<WhyFermmal />

			<Statistics />

			{/* fifth section with video */}
			<section className={styles.video_section}>
				<h2>Hear the Latest from Our Outreach Efforts</h2>
				<video
					width="1232"
					height="496"
					controls
					className={styles.video}
					muted
					autoPlay
					loop
				>
					<source src={"/videos/vaccine.mp4"} type="video/mp4" />
				</video>
			</section>

			<JoinFermmal />
		</div>
	);
}

export default Homepage;

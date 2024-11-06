import React from "react";
import style from "./footer.module.css";
import { companyLinks, socialLinks, supportLinks } from "../../data/footerlinks";

const Footer = () => {
	return (
		<footer>
			<div className={style.wrapper}>
				<div className={style.footer_image}>
					<img src="/icons/fermmal-logo-white.svg" alt="fermmal white logo" />
				</div>

				<div className={style.site_map}>
					<h2>Company</h2>
					<div className={style.site_map_links}>
						{companyLinks.map((link) => (
							<a key={link.label} href={link.url}>
								{link.label}
							</a>
						))}
					</div>
				</div>

				<div className={style.site_map}>
					<h2>Support & Resources</h2>
					<div className={style.site_map_links}>
						{supportLinks.map((link) => (
							<a key={link.label} href={link.url}>
								{link.label}
							</a>
						))}
					</div>
				</div>

				<div className={style.site_map}>
					<h2>Contact</h2>
					<div className={style.social_map_links}>
						{socialLinks.map((link) => (
							<a key={link.icon} href={link.url}>
								<img src={link.icon} alt="fermmal white logo" />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

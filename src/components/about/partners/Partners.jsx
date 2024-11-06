import React from 'react'
import style from "./partners.module.css"

const Partners = () => {
    const partnerImages = ["/icons/pfizer.svg", "/icons/orange-drugs.svg", "/icons/amatem.svg", "/icons/medicare.svg"]
  return (
		<section className={style.wrapper}>
			<h2>Partership with brands and agencies to create impactful results</h2>
			<div className={style.partners}>
				{partnerImages.map((partner) => (
					<div className={style.partner_box}>
						<img src={partner} alt="partner brand" />
					</div>
				))}
			</div>
		</section>
	);
}

export default Partners
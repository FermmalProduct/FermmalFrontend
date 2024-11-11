import React from "react";
import style from "./list.module.css"

const HospitalList = ({ hospitals }) => {
	// Group hospitals by first letter
	const groupedHospitals = hospitals.reduce((acc, hospital) => {
		const letter = hospital.name[0].toUpperCase();
		if (!acc[letter]) acc[letter] = [];
		acc[letter].push(hospital);
		return acc;
	}, {});

	return (
		<div className={style.list}>
			{Object.keys(groupedHospitals)
				.sort()
				.map((letter, i) => (
					<div key={letter} className={style.group}>
						<h2>{letter}</h2>
						{groupedHospitals[letter].map((hospital, index) => (
							<div key={index} className={style.group_item}>
								<h3>
									{hospital.name}
								</h3>
								<p>
									<strong>Address:</strong> {hospital.address}
								</p>
								<p>
									<strong>Phone:</strong> {hospital.phone}
								</p>
							</div>
						))}
					</div>
				))}
		</div>
	);
};

export default HospitalList;

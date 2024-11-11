import React from "react";
import { GoSearch } from "react-icons/go";
import style from "./search.module.css"

const HospitalSearch = ({ searchTerm, onSearchChange }) => {
	return (
		<div className={style.search_bar}>
			<input
				type="text"
				placeholder="Search hospitals by name, address, or state"
				value={searchTerm}
				onChange={(e) => onSearchChange(e.target.value)}
			/>
			<GoSearch color="#555555" />
		</div>
	);
};

export default HospitalSearch;

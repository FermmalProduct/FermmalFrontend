import React, { useState } from "react";
import { hospitalCatalog } from "../../../data/hospitalcatalog";
import style from "./filter.module.css";

const FilterSidebar = ({ onFilterChange }) => {
	const [stateFilter, setStateFilter] = useState([]);
	const [typeFilter, setTypeFilter] = useState([]);

	const handleStateChange = (e) => {
		const value = e.target.value;
		setStateFilter(
			stateFilter.includes(value)
				? stateFilter.filter((s) => s !== value)
				: [...stateFilter, value]
		);
	};

	const handleTypeChange = (e) => {
		const value = e.target.value;
		setTypeFilter(
			typeFilter.includes(value)
				? typeFilter.filter((t) => t !== value)
				: [...typeFilter, value]
		);
	};

	const applyFilters = () => {
		onFilterChange({ states: stateFilter, types: typeFilter });
	};

	const stateLabels = hospitalCatalog.map((item) => item.state)
	const cleanStateLabels = [...new Set(stateLabels)]

	return (
		<div className={style.container}>
			<h3>Filter</h3>

			<p>by State: </p>
			<div className={style.labels}>
				{cleanStateLabels.map((item, i) => (
					<label key={i + 1}>
						<input type="checkbox" value={item} onChange={handleStateChange} />{" "}
						{item}
					</label>
				))}

			</div>

			<p>by Hospital Type: </p>

			<div className={style.types}>
				<label>
					<input type="checkbox" value="Public" onChange={handleTypeChange} />{" "}
					Public
				</label>
				<label>
					<input type="checkbox" value="Private" onChange={handleTypeChange} />{" "}
					Private
				</label>

			</div>

			<button onClick={applyFilters}>Apply Filters</button>
		</div>
	);
};

export default FilterSidebar;

import React, { useState } from "react";
import { Button, Popover, Pagination } from "antd";
import { BsSliders } from "react-icons/bs";

import FilterSidebar from "../../components/hospital/filter-hospital/HospitalFilter";
import HospitalList from "../../components/hospital/hospital-list/HospitalList";
import HospitalSearch from "../../components/hospital/search-hospital/HospitalSearch";

import { hospitalCatalog } from "../../data/hospitalcatalog";

import style from "./hospital.module.css";

const HospitalPage = () => {
	const [filters, setFilters] = useState({ states: [], types: [] });
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [open, setOpen] = useState(false);

	const hide = () => {
		setOpen(false);
	};

	const handleOpenChange = (newOpen) => {
		setOpen(newOpen);
	};
	const itemsPerPage = 10;

	const onChange = (page) => {
		setCurrentPage(page);
	};

	const handleFilterChange = (newFilters) => {
		setFilters(newFilters);
		setCurrentPage(1); 
		hide()
	};

	const handleSearchChange = (term) => {
		setSearchTerm(term);
		setCurrentPage(1);
	};

	// Filter hospitals by state, type, and search term
	const filteredHospitals = hospitalCatalog
		.sort((a, b) => a.name.localeCompare(b.name))
		.filter((hospital) => {
			const matchesFilters =
				(filters.states.length === 0 ||
					filters.states.includes(hospital.state)) &&
				(filters.types.length === 0 || filters.types.includes(hospital.type));

			const matchesSearchTerm =
				hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				hospital.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
				hospital.state.toLowerCase().includes(searchTerm.toLowerCase());

			return matchesFilters && matchesSearchTerm;
		});

	const paginatedHospitals = filteredHospitals.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	const totalPages = Math.ceil(filteredHospitals.length);

	return (
		<section className={style.container}>
			<div className={style.header}>
				<div className={style.text}>
					<Popover
						content={<FilterSidebar onFilterChange={handleFilterChange} />}
						title=""
						trigger="click"
						placement="bottom"
						open={open}
						onOpenChange={handleOpenChange}
					>
						<Button>
							<BsSliders />
						</Button>
					</Popover>
					<h2>Find Hospitals Across Nigeria</h2>
				</div>
				<HospitalSearch
					searchTerm={searchTerm}
					onSearchChange={handleSearchChange}
				/>
			</div>

			<div className={style.content}>
				<FilterSidebar onFilterChange={handleFilterChange} />
				<HospitalList hospitals={paginatedHospitals} />
			</div>

			<div className={style.pagination_wrapper}>
				<Pagination
					defaultCurrent={currentPage}
					total={totalPages}
					onChange={onChange}
				/>
			</div>
		</section>
	);
};

export default HospitalPage;

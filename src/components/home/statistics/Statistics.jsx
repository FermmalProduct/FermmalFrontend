import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import style from "./statistics.module.css";

Chart.register(CategoryScale);

const chartData = {
	labels: ["Red", "Blue", "Yellow"],
	datasets: [
		{
			label: "My First Dataset",
			data: [900, 500, 280],
			backgroundColor: ["#566570", "#f3cd50", "#dae7f1"],
			hoverOffset: 4,
		},
	],
};

const chartLegend = [
	{
		label:
			"2,000 insecticide-treated mosquito nets distributed to families in rural areas.",
		color: "#dae7f1",
	},
	{
		label: "5,000 doses of anti-malarial drugs distributed in 2022.",
		color: "#f3cd50",
	},
	{
		label: "Over 10,000 free testing for malaria in the past year.",
		color: "#566570",
	},
];

const Statistics = () => {
	return (
		<div className={style.wrapper}>
			<h2>Statisitcs</h2>
			<div className={style.chart_container}>
				<div className={style.donughnut_container}>
					<Doughnut
						data={chartData}
						options={{
							cutout: "80%",
							plugins: {
								title: {
									display: false,
									text: "",
                                },
								legend: {
									display: false,
									position: "right",
								},
							},
						}}
					/>
				</div>
                <div className={style.chart_legend}>{chartLegend.map((item) => (
                    <div className={style.legend_details}>
                        <span style={{backgroundColor: item.color, width: "40px", height: "40px"}} className={style.legend_box}></span>
                        <p>{item.label}</p>
                    </div>
                ))}</div>
			</div>
		</div>
	);
};

export default Statistics;

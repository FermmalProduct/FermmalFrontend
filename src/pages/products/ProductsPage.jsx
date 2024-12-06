import React from "react";
import style from "./products.module.css";
import { products } from "../../data/others";
import ProductCard from "../../components/product-card/ProductCard";
import JoinFermmal from "../../components/home/join-fermmal/JoinFermmal";
import LoginButton from "../../components/buttons/LoginButton";
import SignupButton from "../../components/buttons/SignupButton";


const ProductsPage = () => {
	return (
		<section>
			<div className={style.banner}>
				<h2>Double Your Protection!</h2>
				<p>
					Get lasting defense from bites with our fast-absorbing, non-greasy
					mosquito repellent cream. Ideal for outdoor and indoor use
				</p>
				<div className={style.buttons}>
					<LoginButton />
					<SignupButton />
				</div>
			</div>

			<div className={style.products_wrapper}>
				{products.slice(0, 3).map((product, i) => (
					<div key={i + 1} className={style.product_card_wrapper}>
						<ProductCard {...product} />
					</div>
				))}
			</div>

			<div className={style.booking}>
				<h2>Concerned About Mosquito-Borne Illnesses?</h2>
				<p>
					Schedule a doctor's appointment today for expert advice on protection
					and prevention.
				</p>
				<button>Book Free Testing</button>
			</div>

			<div className={style.products_wrapper}>
				{products.slice(3).map((product, i) => (
					<div key={i + 1} className={style.product_card_wrapper}>
						<ProductCard {...product} />
					</div>
				))}
			</div>

			<JoinFermmal />
		</section>
	);
};

export default ProductsPage;

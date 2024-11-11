import React from 'react';
import style from "./product-card.module.css";

const ProductCard = ({ imageUrl, title, description, category }) => {
	return (
		<div className={style.container}>
			<img src={imageUrl} alt={title} />

			<div className={style.content}>
				<h2>{title}</h2>
				<p>{description}</p>
				<span>{category}</span>
			</div>
		</div>
	);
};

export default ProductCard

import React from 'react'
import style from "./blogs.module.css"
import { GoPlus, GoDash } from "react-icons/go";
import { Breadcrumb, Button, Collapse } from "antd";
import { blogs, breadCrumbs } from '../../data/others';

const Blogspage = () => {

	const items = blogs.map((blog) => ({
		key: blog.id,
		label: <h2 className={style.collapse_label}>{blog.title}</h2>,
		children: (
			<div>
				<p className={style.collapse_description}>
					{blog.descriptionOne}
				</p>
				<p className={style.collapse_description}>
					{blog.descriptionTwo}
				</p>
			</div>
		),
	}));

  return (
		<section className={style.container}>
			<div className={style.banner}>
				<h2>Together, we’re curbing malaria for a healthier tomorrow!</h2>

				<div className={style.featured_blog}>
					<p>Trending on Fermmal</p>
						<img src='/images/trending-blog.png' alt='trending blog'/>
					<div className={style.trending_caption}>
					  <p>The new Malaria vaccine in town</p>
					  <span>Sept 2024</span>
					</div>
				</div>
			</div>
			<div className={style.blog_category}>
				<h2>Blog Category</h2>

				<Breadcrumb items={breadCrumbs} />
			</div>

			<h2 className={style.the_article}>The Articles</h2>

			<Collapse
				items={items}
				bordered={false}
				defaultActiveKey={["1"]}
				expandIconPosition="end"
				expandIcon={({ isActive }) =>
					isActive ? <GoDash size={20} /> : <GoPlus size={20} />
				}
				className={style.collapse_container}
			/>

			<div className={style.subscribe}>
				<h2>Subscribe to our daily newsletter</h2>
				<div className={style.subscribe_input}>
					<input
						type="text"
						placeholder="Enter your email address"
						value={""}
						onChange={(e) => console.log(e.target.value)}
					/>
					<Button>Subscribe</Button>
				</div>
			</div>
		</section>
	);
}

export default Blogspage

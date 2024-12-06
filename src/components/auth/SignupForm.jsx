import React, { useState } from "react";
import styles from "./auth.module.css";

const SignupForm = ({ onClose }) => {
	const [formValues, setFormValues] = useState({
		fullName: "",
		email: "",
		password: "",
	});
	const handleChange = (e) => {
		const formName = e.target.name;

		setFormValues((prev) => {
			return { ...prev, [formName]: e.target.value };
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		onClose();
	};
	return (
		<div className={styles.auth_wrapper}>
			<div className={styles.image_wrapper}>
				<img src="/images/auth-bg.png" />
			</div>
			<div className={styles.form_wrapper}>
				<form onSubmit={handleSubmit}>
					<div className={styles.form_heading}>
						<h2>Fermmal</h2>
						<h4>Get Started!</h4>
						<p>Please enter your details</p>
					</div>
					<label htmlFor="fullName">
						<input
							type="text"
							name="fullName"
							id="fullName"
							value={formValues.fullName}
							placeholder="Full Name"
							onChange={handleChange}
							required
						/>
					</label>
					<label htmlFor="email">
						<input
							type="email"
							name="email"
							id="email"
							value={formValues.email}
							placeholder="Email"
							onChange={handleChange}
							required
						/>
					</label>
					<label htmlFor="password">
						<input
							type="password"
							name="password"
							id="password"
							value={formValues.password}
							placeholder="Password"
							onChange={handleChange}
							required
						/>
					</label>

					<button>Sign Up</button>
				</form>
			</div>
		</div>
	);
};

export default SignupForm;

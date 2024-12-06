import React, { useState } from "react";
import { Modal } from "antd";
import styles from "./buttons.module.css";
import SignupForm from "../auth/SignupForm";

const SignupButton = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<>
			<button className={styles.sign_up_button} onClick={showModal}>
				Sign up
			</button>

			<Modal
				title=""
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				centered
				okButtonProps={{ style: { backgroundColor: "#f3cd50" } }}
				okText="Submit"
			>
				<SignupForm />
			</Modal>
		</>
	);
};

export default SignupButton;

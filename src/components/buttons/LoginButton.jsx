import React, { useState } from "react";
import { Modal } from "antd";
import styles from "./buttons.module.css";
import LoginForm from "../auth/LoginForm";

const LoginButton = () => {
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
			<button className={styles.login_button} onClick={showModal}>
				Log in
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
				<LoginForm />
			</Modal>
		</>
	);
};

export default LoginButton;

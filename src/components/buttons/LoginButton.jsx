import React, { useState } from "react";
import { Modal } from "antd";
import styles from "./buttons.module.css";
import LoginForm from "../auth/LoginForm";

const LoginButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
		const showModal = () => {
			setIsModalOpen(true);
		};
		const closeModal = () => {
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
				onClose={closeModal}
				onCancel={closeModal}
				centered
				footer={null}
				width={"80dvw"}
				className={styles.modal_wrapper}
			>
				<LoginForm onClose={closeModal} />
			</Modal>
		</>
	);
};

export default LoginButton;

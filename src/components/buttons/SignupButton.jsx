import React, { useState } from "react";
import { Modal } from "antd";
import styles from "./buttons.module.css";
import SignupForm from "../auth/SignupForm";

const SignupButton = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
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
				onClose={closeModal}
				onCancel={closeModal}
				centered
				footer={null}
				width={"70dvw"}
				className={styles.modal_wrapper}
			>
				<SignupForm onClose={closeModal} />
			</Modal>
		</>
	);
};

export default SignupButton;

import React, { useState } from "react";
import { Application } from "../../types/applications";
import { useAppDispatch } from "../../hooks";
import { editApplication } from "../../store/actions/applicationsActions";
import styles from "./editApplicationForm.module.css";
import axios from "../../api/api";

import { Button, Col, Drawer, Form, Input, Row, Space, message } from "antd";
import { FormOutlined } from "@ant-design/icons";

interface EditApplicationFormProps {
	formData: Application;
}

export const EditApplicationForm: React.FC<EditApplicationFormProps> = ({
	formData,
}) => {
	const [open, setOpen] = useState(false);
	const [messageApi, contextHolder] = message.useMessage();
	const dispatch = useAppDispatch();

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	const handleEditApplication = async (editFormData: Application) => {
		const updateApplication = {
			...formData,
			applicationName: String(editFormData.applicationName),
		};
		try {
			const response = await axios.put(
				`/applications/${formData.id}`,
				updateApplication
			);
			messageApi.open({
				type: "success",
				content: `${response.data.message}`,
				duration: 3,
			});
			dispatch(editApplication(updateApplication));
			onClose();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{contextHolder}
			<FormOutlined onClick={showDrawer} />
			<Drawer
				title={`Редактирование заявки: ${formData?.applicationName}`}
				width={720}
				onClose={onClose}
				open={open}
			>
				<Form
					layout="vertical"
					initialValues={{
						applicationName: formData.applicationName || null,
					}}
					onFinish={handleEditApplication}
				>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name="applicationName"
								label="Название заявки"
								rules={[{ required: true, message: "Введите название заявки" }]}
							>
								<Input placeholder="Напишите название заявки" />
							</Form.Item>
						</Col>
					</Row>
					<div className={styles.formButtons}>
						<Space size="middle">
							<Button type="primary" htmlType="submit">
								Сохранить
							</Button>
							<Button onClick={onClose} htmlType="button">
								Отмена
							</Button>
						</Space>
					</div>
				</Form>
			</Drawer>
		</>
	);
};

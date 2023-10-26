import React, { useState } from "react";
import type { FormInstance } from "antd";
import {
	Button,
	Form,
	Input,
	Space,
	InputNumber,
	Select,
	Radio,
	Checkbox,
	DatePicker,
	Row,
	Col,
} from "antd";

interface NewApplicationProps {}

const SubmitButton = ({ form }: { form: FormInstance }) => {
	const [submittable, setSubmittable] = useState(false);
	// Watch all values
	const values = Form.useWatch([], form);

	React.useEffect(() => {
		form.validateFields({ validateOnly: true }).then(
			() => {
				setSubmittable(true);
			},
			() => {
				setSubmittable(false);
			}
		);
	}, [values]);

	return (
		<Button type="primary" htmlType="submit" disabled={!submittable}>
			Отправить
		</Button>
	);
};

export const NewApplication: React.FC<NewApplicationProps> = () => {
	const [form] = Form.useForm();

	return (
		<Form
			form={form}
			name="validateOnly"
			layout="vertical"
			autoComplete="off"
			initialValues={{ needCall: true, type: "classic", applicantsAmount: 1 }}
			onFinish={(values) => console.log("values", values)}
		>
			<Row gutter={[16, 16]}>
				<Col span={12}>
					<Form.Item
						name="name"
						label="Названия заявки"
						rules={[{ required: true }]}
					>
						<Input placeholder="Напишите названия заявки" />
					</Form.Item>
					<Form.Item name="price" label="Сумма заявки">
						<InputNumber
							style={{ width: "100%" }}
							addonAfter="₸"
							placeholder="Сумма"
						/>
					</Form.Item>
					<Form.Item
						name="type"
						label="Тип заявки"
						rules={[{ required: true }]}
					>
						<Select
							options={[
								{ value: "classic", label: "Классическая" },
								{ value: "complex", label: "Комплексная" },
							]}
						/>
					</Form.Item>
					<Form.Item name="needCall" label="Позвонить для подтверждения">
						<Radio.Group>
							<Radio value={true}>Да</Radio>
							<Radio value={false}>Нет</Radio>
						</Radio.Group>
					</Form.Item>
					<Form.Item
						name="additionalInfo"
						label="Получать дополнительную информацию"
					>
						<Checkbox.Group>
							<Checkbox name="isSendEmail" value={"sendEmail"}>
								Письма на почту
							</Checkbox>
							<Checkbox name="isSendSMS" value={"sendSMS"}>
								СМС на телефон
							</Checkbox>
						</Checkbox.Group>
					</Form.Item>
				</Col>
				<Col span={12}>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item name="applicantsAmount" label="Количество заявителей">
								<InputNumber style={{ width: "100%" }} />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item name="applicationDate" label="Дата заявки">
								<DatePicker
									placeholder="Выберите дату"
									style={{ width: "100%" }}
								/>
							</Form.Item>
						</Col>
					</Row>
					<Form.Item name="city" label="Город" rules={[{ required: true }]}>
						<Select
							placeholder="Выберите Ваш город"
							options={[
								{ value: "almaty", label: "Алматы" },
								{ value: "astana", label: "Астана" },
							]}
						/>
					</Form.Item>
					<Form.Item
						name="phoneNumber"
						label="Номер телефона"
						rules={[{ required: true }]}
					>
						<Input placeholder="+7 (___)  ___ - __ - __" />
					</Form.Item>
				</Col>
			</Row>
			<Form.Item>
				<Space>
					<SubmitButton form={form} />
					<Button htmlType="reset">Очистить</Button>
				</Space>
			</Form.Item>
		</Form>
	);
};

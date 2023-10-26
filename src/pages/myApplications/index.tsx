import React from "react";
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
} from "antd";

interface MyApplicationsProps {}

const SubmitButton = ({ form }: { form: FormInstance }) => {
	const [submittable, setSubmittable] = React.useState(false);
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

export const MyApplications: React.FC<MyApplicationsProps> = () => {
	const [form] = Form.useForm();

	return (
		<Form
			form={form}
			name="validateOnly"
			layout="vertical"
			autoComplete="off"
			onFinish={(values) => console.log("values", values)}
		>
			<Form.Item
				name="name"
				label="Названия заявки"
				rules={[{ required: true }]}
			>
				<Input placeholder="Напишите названия заявки" />
			</Form.Item>
			<Form.Item name="price" label="Сумма заявки">
				<InputNumber addonAfter="₸" placeholder="Сумма" />
			</Form.Item>
			<Form.Item name="type" label="Тип заявки" rules={[{ required: true }]}>
				<Select
					options={[
						{ value: "classic", label: "Классическая" },
						{ value: "complex", label: "Комплексная" },
					]}
				/>
			</Form.Item>
			<Form.Item name="isCall" label="Позвонить для подтверждения">
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
			<Form.Item name="applicantNumber" label="Количество заявителей">
				<InputNumber />
			</Form.Item>
			<Form.Item name="city" label="Город">
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
			<Form.Item name="applicationDate" label="Дата заявки">
				<DatePicker placeholder="Выберите дату" />
			</Form.Item>
			<Form.Item>
				<Space>
					<SubmitButton form={form} />
					<Button htmlType="reset">Очистить</Button>
				</Space>
			</Form.Item>
		</Form>
	);
};

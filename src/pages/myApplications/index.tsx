import React, { useEffect } from "react";
import { Application } from "../../types/applications";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
	deleteApplication,
	setApplications,
} from "../../store/actions/applicationsActions";
import { EditApplicationForm } from "../../components";
import axios from "../../api/api";

import { Table, Space, Popconfirm, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { CloseOutlined } from "@ant-design/icons";

interface MyApplicationsProps {}

type TypeEditDeleteApplication = (record: Application) => void;

const columns = (
	handleDeleteApplication: TypeEditDeleteApplication
): ColumnsType<Application> => [
	{
		title: "ID",
		dataIndex: "id",
		key: 1,
	},
	{
		title: "Названия заявки",
		dataIndex: "applicationName",
		key: 2,
	},
	{
		title: "Номер телефона",
		dataIndex: "phoneNumber",
		key: 3,
	},
	{
		title: "Тип заявки",
		dataIndex: "applicationType",
		key: 4,
	},
	{
		title: "Кол-во",
		dataIndex: "applicantsAmount",
		key: 5,
	},
	{
		title: "Город",
		dataIndex: "city",
		key: 6,
	},
	{
		title: "Звонок",
		dataIndex: "needCall",
		align: "center",
		key: 7,
		render: (record) => (record ? "Да" : "Нет"),
	},
	{
		title: "Дата",
		dataIndex: "applicationDate",
		align: "center",
		key: 8,
	},
	{
		title: "",
		dataIndex: "actions",
		key: 9,
		render: (_, record) => (
			<Space size="middle">
				<EditApplicationForm formData={record} />
				<Popconfirm
					title="Вы уверены, что хотите удалить?"
					onConfirm={() => handleDeleteApplication(record)}
					okText="Да"
					cancelText="Отменить"
					placement="left"
				>
					<CloseOutlined style={{ color: "#D20404" }} />
				</Popconfirm>
			</Space>
		),
	},
];

export const MyApplications: React.FC<MyApplicationsProps> = () => {
	const dispatch = useAppDispatch();
	const [messageApi, contextHolder] = message.useMessage();
	const {
		loading,
		applications,
		// error, todo
	} = useAppSelector((state) => state.applications);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get("/applications");
				dispatch(setApplications(response.data));
			} catch (error) {
				console.log(error);
			}
		};
		fetchProducts();
	}, [dispatch]);

	const handleDeleteApplication = async (record: Application) => {
		try {
			const response = await axios.delete(`/applications/${record.id}`);
			messageApi.open({
				type: "success",
				content: `${response.data.message}`,
				duration: 3,
			});
			dispatch(deleteApplication(record.id));
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			{contextHolder}
			<Table
				columns={columns(handleDeleteApplication)}
				dataSource={applications}
				loading={loading}
				rowKey={(record) => record.id}
			/>
		</>
	);
};

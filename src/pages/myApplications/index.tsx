import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setApplications } from "../../store/actions/applicationsActions";
import axios from "axios";

import { Table, Space } from "antd";
import type { ColumnsType } from "antd/es/table";

interface MyApplicationsProps {}

interface DataType {
	id: number;
	key: number;
	dataIndex: string;
	align: string;
	render: VoidFunction;
}

const columns: ColumnsType<DataType> = [
	{
		title: "ID",
		dataIndex: "id",
		key: 1,
	},
	{
		title: "ФИО",
		dataIndex: "applicantName",
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
		render: () => (
			<Space size="middle">
				<a>Edit</a>
				<a>Delete</a>
			</Space>
		),
	},
];

export const MyApplications: React.FC<MyApplicationsProps> = () => {
	const dispatch = useAppDispatch();
	const { loading, applications, error } = useAppSelector(
		(state) => state.applications
	);

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

	return (
		<Table
			columns={columns}
			dataSource={applications}
			loading={loading}
			rowKey={(record) => record.id}
		/>
	);
};

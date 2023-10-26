import React from "react";
import { Table, Space } from "antd";
import type { ColumnsType } from "antd/es/table";

interface MyApplicationsProps {}

interface DataType {
	name: {
		first: string;
		last: string;
	};
	gender: string;
	email: string;
	login: {
		uuid: string;
	};
}

const columns: ColumnsType<DataType> = [
	{
		title: "ID",
		dataIndex: "id",
	},
	{
		title: "ФИО",
		dataIndex: "name",
	},
	{
		title: "Номер телефона",
		dataIndex: "phoneNumber",
	},
	{
		title: "Тип заявки",
		dataIndex: "type",
	},
	{
		title: "Кол-во",
		dataIndex: "date",
	},
	{
		title: "Город",
		dataIndex: "city",
	},
	{
		title: "Звонок",
		dataIndex: "needCall",
	},
	{
		title: "",
		dataIndex: "actions",
		render: () => (
			<Space size="middle">
				<a>Edit</a>
				<a>Delete</a>
			</Space>
		),
	},
];

export const MyApplications: React.FC<MyApplicationsProps> = () => {
	return <Table columns={columns} />;
};

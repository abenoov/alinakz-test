import React, { useEffect } from "react";
import { Table, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { getApplications } from "../../store/actions";
import { RootState } from "../../store/store";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

interface MyApplicationsProps {}

interface DataType {
	id: number;
	key: number;
	name: string;
	phoneNumber: string;
	type: string;
	date: string;
	city: string;
	needCall: boolean;
}

const columns: ColumnsType<DataType> = [
	{
		title: "ID",
		dataIndex: "id",
		key: 1,
	},
	{
		title: "ФИО",
		dataIndex: "name",
		key: 2,
	},
	{
		title: "Номер телефона",
		dataIndex: "phoneNumber",
		key: 3,
	},
	{
		title: "Тип заявки",
		dataIndex: "type",
		key: 4,
	},
	{
		title: "Кол-во",
		dataIndex: "date",
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
		key: 7,
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
	const dispatch = useDispatch();
	const products = useSelector((state: RootState) => state.applications);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get("/applications");
				dispatch(getApplications(response.data));
			} catch (error) {
				console.log(error);
			}
		};
		fetchProducts();
	}, [dispatch]);

	return (
		<Table
			columns={columns}
			dataSource={products}
			rowKey={(record) => record.id}
		/>
	);
};

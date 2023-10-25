import React from "react";
import { Link } from "react-router-dom";
import {
	DashboardOutlined,
	FileTextOutlined,
	FileAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu, ConfigProvider, theme, Row, Col } from "antd";
import type { MenuProps } from "antd";
import logo from "./assets/company-logo.png";

const items: MenuProps["items"] = [
	{
		key: "1",
		icon: <DashboardOutlined />,
		label: <Link to="/dashboard">Dashboard</Link>,
	},
	{
		key: "2",
		icon: <FileTextOutlined />,
		label: <Link to="/my-applications">Мои заявки</Link>,
	},
	{
		key: "3",
		icon: <FileAddOutlined />,
		label: <Link to="/new-application">Новая заявка</Link>,
	},
];

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<ConfigProvider
			theme={{
				components: {
					Layout: {
						bodyBg: "#fff0",
					},
				},
			}}
		>
			<Layout hasSider>
				<Sider style={{ backgroundColor: "#fff" }}>
					<div className="demo-logo-vertical">
						<img
							src={logo}
							alt="alina group logo"
							style={{
								width: "90px",
								height: "42px",
								margin: "30px 0 20px 30px",
							}}
						/>
					</div>
					<Menu
						theme="light"
						mode="inline"
						defaultSelectedKeys={["1"]}
						items={items}
					/>
				</Sider>
				<Layout
					style={{
						padding: "0 40px",
					}}
				>
					<Header
						style={{ padding: 0, margin: "0 24px", background: "#e9f5ff" }}
					>
						<Row justify="space-between">
							<Col>Dashboard</Col>
							<Col>User</Col>
						</Row>
					</Header>
					<Content
						style={{
							margin: "24px 16px",
							padding: 24,
							minHeight: 280,
							background: colorBgContainer,
							borderRadius: "20px",
						}}
					>
						Content
					</Content>
				</Layout>
			</Layout>
		</ConfigProvider>
	);
};

export default App;

import React from "react";
import { Link } from "react-router-dom";
import { Menu, Layout } from "antd";
import {
	DashboardOutlined,
	FileTextOutlined,
	FileAddOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import logo from "../../assets/company-logo.png";

import styles from "./sideMenu.module.css";

const { Sider } = Layout;

const menuItems: MenuProps["items"] = [
	{
		key: "dashboard",
		icon: <DashboardOutlined />,
		label: <Link to="/dashboard">Dashboard</Link>,
	},
	{
		key: "my-applications",
		icon: <FileTextOutlined />,
		label: <Link to="/my-applications">Мои заявки</Link>,
	},
	{
		key: "new-application",
		icon: <FileAddOutlined />,
		label: <Link to="/new-application">Новая заявка</Link>,
	},
];

interface SideMenuProps {
	selectedMenuItem: string;
}

export const SideMenu: React.FC<SideMenuProps> = ({ selectedMenuItem }) => {
	return (
		<Sider className={styles.Sider}>
			<div className={styles.logoWrapper}>
				<Link to="/">
					<img src={logo} alt="alina group logo" />
				</Link>
			</div>
			<Menu
				theme="light"
				mode="inline"
				defaultOpenKeys={["dashboard", "my-applications", "new-application"]}
				defaultSelectedKeys={[selectedMenuItem]}
				items={menuItems}
			/>
		</Sider>
	);
};

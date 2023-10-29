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
	setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideMenu: React.FC<SideMenuProps> = ({
	selectedMenuItem,
	setIsOpen,
}) => {
	return (
		<Sider className={styles.sider}>
			<div className={styles.logoWrapper}>
				<Link to="/">
					<img src={logo} alt="alina group logo" />
				</Link>
			</div>
			<Menu
				disabledOverflow={false}
				theme="light"
				mode="inline"
				defaultOpenKeys={["dashboard", "my-applications", "new-application"]}
				defaultSelectedKeys={[selectedMenuItem]}
				selectedKeys={[location.pathname.split("/")[1] || "dashboard"]}
				items={menuItems}
				className={styles.menu}
				onSelect={() => setIsOpen?.((isOpen) => !isOpen)}
			/>
		</Sider>
	);
};

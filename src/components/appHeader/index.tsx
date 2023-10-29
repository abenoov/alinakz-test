import { Layout, Row, Col, Avatar, Typography, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

import avatar from "../../assets/avatar-mock.jpeg";
import styles from "./appHeader.module.css";

const { Header } = Layout;
const { Title } = Typography;

interface AppHeaderProps {
	selectedMenuItem: string;
	userName: string;
	setCollapsedMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const pageLabels: { [key: string]: string } = {
	dashboard: "Dashboard: Анализ заявок компании",
	"my-applications": "Мои заявки",
	"new-application": "Новая заявка",
};

export const AppHeader: React.FC<AppHeaderProps> = ({
	selectedMenuItem,
	userName,
	setCollapsedMenu,
}) => {
	const { md } = useBreakpoint();

	return (
		<Header className={styles.header}>
			<Row className={styles.headerContainer}>
				<Title className={styles.pageTitle} level={4}>
					{!md && (
						<Button
							type="text"
							icon={<MenuOutlined className={styles.burgerMenuIcon} />}
							onClick={() =>
								setCollapsedMenu((collapsedMenu) => !collapsedMenu)
							}
						/>
					)}
					{pageLabels[selectedMenuItem as string]}
				</Title>
				<Col>
					<Avatar
						className={styles.avatar}
						src={<img src={avatar} alt="avatar" />}
						size="large"
					></Avatar>
					<span className={styles.userName}>{userName}</span>
				</Col>
			</Row>
		</Header>
	);
};

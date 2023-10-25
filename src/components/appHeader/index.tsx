import { Layout, Row, Col, Avatar, Typography } from "antd";
import avatar from "../../assets/avatar-mock.jpeg";

import styles from "./appHeader.module.css";

const { Header } = Layout;
const { Title } = Typography;

interface AppHeaderProps {
	selectedMenuItem: string;
	userName: string;
}

const pageLabels: { [key: string]: string } = {
	dashboard: "Dashboard: Анализ заявок компании",
	"my-applications": "Мои заявки",
	"new-application": "Новая заявка",
};

export const AppHeader: React.FC<AppHeaderProps> = ({
	selectedMenuItem,
	userName,
}) => {
	return (
		<Header className={styles.header}>
			<Row className={styles.headerContainer}>
				<Col>
					<Title className={styles.pageTitle} color="#233D82" level={4}>
						{pageLabels[selectedMenuItem as string]}
					</Title>
				</Col>
				<Col>
					<Avatar
						className={styles.avatar}
						src={<img src={avatar} alt="avatar" />}
						size="large"
					/>
					<span>{userName}</span>
				</Col>
			</Row>
		</Header>
	);
};

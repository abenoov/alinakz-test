import React from "react";
import { useLocation } from "react-router-dom";
import { Layout, theme, Row, Col } from "antd";
import { Routers } from "./routers/Routers";
import { SideMenu } from "./components";

const { Header, Content } = Layout;

const App: React.FC = () => {
	const location = useLocation();
	const selectedMenuItem: string = location.pathname.substring(1);

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout hasSider>
			<SideMenu selectedMenuItem={selectedMenuItem} />
			<Layout
				style={{
					padding: "0 40px",
				}}
			>
				<Header style={{ padding: 0, margin: "0 24px", background: "#e9f5ff" }}>
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
					<Routers />
				</Content>
			</Layout>
		</Layout>
	);
};

export default App;

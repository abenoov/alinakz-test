import React from "react";
import { useLocation } from "react-router-dom";
import { Layout, theme } from "antd";
import { Routers } from "./routers/Routers";
import { AppHeader, SideMenu } from "./components";

const { Content } = Layout;

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
				<AppHeader userName="Иванов И.И." selectedMenuItem={selectedMenuItem} />
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

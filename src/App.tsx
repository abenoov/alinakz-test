import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Layout, theme } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { Routers } from "./routers/Routers";
import { AppHeader, BurgerMenu, SideMenu } from "./components";

const { Content } = Layout;

const App: React.FC = () => {
	const [collapsedMenu, setCollapsedMenu] = useState<boolean>(false);

	const location = useLocation();
	const selectedMenuItem: string = location.pathname.substring(1);

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const { md } = useBreakpoint();

	return (
		<Layout hasSider>
			{md ? (
				<SideMenu selectedMenuItem={selectedMenuItem} />
			) : (
				<BurgerMenu isOpen={collapsedMenu} setIsOpen={setCollapsedMenu}>
					<SideMenu
						selectedMenuItem={selectedMenuItem}
						setIsOpen={setCollapsedMenu}
					/>
				</BurgerMenu>
			)}
			<Layout
				style={{
					padding: "0 40px",
				}}
			>
				<AppHeader
					userName="Иванов И.И."
					selectedMenuItem={selectedMenuItem}
					setCollapsedMenu={setCollapsedMenu}
				/>
				<Content
					style={{
						margin: "24px 16px 10% 24px",
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

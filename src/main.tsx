import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Provider store={store}>
			<ConfigProvider
				theme={{
					components: {
						Layout: {
							bodyBg: "#fff0",
						},
						Table: {
							headerBg: "#fff",
							headerColor: "#233d82",
							headerSplitColor: "#fff",
						},
					},
				}}
			>
				<App />
			</ConfigProvider>
		</Provider>
	</BrowserRouter>
);

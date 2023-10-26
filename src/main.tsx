import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
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
	</BrowserRouter>
);

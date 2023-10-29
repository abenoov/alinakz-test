import { Routes, Route } from "react-router-dom";
import { Dashboard, MyApplications, NewApplication } from "../pages";

const RoutersProps = {};

export const Routers: React.FC<typeof RoutersProps> = () => {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/my-applications" element={<MyApplications />} />
			<Route path="/new-application" element={<NewApplication />} />
			<Route path="*" element={<h1>Page not found</h1>} />
		</Routes>
	);
};

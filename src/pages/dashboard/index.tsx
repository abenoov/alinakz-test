import { Row, Col } from "antd";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
	return (
		<>
			<Row>
				<Col span={24}>Line chart</Col>
			</Row>
			<Row>
				<Col span={8}>Horizontal bar chart</Col>
				<Col span={8}>Vertical bar chart</Col>
				<Col span={8}>Pie chart</Col>
			</Row>
		</>
	);
};

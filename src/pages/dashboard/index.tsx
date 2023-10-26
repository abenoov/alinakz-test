import { Row, Col } from "antd";
import { LineGraph } from "../../components";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
	return (
		<>
			<Row>
				<Col span={24}>
					<LineGraph />
				</Col>
			</Row>
			<Row>
				<Col span={8}>Horizontal bar chart</Col>
				<Col span={8}>Vertical bar chart</Col>
				<Col span={8}>Pie chart</Col>
			</Row>
		</>
	);
};

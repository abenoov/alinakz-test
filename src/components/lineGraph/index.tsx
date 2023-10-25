import {
	ComposedChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

import { data } from "../../db/apiCurrencyMock";

interface LineGraphProps {}

export const LineGraph: React.FC<LineGraphProps> = () => {
	return (
		<ResponsiveContainer width="100%" height={400}>
			<ComposedChart
				width={500}
				height={400}
				data={data}
				margin={{
					top: 10,
					right: 30,
					left: 0,
					bottom: 0,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="date" />
				<YAxis domain={[0, 600]} />
				<Tooltip />
				<Area
					type="monotone"
					dataKey="buy"
					stroke="green"
					fillOpacity={0.3}
					fill="#82ca9d"
				/>
				<Area
					type="monotone"
					dataKey="sale"
					stroke="red"
					fillOpacity={0.3}
					fill="#8884d8"
				/>
			</ComposedChart>
		</ResponsiveContainer>
	);
};

import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const data = [
	{
		date: "1-10-2023",
		buy: 447,
		sale: 450,
	},
	{
		date: "2-10-2023",
		buy: 443,
		sale: 451,
	},
	{
		date: "3-10-2023",
		buy: 400,
		sale: 420,
	},
	{
		date: "4-10-2023",
		buy: 410,
		sale: 412,
	},
];

const mock = new MockAdapter(axios);

mock.onGet("/currency").reply(200, data);

export default axios;

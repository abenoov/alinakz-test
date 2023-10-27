import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { currency_data, applications_data } from "./mockedData";

const mock = new MockAdapter(axios);

mock.onGet("/currency").reply(200, currency_data);

mock.onGet("/applications").reply(200, applications_data);

mock.onPost("/application/create").reply(function (config) {
	const requestData = JSON.parse(config.data);
	applications_data.push(requestData);

	return [
		200,
		{
			applications_data,
		},
	];
});

export default axios;

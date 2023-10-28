import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { currency_data, applications_data } from "./mockedData";

const mock = new MockAdapter(axios);

mock.onGet("/currency").reply(200, currency_data);

mock.onGet("/applications").reply(200, applications_data);

mock.onPost("/applications").reply(function (config) {
	const requestData = JSON.parse(config.data);
	applications_data.push(requestData);

	return [
		200,
		{
			message: `Заявка успешно создана`,
			applications_data,
		},
	];
});

mock.onDelete(new RegExp("/applications/\\d+")).reply((config) => {
	if (!config || !config.url) {
		return [400, { message: "Invalid request" }];
	}

	const lastSegment = config.url.split("/").pop();
	if (!lastSegment) {
		return [400, { message: "Invalid request" }];
	}

	const idToDelete = parseInt(lastSegment, 10);
	if (Number.isNaN(idToDelete)) {
		return [400, { message: "Invalid ID" }];
	}

	const initialLength = applications_data.length;
	const applications_data_new = applications_data.filter(
		(app) => app.id !== idToDelete
	);

	if (applications_data_new.length < initialLength) {
		return [200, { message: `Заявка ${idToDelete} успешна уделана` }];
	} else {
		return [404, { message: "Неправильный ID" }];
	}
});

mock.onPut(/^\/applications\/\d+$/).reply((config) => {
	if (!config || !config.url) {
		return [400, { message: "Invalid request" }];
	}
	const lastSegment = config.url.split("/").pop();
	if (!lastSegment) {
		return [400, { message: "Invalid request" }];
	}

	const idToEdit = parseInt(lastSegment, 10);
	if (Number.isNaN(idToEdit)) {
		return [400, { message: "Invalid ID" }];
	}

	const applicationIndex = applications_data.findIndex(
		(app) => app.id === idToEdit
	);

	if (applicationIndex === -1) {
		return [404, { message: "Application not found" }];
	}

	const updatedData = JSON.parse(config.data);
	applications_data[applicationIndex] = {
		...applications_data[applicationIndex],
		...updatedData,
	};

	return [200, { message: `Заявка ${idToEdit} успешно изменено` }];
});

export default axios;

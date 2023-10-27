export const GET_APPLICATIONS = "GET_APPLICATIONS";

export const getApplications = (applications: []) => ({
	type: GET_APPLICATIONS,
	payload: applications,
});

export type ApplicationsActions = ReturnType<typeof getApplications>;

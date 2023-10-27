import { Application } from "../../types/applications";

export const APPLICATIONS_LOADING = "APPLICATIONS_LOADING" as const;
export const SET_APPLICATIONS = "SET_APPLICATIONS" as const;
export const APPLICATIONS_FAILED = "APPLICATIONS_FAILED" as const;

export const CREATE_APPLICATION = "CREATE_APPLICATION" as const;
export const DELETE_APPLICATION = "DELETE_APPLICATION" as const;

export const loadingApplications = () => ({
	type: APPLICATIONS_LOADING,
});

export const setApplications = (applications: Application[]) => ({
	type: SET_APPLICATIONS,
	payload: applications,
});

export const failedApplications = (error: string) => ({
	type: APPLICATIONS_FAILED,
	payload: error,
});

export const createApplication = (newApplication: Application) => ({
	type: CREATE_APPLICATION,
	payload: newApplication,
});

export const deleteApplication = (id: number) => ({
	type: DELETE_APPLICATION,
	payload: id,
});

export type ApplicationsActions =
	| ReturnType<typeof loadingApplications>
	| ReturnType<typeof setApplications>
	| ReturnType<typeof failedApplications>
	| ReturnType<typeof createApplication>
	| ReturnType<typeof deleteApplication>;

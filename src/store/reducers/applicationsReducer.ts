import { Application } from "../../types/applications";

import {
	APPLICATIONS_LOADING,
	SET_APPLICATIONS,
	APPLICATIONS_FAILED,
	ApplicationsActions,
	CREATE_APPLICATION,
} from "../actions/applicationsActions";

type State = {
	loading: boolean;
	applications: Application[];
	error: string;
};

const initialState: State = {
	loading: false,
	applications: [],
	error: "",
};

export const applicationsReducer = (
	state = initialState,
	action: ApplicationsActions
) => {
	switch (action.type) {
		case APPLICATIONS_LOADING:
			return { ...state, loading: true };
		case SET_APPLICATIONS:
			return { ...state, loading: false, applications: action.payload };
		case APPLICATIONS_FAILED:
			return { ...state, loading: false, error: action.payload };
		case CREATE_APPLICATION:
			return {
				...state,
				applications: [...state.applications, action.payload],
			};
		default:
			return state;
	}
};

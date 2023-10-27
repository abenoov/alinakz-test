import { GET_APPLICATIONS, ApplicationsActions } from "./actions";

type State = {
	loading: boolean;
	applications: [];
	error: string;
};

const initialState: State = {
	loading: true,
	applications: [],
	error: "",
};

const rootReducer = (state = initialState, action: ApplicationsActions) => {
	switch (action.type) {
		case GET_APPLICATIONS:
			return {
				...state,
				applications: action.payload,
				loading: false,
			};
		///...
		default:
			return state;
	}
};

export default rootReducer;

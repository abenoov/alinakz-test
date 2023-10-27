import { combineReducers } from "@reduxjs/toolkit";
import { applicationsReducer } from "./applicationsReducer";

export const rootReducers = combineReducers({
	applications: applicationsReducer,
});

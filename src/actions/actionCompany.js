import { ADD_COMPANY, DELETE_COMPANY } from '../constans';

export const addCompany = company => ({
	type: ADD_COMPANY,
	company
});

export const deleteCompany = inn => ({
	type: DELETE_COMPANY,
	inn
});
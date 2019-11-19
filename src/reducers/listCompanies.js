import { ADD_COMPANY, DELETE_COMPANY } from '../constans';

const listCompanies = (state=[], { company, inn, type }) => {
	switch (type) {
		case ADD_COMPANY:
			return [
				...state,
				company
			];

		case DELETE_COMPANY:
			return [...state].filter(data => (
				data.inn !== inn
			));

		default:
			return state;
	}
}

export default listCompanies;
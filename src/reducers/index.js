import { combineReducers } from 'redux';
import listCompanies from './listCompanies';

const rootReducer = combineReducers({ listCompanies });

export default rootReducer;
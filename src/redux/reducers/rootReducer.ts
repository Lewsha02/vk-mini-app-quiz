import { combineReducers } from 'redux';
import { scoreReducer } from './scoreReducer';
import { answersReducer } from './answersReducer';

export const rootReducer = combineReducers({
	scoreReducer,
	answersReducer
});

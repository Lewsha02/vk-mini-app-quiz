import { combineReducers } from 'redux';
import { scoreReducer } from './scoreReducer';
import { answersReducer } from './answersReducer';
import { dataReducer } from './dataReducer';

export const rootReducer = combineReducers({
	scoreReducer,
	answersReducer,
	dataReducer
});

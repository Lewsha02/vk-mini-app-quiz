import { IScoreAction } from '../../interfaces';

const initialState = {
	scoreValue: 0
}

// Pure Functions
export const scoreReducer = (state = initialState, action: IScoreAction) => {
	switch(action.type) {
		case 'INCREASE_SCORE':
			return {
				scoreValue: ++action.payload
			};
		case 'RESET_SCORE': 
			return {
				scoreValue: 0
			}

		default: 
			return state;
	}
};
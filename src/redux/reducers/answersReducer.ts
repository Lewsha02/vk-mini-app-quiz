import { IAnswersAction } from '../../interfaces';

const initialState = {
	answers: {},
};

export const answersReducer = (state = initialState, action: IAnswersAction) => {
	switch(action.type) {
		case 'ADD_OPTION':
			return {
				...state,
				answers: action.payload
			}
	}
}
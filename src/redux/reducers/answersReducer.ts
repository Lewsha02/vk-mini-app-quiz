import { IAnswersAction } from '../../interfaces';

const initialState = {
	answers: []
};

export const answersReducer = (state = initialState, action: IAnswersAction) => {
	switch(action.type) {
		case 'ADD_ANSWERS': {
			const newAnswers = [...state.answers, action.payload];

			return {
				...state,
				answers: newAnswers,
			}
		}
		
		case 'RESET_ANSWERS':
			return {
				answers: []
			}

		default:
			return state;
	}
}
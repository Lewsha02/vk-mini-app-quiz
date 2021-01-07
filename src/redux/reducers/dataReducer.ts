import { IDataAction } from '../../interfaces';
import { QuestionItem } from '../../interfaces';

const initialState: { quizItems: QuestionItem[] } = {
	quizItems: [],
}

export const dataReducer = (state = initialState, action: IDataAction) => {
	switch(action.type) {
		case 'SET_QUIZ': 
			return {
				...state,
				quizItems: action.payload
			};

		default:
			return state;
	}
}; 
import { QuestionItem } from "./../../interfaces";
import { IDataAction } from "../../interfaces";

const initialState: { quizItems: QuestionItem[] } = {
	quizItems: [
		{
			question: "Какого типа данных нет в JS?",
			answers: [
				{ option: "String", isCorrect: false },
				{ option: "Boolean", isCorrect: false },
				{ option: "Symbol", isCorrect: false },
				{ option: "Integer", isCorrect: true },
			],
		},
		{
			"question": "Какой результат вызова typeof null?",
			"answers": [
				{ "option": "null", "isCorrect": false },
				{ "option": "object", "isCorrect": true },
				{ "option": "number", "isCorrect": false },
				{ "option": "string", "isCorrect": false }
			]
		},
		{
			"question": "Чему равно '1' + 1 в JS?",
			"answers": [
				{ "option": "2", "isCorrect": false },
				{ "option": "1", "isCorrect": false },
				{ "option": "11", "isCorrect": true },
				{ "option": "NaN", "isCorrect": false }
			]
		},
		{
			"question": "В каком стандарте JS появились стрелочные функции?",
			"answers": [
				{ "option": "ES5", "isCorrect": false },
				{ "option": "ES6", "isCorrect": true },
				{ "option": "ES7", "isCorrect": false },
				{ "option": "ES8", "isCorrect": false }
			]
		},
		{
			"question": "В каком году был придуман JS?",
			"answers": [
				{ "option": "1995", "isCorrect": true },
				{ "option": "2002", "isCorrect": false },
				{ "option": "2010", "isCorrect": false },
				{ "option": "2020...", "isCorrect": false }
			]
		}
	],
};

export const dataReducer = (state = initialState, action: IDataAction) => {
	switch (action.type) {
		case "ADD_CUSTOM_QUIZ": {
			const newQuizItems = [action.payload, ...state.quizItems];
			return {
				...state,
				quizItems: newQuizItems 
			};
		}

		default:
			return state;
	}
};

import { Questions } from './../../interfaces';
import { IDataAction } from "../../interfaces";

const initialState: Questions = {
	quizItems: {
		0: {
			question: "Какого типа данных нет в JS",
			answers: [
				{ option: "string", isCorrect: false },
				{ option: "boolean", isCorrect: false },
				{ option: "symbol", isCorrect: false },
				{ option: "integer", isCorrect: true },
			],
		},
		1: {
			question: "Какой результат вызова typeof null?",
			answers: [
				{ option: "null", isCorrect: false },
				{ option: "object", isCorrect: true },
				{ option: "number", isCorrect: false },
				{ option: "string", isCorrect: false },
			],
		},
		2: {
			question: "Чему равно '1' + 1 в JS?",
			answers: [
				{ option: "2", isCorrect: false },
				{ option: "1", isCorrect: false },
				{ option: "11", isCorrect: true },
				{ option: "NaN", isCorrect: false },
			],
		},
		3: {
			question: "В каком стандарте JS появились стрелочные функции?",
			answers: [
				{ option: "ES5", isCorrect: false },
				{ option: "ES6", isCorrect: true },
				{ option: "ES7", isCorrect: false },
				{ option: "ES8", isCorrect: false },
			],
		},
		4: {
			question: "В каком году был придуман JS?",
			answers: [
				{ option: "1995", isCorrect: true },
				{ option: "2002", isCorrect: false },
				{ option: "2010", isCorrect: false },
				{ option: "2020...", isCorrect: false },
			],
		},
	},
};

export const dataReducer = (state = initialState, action: IDataAction) => {
	switch (action.type) {
		case "ADD_CUSTOM_QUIZ": {
			const keyForNewQuiz = Object.values(state.quizItems).length - 1;
			const newQuizItems = {
				...state.quizItems,
				[keyForNewQuiz]: action.payload,
			}
			return {
				...state,
				quizItems: newQuizItems,
			};
		}

		default:
			return state;
	}
};

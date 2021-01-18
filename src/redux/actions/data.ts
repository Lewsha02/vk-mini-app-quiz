import { QuestionItem } from '../../interfaces';

export const addCustomQuiz = (customQuizItem: QuestionItem) => ({
	type: 'ADD_CUSTOM_QUIZ',
	payload: customQuizItem
});
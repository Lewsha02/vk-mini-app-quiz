import { QuestionItem } from '../../interfaces';

export const setCustomQuiz = (customQuizItem: QuestionItem) => ({
	type: 'ADD_CUSTOM_QUIZ',
	payload: customQuizItem
});
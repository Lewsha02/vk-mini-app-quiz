import { QuestionItem } from '../../interfaces';

export const setQuiz = (quizItems: QuestionItem[]) => ({
	type: 'SET_QUIZ',
	payload: quizItems
});
export interface answerOptions {
	option: string,
	isCorrect: boolean
};

export interface QuestionItem {
	question: string;
	answers: Array<answerOptions>
};

import { rootReducer } from "./redux/reducers/rootReducer";
export type RootState = ReturnType<typeof rootReducer>;

export interface IScorePayload {
	score: number
};

export interface IAnswersPayload {
	question: string,
	userOption: string,
	correctOption: string,
}

export interface IResultProps {
	score: number
}

export interface IScoreAction {
	type: 'INCREASE_SCORE' | 'RESET_SCORE',
}

export interface IAnswersAction {
	type: 'ADD_ANSWERS' | 'RESET_ANSWERS',
	payload: IAnswersPayload
}

export interface IDataAction {
	type: 'ADD_CUSTOM_QUIZ',
	payload: QuestionItem
}

declare module 'react-redux' {
	export interface DefaultRootState extends RootState{}
}
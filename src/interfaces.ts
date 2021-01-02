export interface answerOptions {
	option: string,
	isCorrect: boolean
};

export interface QuestionItem {
	question: string;
	answers: Array<answerOptions>
};

export interface Questions extends Array<QuestionItem>{};

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

declare module 'react-redux' {
	export interface DefaultRootState extends RootState{}
}
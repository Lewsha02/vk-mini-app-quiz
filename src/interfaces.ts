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
	answerIndex: number,
	userOption: string,
	correctOption: string,
}

export interface IResultProps {
	score: number
}

export interface IScoreAction {
	type: string
	payload: number
}

export interface IAnswersAction {
	type: string,
	payload: object
}
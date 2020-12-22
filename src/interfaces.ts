export interface answerOptions {
	option: string,
	isCorrect: boolean
};

export interface QuestionItem {
	question: string;
	answers: Array<answerOptions>
};

export interface Questions extends Array<QuestionItem>{};

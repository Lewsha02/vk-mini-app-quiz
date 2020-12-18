export interface QuestionItem {
	question: string;
	answers: Array<string>
	correct: number;
}
export interface Questions extends Array<QuestionItem>{}

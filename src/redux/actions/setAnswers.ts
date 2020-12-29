import { IAnswersPayload } from '../../interfaces'; 

export const addAnswers = (payload: IAnswersPayload) => ({
	type: 'ADD_ANSWERS',
	payload
});
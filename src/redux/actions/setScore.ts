import { IScorePayload } from '../../interfaces';

export const increaseScore = (payload: IScorePayload) => ({
	type: 'INCREASE_SCORE',
	payload
});

export const resetScore = () => ({
	type: 'RESET_SCORE',
});
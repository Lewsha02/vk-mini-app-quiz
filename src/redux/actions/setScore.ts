interface Iscore {
	score: number
}

export const setScore = (payload: Iscore) => ({
	type: 'SET_SCORE',
	payload,
});
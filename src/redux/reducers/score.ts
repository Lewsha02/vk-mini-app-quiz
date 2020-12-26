const initialState = {
	score: 0
}

// Pure Functions
export const score = (state = initialState, action: any) => {
	switch(action.type) {
		case 'SET_SCORE':
			return {
				...state,
				score: action.payload,
			};

		default: 
			return state;
	}
};
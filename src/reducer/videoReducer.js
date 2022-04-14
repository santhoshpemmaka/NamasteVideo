import {ACTION_TYPE} from "../constants/constant";

export const initialState = {
	videos: [],
	playlist: [],
	sortBy: "ALL",
	sortByDate: false,
};

export const videoReducer = (state, action) => {
	switch (action.type) {
		case ACTION_TYPE.INIT_VIDEOS:
			return {
				...state,
				videos: [
					...action.payload.map((video) => ({
						...video,
						isInHistory: false,
						isInWatchLater: false,
						isInLiked: false,
					})),
				],
			};
		case ACTION_TYPE.SORT_BY:
			return {
				...state,
				sortBy: action.payload,
			};

		case ACTION_TYPE.SORTBY_DATE:
			return {
				...state,
				sortByDate: !state.sortByDate,
			};

		default:
			return state;
	}
};

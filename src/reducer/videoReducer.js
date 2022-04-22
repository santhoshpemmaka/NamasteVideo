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

		case ACTION_TYPE.ADD_COMMENT:
			const {videoId, commentObj} = action.payload;
			return {
				...state,
				videos: [
					...state.videos.map((video) =>
						video._id === videoId
							? {...video, comments: [commentObj, ...video.comments]}
							: {...video}
					),
				],
			};

		case ACTION_TYPE.WATCH_LATER:
			return {
				...state,
				videos: state.videos.map((video) => ({
					...video,
					isInWatchLater: action.payload.some(
						(element) => element._id === video._id
					),
				})),
			};

		case ACTION_TYPE.LIKE_VIDEO:
			return {
				...state,
				videos: state.videos.map((video) => ({
					...video,
					isInLiked: action.payload.some(
						(element) => element._id === video._id
					),
				})),
			};

		case ACTION_TYPE.HISTORY_VIDEO:
			return {
				...state,
				videos: state.videos.map((video) => ({
					...video,
					isInHistory: action.payload.some(
						(element) => element._id === video._id
					),
				})),
			};

		default:
			return state;
	}
};

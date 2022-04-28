import axios from "axios";
import {ACTION_TYPE} from "../constants/constant";
import {
	addToLikeToastify,
	addToWatchLaterToastify,
	removeToLikeToastify,
	removeToWatchLaterToastify,
} from "./Toastify";

export const getVideosServer = async (dispatch) => {
	try {
		const config = {headers: {accept: "*/*"}};
		const response = await axios.get("/api/videos", config);
		if (response.status === 200 || response.status === 201) {
			dispatch({type: "INIT_VIDEOS", payload: response?.data?.videos});
		} else {
			throw new Error("Failed get videos from server");
		}
	} catch (error) {
		console.log("Err", error);
	}
};

export const removeFromWatchLater = async (dispatch, video, token) => {
	try {
		const {_id} = video;
		const config = {headers: {authorization: token}};
		const resposne = await axios.delete(`/api/user/watchlater/${_id}`, config);
		if (resposne.status === 200 || resposne.status === 201) {
			dispatch({
				type: ACTION_TYPE.WATCH_LATER,
				payload: resposne?.data?.watchlater,
			});
			removeToWatchLaterToastify("Removed From Watch Later Video");
		}
	} catch (error) {
		console.log("Error", error);
	}
};

export const addToWatchLater = async (dispatch, video, token) => {
	try {
		const config = {headers: {authorization: token}};
		const response = await axios.post("/api/user/watchlater", {video}, config);
		if (response.status === 200 || response.status === 201) {
			dispatch({
				type: ACTION_TYPE.WATCH_LATER,
				payload: response?.data?.watchlater,
			});
			addToWatchLaterToastify("Added To Watch Later Video");
		} else {
			throw new Error("Failed add to watch later");
		}
	} catch (error) {
		console.log("Err", error);
	}
};

export const addTolikeVideo = async (dispatch, video, token) => {
	try {
		const config = {headers: {authorization: token}};
		const response = await axios.post("/api/user/likes", {video}, config);
		if (response.status === 200 || response.status === 201) {
			dispatch({
				type: ACTION_TYPE.LIKE_VIDEO,
				payload: response?.data?.likes,
			});
			addToLikeToastify("Added To Like Video");
		} else {
			throw new Error("Failed add to like video");
		}
	} catch (error) {
		console.log("Error", error);
	}
};

export const removeFromlikeVideo = async (dispatch, video, token) => {
	try {
		const {_id} = video;
		const config = {headers: {authorization: token}};
		const response = await axios.delete(`/api/user/likes/${_id}`, config);
		if (response.status === 200 || response.status === 201) {
			dispatch({
				type: ACTION_TYPE.LIKE_VIDEO,
				payload: response?.data?.likes,
			});
			removeToLikeToastify("Remove To Like Video");
		} else {
			throw new Error("Failed remove to like video");
		}
	} catch (error) {
		console.log("Error", error);
	}
};

export const addToHistoryVideo = async (dispatch, video, token) => {
	try {
		const config = {headers: {authorization: token}};
		const response = await axios.post("/api/user/history", {video}, config);
		if (response.status === 200 || response.status === 201) {
			dispatch({
				type: ACTION_TYPE.HISTORY_VIDEO,
				payload: response?.data?.history,
			});
		} else {
			throw new Error("Failed add to history video");
		}
	} catch (error) {
		console.log("Err", error);
	}
};

export const removeFromHistoryVideo = async (dispatch, video, token) => {
	try {
		const {_id} = video;
		const config = {headers: {authorization: token}};
		const response = await axios.delete(`/api/user/history/${_id}`, config);
		if (response.status === 200 || response.status === 201) {
			dispatch({
				type: ACTION_TYPE.HISTORY_VIDEO,
				payload: response?.data.history,
			});
		} else {
			throw new Error("Failed remove from history video");
		}
	} catch (error) {
		console.log("Err", error);
	}
};

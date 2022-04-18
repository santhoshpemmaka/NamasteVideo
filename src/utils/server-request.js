import axios from "axios";
import {ACTION_TYPE} from "../constants/constant";

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
		} else {
			throw new Error("Failed add to watch later");
		}
	} catch (error) {
		console.log("Err", error);
	}
};

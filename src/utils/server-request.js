import axios from "axios";

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

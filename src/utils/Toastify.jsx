import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const addToWatchLaterToastify = (text) => {
	toast.success(text, {
		position: "top-right",
		autoClose: 1500,
	});
};

export const removeToWatchLaterToastify = (text) => {
	toast.warn(text, {
		position: "top-right",
		autoClose: 1500,
	});
};

export const addToLikeToastify = (text) => {
	toast.success(text, {
		position: "top-right",
		autoClose: 1500,
	});
};

export const removeToLikeToastify = (text) => {
	toast.warn(text, {
		position: "top-right",
		autoClose: 1500,
	});
};

export const loginTouserToastify = (text) => {
	toast.success(text, {
		position: "top-right",
		autoClose: 1500,
	});
};

export const loginTouserfailToastify = (text) => {
	toast.success(text, {
		position: "top-right",
		autoClose: 1500,
	});
};

export const logoutTouserToastify = (text) => {
	toast.success(text, {
		position: "top-right",
		autoClose: 1500,
	});
};

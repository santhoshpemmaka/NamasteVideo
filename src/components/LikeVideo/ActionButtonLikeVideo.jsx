import React, {useState} from "react";
import {useNavigate} from "react-router";
import {
	addTolikeVideo,
	addToWatchLater,
	removeFromlikeVideo,
	removeFromWatchLater,
} from "../../utils/server-request";
import {useAuthentication} from "../../context/AuthContext";
import {useData} from "../../context/VideoContext";

const ActionButtonLikeVideo = ({video}) => {
	const [showList, setshowList] = useState(false);
	const {state, dispatch} = useData();
	const navigate = useNavigate;
	const {
		state: {token},
	} = useAuthentication();
	const addwatchHandler = () => {
		token
			? video?.isInWatchLater
				? removeFromWatchLater(dispatch, video, token)
				: addToWatchLater(dispatch, video, token)
			: navigate("/login");
		setshowList((prev) => !prev);
	};

	const addlikeHandler = () => {
		token
			? video?.isInLiked
				? removeFromlikeVideo(dispatch, video, token)
				: addTolikeVideo(dispatch, video, token)
			: navigate("/login");
		setshowList((prev) => !prev);
	};
	return (
		<div className='action-btn-container'>
			<button
				className='btn-action-video'
				onClick={() => setshowList((prev) => !prev)}>
				<i className='fas fa-ellipsis-v'></i>
			</button>
			{showList && (
				<div className='playlist-container'>
					<button
						className={
							video?.isInLiked
								? "video-action-label-active"
								: "video-action-label-inactive"
						}
						onClick={() => addlikeHandler()}>
						<i className='fas fa-clock'></i>
						{video?.isInLiked ? "Remove Like Video" : "Add To Like Video"}
					</button>
					<button
						className={
							video?.isInWatchLater
								? "video-action-label-active"
								: "video-action-label-inactive"
						}
						onClick={() => addwatchHandler()}>
						<i className='fas fa-clock'></i>
						{video?.isInWatchLater
							? "Remove Watch Later"
							: "Add To Watch Later"}
					</button>
				</div>
			)}
		</div>
	);
};

export default ActionButtonLikeVideo;

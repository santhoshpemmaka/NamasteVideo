import React from "react";
import ActionButtonVideocard from "./ActionButtonVideocard";
import {useNavigate} from "react-router-dom";
import {useAuthentication} from "../../../../context/AuthContext";
import {useData} from "../../../../context/VideoContext";
import {addToHistoryVideo} from "../../../../utils/server-request";

const AllVideosList = ({video}) => {
	const navigate = useNavigate();
	const {
		state: {token},
	} = useAuthentication();
	const {state, dispatch} = useData();

	const videocardhandler = () => {
		navigate(`/video/${video._id}`);
		token
			? !video.isInHistory && addToHistoryVideo(dispatch, video, token)
			: navigate("/login");
	};

	return (
		<>
			{video && (
				<div className='video-card'>
					<img
						className='video-card-response'
						src={`https://i.ytimg.com/vi/${video._id}/hqdefault.jpg`}
						alt='video-card-image'
						onClick={() => videocardhandler()}
					/>
					<div className='video-desc'>
						<div className='video-desc-labels'>
							<label className='video-label-ellipses'>{video.title}</label>
							<ActionButtonVideocard video={video} />
						</div>
						<div className='video-desc-labels'>
							<label>{video.creator}</label>
							<label>{video.date}</label>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default AllVideosList;

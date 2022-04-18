import React from "react";
import "./WatchLaterVideo.scss";
import ActionButttonWatchlist from "./ActionButtonWatchlist";
import {useNavigate} from "react-router";

const WatchLaterVideo = ({watchVideo}) => {
	const navigate = useNavigate();

	const videocardhandler = () => {
		navigate(`/video/${watchVideo._id}`);
	};

	return (
		<>
			{watchVideo && (
				<div className='video-card'>
					<img
						className='video-card-response'
						src={`https://i.ytimg.com/vi/${watchVideo._id}/hqdefault.jpg`}
						alt='video-card-image'
						onClick={() => videocardhandler()}
					/>
					<div className='video-desc'>
						<div className='video-desc-labels'>
							<label className='video-label-ellipses'>{watchVideo.title}</label>
							<ActionButttonWatchlist video={watchVideo} />
						</div>
						<div className='video-desc-labels'>
							<label>{watchVideo.creator}</label>
							<label>{watchVideo.date}</label>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default WatchLaterVideo;

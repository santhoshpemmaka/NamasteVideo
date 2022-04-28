import React from "react";
import {useNavigate} from "react-router";
import "./LikeVideo.scss";
import ActionButtonLikeVideo from "./ActionButtonLikeVideo";
const LikeVideo = ({likeVideo}) => {
	const navigate = useNavigate();

	const videocardhandler = () => {
		navigate(`/video/${likeVideo._id}`);
	};
	return (
		<>
			{likeVideo && (
				<div className='video-card'>
					<img
						className='video-card-response'
						src={`https://i.ytimg.com/vi/${likeVideo._id}/hqdefault.jpg`}
						alt='video-card-image'
						onClick={() => videocardhandler()}
					/>
					<div className='video-desc'>
						<div className='video-desc-labels'>
							<label className='video-label-ellipses'>{likeVideo.title}</label>
							<ActionButtonLikeVideo video={likeVideo} />
						</div>
						<div className='video-desc-labels'>
							<label>{likeVideo.creator}</label>
							<label>{likeVideo.date}</label>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default LikeVideo;

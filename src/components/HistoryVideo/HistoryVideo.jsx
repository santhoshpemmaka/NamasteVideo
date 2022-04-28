import React from "react";
import {useNavigate} from "react-router";
import ActionButtonHistoryVideo from "./ActionButtonHistoryVideo";
import "./HistoryVideo.scss";

const HistoryVideo = ({historyVideo}) => {
	const navigate = useNavigate();

	const videocardhandler = () => {
		navigate(`/video/${historyVideo._id}`);
	};
	return (
		<>
			{historyVideo && (
				<div className='video-card'>
					<img
						className='video-card-response'
						src={`https://i.ytimg.com/vi/${historyVideo._id}/hqdefault.jpg`}
						alt='video-card-image'
						onClick={() => videocardhandler()}
					/>
					<div className='video-desc'>
						<div className='video-desc-labels'>
							<label className='video-label-ellipses'>
								{historyVideo.title}
							</label>
							<ActionButtonHistoryVideo video={historyVideo} />
						</div>
						<div className='video-desc-labels'>
							<label>{historyVideo.creator}</label>
							<label>{historyVideo.date}</label>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default HistoryVideo;

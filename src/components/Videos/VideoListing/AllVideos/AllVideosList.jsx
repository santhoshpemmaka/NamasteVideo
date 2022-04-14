import React from "react";
import ActionButtonVideocard from "./ActionButtonVideocard";
import {useNavigate} from "react-router-dom";

const AllVideosList = ({video}) => {
	const navigate = useNavigate();

	const videocardhandler = () => {
		navigate(`/video/${video._id}`);
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
							<ActionButtonVideocard vide={video} />
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

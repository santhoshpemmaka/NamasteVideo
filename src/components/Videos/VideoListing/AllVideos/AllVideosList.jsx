import React from "react";
import ActionButtonVideocard from "./ActionButtonVideocard";
const AllVideosList = ({video}) => {
	return (
		<>
			{video && (
				<div className='video-card'>
					<img
						className='video-card-response'
						src={video.image}
						alt='video-card-image'
					/>
					<div className='video-desc'>
						<div className='video-desc-labels'>
							<label className='video-label-ellipses'>
								{video.description}
							</label>
							<ActionButtonVideocard vide={video} />
						</div>
						<div className='video-desc-labels'>
							<label>{video.source}</label>
							<label>{video.date}</label>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default AllVideosList;

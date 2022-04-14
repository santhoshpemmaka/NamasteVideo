import React, {useState} from "react";

const ActionButtonVideocard = () => {
	const [showList, setshowList] = useState(false);
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
						className='video-action-label'
						onClick={() => setshowList((prev) => !prev)}>
						<i className='fas fa-clock'></i>
						Add to Watch Later
					</button>
					<button
						className='video-action-label'
						onClick={() => setshowList((prev) => !prev)}>
						<i className='fas fa-play-circle'></i>
						Add to Play List
					</button>
				</div>
			)}
		</div>
	);
};

export default ActionButtonVideocard;

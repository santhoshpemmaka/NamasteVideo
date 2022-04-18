import React, {useState} from "react";
import "./SingleVideo.scss";
import {useParams, useNavigate} from "react-router-dom";
import {useData} from "../../../context/VideoContext";
import {useAuthentication} from "../../../context/AuthContext";
import {ACTION_TYPE} from "../../../constants/constant";
import {
	removeFromWatchLater,
	addToWatchLater,
} from "../../../utils/server-request";

const SingleVideo = () => {
	const {videoId} = useParams();
	const navigate = useNavigate();
	const {state, dispatch} = useData();
	const [commentInput, setcommentInput] = useState("");
	const {
		state: {token, userName},
	} = useAuthentication();
	const video = state?.videos.find((video) => video._id === videoId);
	const clearHandler = () => {
		setcommentInput("");
	};

	const commentHandler = () => {
		const commentObj = {
			user: userName,
			comment: commentInput,
		};
		dispatch({type: ACTION_TYPE.ADD_COMMENT, payload: {videoId, commentObj}});
		setcommentInput("");
	};

	const watchHandler = () => {
		token
			? video?.isInWatchLater
				? removeFromWatchLater(dispatch, video, token)
				: addToWatchLater(dispatch, video, token)
			: navigate("/login");
	};
	return video ? (
		<div className='single-video'>
			<iframe
				width='100%'
				height='100%'
				src={`https://www.youtube.com/embed/${video._id}`}
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen=''></iframe>
			<div className='video-desc'>
				<div className='video-title'>
					<h2>{video.title}</h2>
					<h4>{video.creator}</h4>
				</div>
				<div className='video-options'>
					<div className='video-option-inselect'>
						<i className='fas fa-thumbs-up'></i>
						<label>Like</label>
					</div>
					<div
						className={
							video?.isInWatchLater
								? "video-option-select"
								: "video-option-inselect"
						}
						onClick={() => watchHandler()}>
						<i className='fas fa-clock'></i>
						<label>Watch Later</label>
					</div>
					<div className='video-option-inselect'>
						<i className='fas fa-copy'></i>
						<label>Copy</label>
					</div>
					<div className='video-option-inselect'>
						<i className='fas fa-share-alt'></i>
						<label>Share</label>
					</div>
				</div>
				<div className='video-description'>
					<label>Description :</label>
					<span>{video.description}</span>
				</div>
				<div className='video-comments'>
					<div className='video-comments-label'>
						<i className='fas fa-align-left'></i>
						<label>Comments :</label>
					</div>
					<div className='video-comments-input'>
						<span>{userName.charAt(0).toUpperCase()}</span>
						<input
							type='text'
							value={commentInput}
							onChange={(e) => setcommentInput(e.target.value)}
							placeholder='Add a comment...'
							onClick={() => !token && navigate("/login")}
						/>
						<button onClick={() => clearHandler()}>Clear</button>
						<button
							onClick={() => commentHandler()}
							disabled={commentInput.length === 0}>
							Comment
						</button>
					</div>
					{video?.comments
						.slice(0, video.comments.length - 1)
						.map((user_comment) => (
							<div className='video-user-comments' key={user_comment.comment}>
								<span>{user_comment?.user?.charAt(0).toUpperCase()}</span>
								<div className='video-user-comment'>
									<label className='video-user-comment-name'>
										{user_comment?.user}
									</label>
									<label>{user_comment?.comment}</label>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	) : (
		<></>
	);
};

export default SingleVideo;

import React from "react";
import "./SingleVideo.scss";
import {useParams} from "react-router-dom";
import {useData} from "../../../context/VideoContext";

const SingleVideo = () => {
	const {videoId} = useParams();
	const {state, dispatch} = useData();
	const video = state?.videos.find((video) => video._id === videoId);
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
					<div className='video-option'>
						<i className='fas fa-thumbs-up'></i>
						<label>Like</label>
					</div>
					<div className='video-option'>
						<i className='fas fa-clock'></i>
						<label>Watch Later</label>
					</div>
					<div className='video-option'>
						<i className='fas fa-copy'></i>
						<label>Copy</label>
					</div>
					<div className='video-option'>
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
						<i class='fas fa-align-left'></i>
						<label>Comments :</label>
					</div>
					<div className='video-comments-input'>
						<span>S</span>
						<input type='text' placeholder='Add a comment...' />
						<button>Clear</button>
						<button>Comment</button>
					</div>
					<div className='video-user-comments'>
						<span>T</span>
						<div className='video-user-comment'>
							<label className='video-user-comment-name'>Test User</label>
							<label>
								In publishing and graphic design, Lorem ipsum is a placeholder
								text commonly used to demonstrate the visual form of a document
								or a typeface without relying on meaningful content.
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : (
		<></>
	);
};

export default SingleVideo;

import React from "react";
import {useData} from "../../context/VideoContext";
import NavbarFilter from "../Videos/NavbarFilter/NavbarFilter";
import PlaylistVideo from "./PlaylistVideo";
import {Link} from "react-router-dom";
import "./PlaylistVideoListing.scss";

const PlaylistVideoListing = () => {
	const {state, dispatch} = useData();
	const playlistVideos = state && state.playlist;

	return (
		<div className='playlistvideo-container'>
			<NavbarFilter />
			<div className='playlistvideo'>
				<div className='playlistvideo-heading'>
					<h2>All Playlist Videos</h2>
				</div>
				<div className='playlist-grid-4-column-layout'>
					<Link to='/liked' className='link-no-style'>
						<div className='card-vertical'>
							<div className='overlay-text'>
								<h6>Liked Videos</h6>
							</div>
						</div>
					</Link>
					<Link to='/watchLater' className='link-no-style'>
						<div className='card-vertical'>
							<div className='overlay-text'>
								<h6>Saved Videos</h6>
							</div>
						</div>
					</Link>
				</div>
				<div className='spacer-3rem'></div>
			</div>
		</div>
	);
};

export default PlaylistVideoListing;

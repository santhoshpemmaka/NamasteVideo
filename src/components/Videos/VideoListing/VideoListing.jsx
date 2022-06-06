import React, {useState} from "react";
import "./VideoListing.scss";
import {navFilterOptions} from "../../../database";
import AllVideosList from "./AllVideos/AllVideosList";
import {useData} from "../../../context/VideoContext";
import {ACTION_TYPE} from "../../../constants/constant";
import {Link} from "react-router-dom";
import {
	getFilterData,
	getFilterDate,
	getSearchName,
} from "./AllVideos/DataFilter";
import {useAuthentication} from "../../../context/AuthContext";
const VideoListing = () => {
	const {state, dispatch} = useData();
	const {
		state: {token, userName, email},
		logoutUser,
	} = useAuthentication();
	const searchName = getSearchName(state);
	const filterData = getFilterDate(state, searchName);
	const AllVideos = getFilterData(state, filterData);
	const categoryHandler = (option) => {
		dispatch({type: ACTION_TYPE.SORT_BY, payload: option.label});
	};
	return (
		<div className='video-listing-container'>
			<div className='nav-filter-options'>
				{navFilterOptions &&
					navFilterOptions.map((option) => (
						<div
							key={option.label}
							className={
								option.label === state.sortBy
									? "nav-filter-option active"
									: "nav-filter-option"
							}>
							<label onClick={() => categoryHandler(option)}>
								{option.label}
							</label>
						</div>
					))}
			</div>
			{state.sortByDate ? (
				<div className='video-listing-sortoption'>
					<label onClick={() => dispatch({type: ACTION_TYPE.SORTBY_DATE})}>
						Clear Sorting
					</label>
				</div>
			) : (
				<div className='video-listing-sortoption'>
					<i className='fas fa-sort-amount-down'></i>
					<label onClick={() => dispatch({type: ACTION_TYPE.SORTBY_DATE})}>
						Sorting Latest
					</label>
				</div>
			)}
			<div className='video-grid-layout'>
				{AllVideos.length > 0 &&
					AllVideos.map((video) => (
						<AllVideosList video={video} key={video._id} />
					))}
			</div>
			<div className='spacer-3rem'></div>
			<div className='show-only-mobile'>
				<Link to='/' className='mobile-page-icon'>
					<i className='fas fa-home'></i>
				</Link>
				<Link to='/liked' className='mobile-page-icon'>
					<i className='fas fa-heart'></i>
				</Link>
				<Link to='/watchlater' className='mobile-page-icon'>
					<i className='fas fa-clock'></i>
				</Link>
				<Link to='/history ' className='mobile-page-icon'>
					<i className='fas fa-history'></i>
				</Link>
				<label className='mobile-page-icon' onClick={() => logoutUser()}>
					<i className='fas fa-sign-out-alt'></i>
				</label>
			</div>
		</div>
	);
};

export default VideoListing;

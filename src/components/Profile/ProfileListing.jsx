import React from "react";
import {useAuthentication} from "../../context/AuthContext";
import {useData} from "../../context/VideoContext";
import NavbarFilter from "../Videos/NavbarFilter/NavbarFilter";
import "./ProfileListing.scss";

const ProfileListing = () => {
	const {
		state: {token, userName, email},
		logoutUser,
	} = useAuthentication();
	return token ? (
		<div className='profile-container'>
			<NavbarFilter />
			<div className='user-profile'>
				<h2 className='user-profile-heading'>Account</h2>
				<div className='user-profile-description'>
					<h3>Profile</h3>
					<div className='user-profile-detail'>
						<h2>Profile Details</h2>
						<label>
							Full Name - <span>{userName}</span>
						</label>
						<label>
							Email -<span>{email}</span>
						</label>
						<button onClick={() => logoutUser()}>Log Out</button>
					</div>
				</div>
			</div>
		</div>
	) : null;
};

export default ProfileListing;

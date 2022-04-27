import React, {useState} from "react";
import "./Header.scss";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useAuthentication} from "../../context/AuthContext";
const Header = () => {
	const [showNav, setshowNav] = useState(false);
	const {
		state: {token, userName},
		logoutUser,
	} = useAuthentication();
	const navItems = [{text: "Home", link: "/", hideInDesktop: false}];
	const navHandler = () => {
		setshowNav((prev) => !prev);
	};
	return (
		<div className='container grid-layout'>
			<div className='container-header'>
				<div className='navbar-logo'>
					<i className='fas fa-bars menu-icon' onClick={navHandler}></i>
					<div className='header-logo show-in-mobile'>
						<Link to='/' className='header-logo-name'>
							<label>NAMASTE</label>
						</Link>
					</div>

					{showNav && (
						<div className='navbar-menu'>
							<ul className='nav-bar-links'>
								<li className='list-inline-item avatar-nav-link'>
									<a>
										<span>
											<i className='fas fa-user-alt user-icon'></i>
										</span>
									</a>
									<i
										className='fas fa-times close-icon'
										onClick={navHandler}></i>
								</li>
								{navItems &&
									navItems.length > 0 &&
									navItems.map((item) => (
										<Link
											key={item.text}
											to={item.link}
											style={{textDecoration: "none"}}>
											<li
												key={item.text}
												className='list-inline-item'
												onClick={navHandler}>
												{item.text}
											</li>
										</Link>
									))}
							</ul>
						</div>
					)}
				</div>
				<div className='header-logo hide-in-mobile'>
					<Link to='/' className='header-logo-name'>
						<label>NAMASTE</label>
					</Link>
				</div>

				<div className='right-sideheader'>
					<div className='search-bar'>
						<i className='fas fa-search search-icon'></i>
						<input
							type='text'
							className='search-text'
							placeholder='Search for videos'
						/>
					</div>
					<ul className='ul-tag-header ul-right'>
						{token ? (
							<li className='li-tag-header hide-in-mobile'>
								<Link className='a-tag-header-right' to='/profile'>
									<i className='fas fa-user header-icon'></i>
									<span>Hi, {userName}</span>
								</Link>
							</li>
						) : (
							<li className='li-tag-header hide-in-mobile'>
								<Link className='a-tag-header-right' to='/login'>
									<i className='fas fa-user header-icon'></i>
									<span>Login</span>
								</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;

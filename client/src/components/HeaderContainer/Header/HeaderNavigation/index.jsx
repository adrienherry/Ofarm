import React from "react";
import Grid from "@material-ui/core/Grid";
import { HiUserCircle } from "react-icons/hi";
import { IconContext } from "react-icons";
import "./header-navigation.scss";

import { useDispatch, useSelector } from "react-redux";
// import SearchBar from './SearchBar';
import HeaderNavbar from "./HeaderNavbar";
import { openUserMenu } from "../../../../store/actions/user";
import farmerImage from "/icons8-farmer-60.png";

const HeaderNavigation = () => {
	const dispatch = useDispatch();
	const username = useSelector((state) => state.user.username);
	const logged = useSelector((state) => state.auth.logged);

	const handleUserIconClick = () => {
		dispatch(openUserMenu());
	};

	return (
		<div className="header-navigation">
			<Grid container alignItems="center">
				<Grid item lg={8} md={7} />
				<Grid item lg={3} md={3}>
					<HeaderNavbar />
				</Grid>
				<div
					className="header-navigation__user-icon"
					onClick={handleUserIconClick}
				>
					<Grid
						container
						item
						lg={1}
						md={2}
						direction="column"
						alignItems="center"
					>
						<IconContext.Provider
							value={{
								color: "#bdbdbd",
								size: "65px",
							}}
						>
							{/* <HiUserCircle /> */}
							<div
								className="profile-image"
								style={{ backgroundImage: "url(" + farmerImage + ")" }}
							></div>
							{logged && (
								<div className="header-navigation__username">{username}</div>
							)}
						</IconContext.Provider>
					</Grid>
				</div>
			</Grid>
		</div>
	);
};

export default HeaderNavigation;

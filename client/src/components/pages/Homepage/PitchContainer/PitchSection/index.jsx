import React from "react";
import "./pitch-section.scss";
import PropTypes from "prop-types";
import { useTheme, useMediaQuery } from "@material-ui/core";

const PitchSection = ({ title, text, img }) => {
	const theme = useTheme();
	const isMedium = useMediaQuery(theme.breakpoints.down("md"));
	return (
		<div className="pitch-section">
			<p className="pitch-section__titre">{title}</p>
			<div className="pitch-section__content">
				<div className="pitch-section__content__left" style={{ backgroundImage: "url(" + img + ")" }}></div>
				<p
					className="pitch-section__content__right"
					style={isMedium ? { marginLeft: "2rem" } : {}}
				>
					{text}
				</p>
			</div>
		</div>
	);
};

PitchSection.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default PitchSection;

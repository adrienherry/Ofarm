import React from "react";

import "./Paragraph.scss";
import photoFrameImg from "/public/icons8-photo-frame-60.png";

const FirstParagraph = () => {
	return (
		<div className="paragraph">
			<div className="image-container" style={{backgroundImage:"url("+photoFrameImg+")"}}>
			</div>
			<p className="text-content">
				O’Farm est un projet initié en 2021 par une équipe de cinq
				étudiants-développeurs en reconversion de l’école de développement web{" "}
				<a href="https://oclock.io/">O’Clock</a>. Ensemble et en un mois
				seulement, ils ont conçu et développé l'intégralité du site O'Farm,
				ainsi que sa base d'informations maraichères.
			</p>
		</div>
	);
};

export default FirstParagraph;

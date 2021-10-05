import React from "react";
import "./about.scss";
import { Grid } from "@material-ui/core";
import AboutContent from "./AboutContent";

import FirstParagraph from "./AboutContent/Paragraph/FirstParagraph";
import SecondParagraph from "./AboutContent/Paragraph/SecondParagraph";
import ThirdParagraph from "./AboutContent/Paragraph/ThirdParagraph";
import FourthParagraph from "./AboutContent/Paragraph/FourthParagraph";

const About = () => (
	<div className="about">
		<Grid container direction="column" alignItems="center">
			<Grid item container direction="row" justifyContent="center">
				<Grid
					item
					container
					justifyContent="center"
					lg={10}
					md={10}
					sm={10}
					xs={10}
					className="about__titre-container"
					mb={8}
				>
					<div className="about__titre">A PROPOS</div>
				</Grid>
			</Grid>
			<Grid item container spacing={10} justifyContent="center">
				<Grid item lg={8} md={8} sm={10} xs={10}>
					<div className="about__content">
						<AboutContent
							titre="Il était une fois..."
							text={<FirstParagraph />}
							className="paragraph"
						/>
					</div>
				</Grid>
				<Grid item lg={8} md={8} sm={10} xs={10}>
					<div className="about__content">
						<AboutContent
							titre="On se retrousse les manches pour le climat !"
							text={<SecondParagraph />}
							className="paragraph"
						/>
					</div>
				</Grid>
				<Grid item lg={8} md={8} sm={10} xs={10}>
					<div className="about__content">
						<AboutContent
							titre="Sensibiliser à l'impact CO2 de notre alimentation"
							text={<ThirdParagraph />}
							className="paragraph"
						/>
					</div>
				</Grid>
				<Grid item lg={8} md={8} sm={10} xs={10}>
					<div className="about__content">
						<AboutContent
							titre="Vous aussi, vous pouvez contribuer"
							text={<FourthParagraph />}
							className="paragraph"
						/>
					</div>
				</Grid>
			</Grid>
		</Grid>
	</div>
);

export default About;

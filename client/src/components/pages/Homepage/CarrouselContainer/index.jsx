import { Grid } from "@material-ui/core";
import React from "react";
import Carrousel from "./Carrousel";
import { useTheme, useMediaQuery } from "@material-ui/core";

import carrouselPicture1 from "/carrousel_image_1.jpg";
import carrouselPicture2 from "/carrousel_image_2.jpg";
import carrouselPicture3 from "/carrousel_image_3.jpg";
import carrouselPicture4 from "/carrousel_image_4.jpg";
import carrouselPicture5 from "/carrousel_image_5.jpg";

import seedingImage from "/icons8-seeding-60.png";
import laptopImage from "/icons8-laptop-60.png";
import handsImage from "/icons8-hands-60.png";

import "./carrousel-container.scss";

const CarrouselContainer = () => {
	const pictures = [
		{
			picture: carrouselPicture1,
			id: 0,
		},
		{
			picture: carrouselPicture2,
			id: 1,
		},
		{
			picture: carrouselPicture3,
			id: 2,
		},
		{
			picture: carrouselPicture4,
			id: 3,
		},
		{
			picture: carrouselPicture5,
			id: 4,
		},
	];

	const theme = useTheme();
	const isMedium = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Grid
			item
			className="carrousel-container"
			style={
				isMedium
					? {
							// display: "flex",
							flexDirection: "column",
					  }
					: { flexDirection: "row" }
			}
		>
			<div
				style={
					isMedium
						? {
								width: "100%",
						  }
						: { width: "48%" }
				}
			>
				<Carrousel pictures={pictures} />
			</div>

			<div className="text-section-container">
				<div className="text-section">
					<div className="text-section__image-container green">
						<img src={seedingImage} />
					</div>
					<p>Trouvez toutes les ressources pour jardiner efficacement !</p>
				</div>

				<div className="text-section">
					<div className="text-section__image-container red">
						<img src={handsImage} />
					</div>
					<p>Echangez vos savoirs et vos astuces avec notre communauté !</p>
				</div>

				<div className="text-section">
					<div className="text-section__image-container blue">
						<img src={laptopImage} />
					</div>
					<p>Mesurez l'impact concret de vos actions !</p>
				</div>
			</div>
		</Grid>
	);
};

export default CarrouselContainer;

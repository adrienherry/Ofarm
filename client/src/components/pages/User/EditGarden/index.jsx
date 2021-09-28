import React from "react";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";

import "./edit-garden.scss";
import GardenMap from "./GardenMap";

const EditGarden = () => {
	return (
		<div className="edit-garden">
			<Grid container justifyContent="center">
				<Grid item>
					<h1>Mon jardin : nom de mon jardin</h1>
				</Grid>
			</Grid>

			<Grid container justifyContent="center">
				<Grid item height={"500px"} width={"100%"}>
					<GardenMap />
				</Grid>
			</Grid>
		</div>
	);
};

export default EditGarden;

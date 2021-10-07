import React from 'react';
import './not-found.scss';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import chou2 from '/public/chou-404.png';

const NotFound = () => (
	<div className="NotFound">
		<Grid container justifyContent="space-evenly" alignItems="center" gap="10%">
			<Grid item>
				<p className="NotFound__text">Chou blanc !</p>
				<div className="NotFound__image-container">
					<img
						className="NotFound__image-container__image"
						src={chou2}
						alt="chou blanc"
					/>
				</div>
			</Grid>
      <Grid item>
        <h1 className="NotFound__title">Erreur 404 : Page non-trouvée</h1>
        <p className="NotFound__text-content">Ce que vous cherchez se trouve sûrement quelque part mais pas ici...</p>
				<Link to="/">
					<div className="NotFound__redirect-btn">
						Retourner sur la page d'accueil
					</div>
				</Link>
			</Grid>
		</Grid>
	</div>
);

export default NotFound;

/* eslint-disable react/no-unknown-property */
import React from "react";
import { useTheme, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
import NavigationLink from "../Footer/NavigationLink";
import "./redesign-footer.scss";

const RedesignFooter = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const returnTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className="redesign-footer">
			{/* <div className="redesign-footer__separator" /> */}
			<div className="redesign-footer__container">
				<div
					className="redesign-footer__container--returnTop"
					onClick={returnTop}
					style={isMobile ? { fontSize: "0.8rem" } : {}}
				>
					<h3> Retour en haut </h3>
				</div>

				<div className="redesign-footer__container--navigation">
					<div className="redesign-footer__container--navigation-link1">
						<NavigationLink path="/species" name="Espèces" />
						<NavigationLink path="/login" name="Se connecter" />
						<NavigationLink path="/register" name="S'inscrire" />
					</div>

					<div className="redesign-footer__container--navigation-link2">
						<NavigationLink path="/team" name="Équipe" />
						<NavigationLink path="/about" name="À propos" />
						<NavigationLink path="/terms" name="Mentions légales" />
					</div>
				</div>

				<Link to="/" exact>
					<div className="redesign-footer__container--logo">
						<h3
							className="redesign-footer__container--logo-title"
							// style={isMobile ? { fontSize: '1.5rem' } : {}}
						>
							<span className="redesign-footer__container--logo-title-letter">
								O'
							</span>
							Farm
						</h3>
					</div>
				</Link>

				<div className="copyright">
					<p>&copy; Copyright O'Farm 2021.</p>
					<p>
						Icons by <a href="https://icons8.com">Icons8</a> -{" "}
						<a
							target="_blank"
							href="https://icons8.com/icons/authors/ttX1M9NnKB7X/vitaly-gorbachev"
						>
							Vitaly Gorbachev
						</a>
						. Images by <a href="https://icons8.com">Unsplash</a> and{" "}
						<a target="_blank" href="https://pixabay.com/fr/">
							Pixabay
            </a>.
					</p>
				</div>

				{/* </Grid>
        </Grid> */}
			</div>
		</div>
	);
};

export default RedesignFooter;

import { useMediaQuery } from "@material-ui/core";
import React from "react";
import "./harvest-card.scss";

import { convertModalDate } from "../../../../../utils/convertDate";

const HarvestCard = ({ date, quantity, comment, species, title }) => (
	<div className="harvest-card">
		<div className="harvest-card__date">
			{title && <span className="harvest-card__title">Date de récolte</span>}
			{!title && (
				<>
					<span className="harvest-card__span">{convertModalDate(date)}</span>
				</>
			)}
		</div>
		<div className="harvest-card__name">
			{title && <span className="harvest-card__title">Espèce</span>}
			{!title && (
				<>
					<span className="harvest-card__span"> {species.name}</span>
				</>
			)}
		</div>
		<div className="harvest-card__quantity">
			{title && <span className="harvest-card__title">Quantité</span>}
			{!title && (
				<>
					<span className="harvest-card__span">{quantity} kg</span>
				</>
			)}
		</div>
		<div className="harvest-card__co2">
			{title && <span className="harvest-card__title">Economie de CO2</span>}
			{!title && (
				<>
					<span className="harvest-card__span">
            {species.co2Data && (species.co2Data.co2_total * quantity).toFixed(2) + " kg"}
            {!species.co2Data && "-"}
					</span>
				</>
			)}
		</div>
		<div className="harvest-card__comment">
			{title && (
				<span className="harvest-card__span-comment harvest-card__title">
					Commentaires
				</span>
			)}
			{!title && (
				<>
					<span className="harvest-card__span harvest-card__span-comment">
						{comment || "pas de commentaire"}
					</span>
				</>
			)}
		</div>
	</div>
);

export default HarvestCard;

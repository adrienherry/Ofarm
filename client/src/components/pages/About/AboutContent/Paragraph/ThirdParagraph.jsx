import React from "react";

import "./Paragraph.scss";
import pieChartImg from "/public/icons8-pie-chart-60.png";

const ThirdParagraph = () => {
	return (
		<div className="paragraph">
			<div
				className="image-container"
				style={{ backgroundImage: "url(" + pieChartImg + ")" }}
			></div>
			<p className="text-content">
				<div>
					En saisissant vos récoltes sur O'Farm, vous pouvez estimer les
					émissions de CO2 évitées grâce à votre passe-temps favori, ajouter
					votre contribution à celle de notre communauté, et sensibiliser vos
					proches sur le contenu carbone de leur alimentation. Nos estimations
					se basent sur les données du{" "}
					<a href="https://agribalyse.ademe.fr/">
						programme AGRIBALYSE de l'ADEME
					</a>{" "}
					et ne constituent pas une donnée exacte mais bien une moyenne pour le
					produit considéré.
				</div>
			</p>
		</div>
	);
};

export default ThirdParagraph;

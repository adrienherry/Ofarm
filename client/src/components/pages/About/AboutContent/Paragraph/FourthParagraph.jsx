import React from "react";

import "./Paragraph.scss";
import emailImg from "/public/icons8-email-60.png";

const FourthParagraph = () => {
	return (
		<div className="paragraph">
			<div
				className="image-container"
				style={{ backgroundImage: "url(" + emailImg + ")" }}
			></div>
			<p className="text-content">

				<div>
					L'API maraichère que nous développons fait l'objet de mises à jour fréquentes visant à en faire un outil fiable et utile pour tous les jardiniers et agriculteurs. Si vous souhaitez vous aussi
					contribuer à ce projet, vous pouvez nous contacter via notre page
					d'équipe !
				</div>
			</p>
		</div>
	);
};

export default FourthParagraph;
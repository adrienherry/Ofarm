import React from "react";

import "./Paragraph.scss";
import sustainableImg from "/public/icons8-sustainable-60.png";

const SecondParagraph = () => {
	return (
		<div className="paragraph">
			<div
				className="image-container"
				style={{ backgroundImage: "url(" + sustainableImg + ")" }}
			></div>
			<p className="text-content">
				<div>
					Chez O’Farm, nous rêvons d’une société reconnectée à la nature, où
					chacun fait lui-même pousser une partie de ce qu’il mange, composte
					ses déchets, et transmet ces habitudes de vie à ses enfants.
				</div>
				<div>
					Nous avons développé ce site et ses fonctionnalités dans l'espoir que
					ces derniers viennent en aide aux jardiniers professionnels ou
					amateurs, et contribue à sensibiliser enfants comme adultes sur
					l'empreinte carbone de leur alimentation, ainsi qu'à transmettre des
					pratiques agricoles respectueuses de l'environnement et de la vie du
					sol.
				</div>

				<div>
					C’est bon pour vous, c’est bon pour la planète, alors on se retrousse
					les manches et on y va !
				</div>
			</p>
		</div>
	);
};

export default SecondParagraph;

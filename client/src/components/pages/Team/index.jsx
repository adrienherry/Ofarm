import React from "react";
import "./team.scss";
import TeamInfos from "./TeamInfos";
import PictureFlorian from "/florian.jpg";
import PictureNicolas from "/nicolas.jpg";
import PictureAdrien from "/adrien.jpg";
// import Pic4 from '/pic4.jpg';
import PictureLaurence from "/laurence.jpg";
import PictureMickael from "/mickael.png";

const Team = () => (
	<div className="team">
		<div className="team__title">La fine équipe !</div>

		<div className="team__content">
			<div className="team__content__back">
				<h2 className="team__content__back__title">Backend</h2>

				<div className="team__content__back__members">
					<div>
						<TeamInfos
							name="Florian NGUYEN"
							role="Product Owner"
							linkGit="https://github.com/florian-nguyen"
							linkLinkedin="https://www.linkedin.com/in/florian-nguyen-b515a3ab/"
							pic={PictureFlorian}
						/>
					</div>

					<div>
						<TeamInfos
							name="Nicolas LEONARDON"
							role="Git Master"
							linkGit="https://github.com/NicoLeo1030"
							linkLinkedin="https://www.linkedin.com/in/nicolas-leonardon-27ba10220/"
							pic={PictureNicolas}
						/>
					</div>
				</div>
			</div>

			<div className="team__content__front">
				<h2 className="team__content__front__title">Frontend</h2>

				<div className="team__content__front__members">
					<div>
						<TeamInfos
							name="Adrien HERRY"
							role="Référent technique"
							linkGit="https://github.com/adrienherry"
							linkLinkedin="https://www.linkedin.com/in/adrien-herry-9431bb19b/"
							pic={PictureAdrien}
						/>
					</div>

					<div>
						<TeamInfos
							name="Laurence OCCHIPINTI"
							role="Lead Dev Front"
							linkGit="https://github.com"
							linkLinkedin="https://www.linkedin.com/in/laurence-occhipinti/"
							pic={PictureLaurence}
						/>
					</div>

					<div>
						<TeamInfos
							name="Mickaël BELJIO"
							role="Scrum Master"
							linkGit="https://github.com/Droomwolk"
							linkLinkedin="https://linkedin.com/in/mickaël-beljio"
							pic={PictureMickael}
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Team;

// const Team = () => (

//     <div className="team">

//       <div className="team__titre">La fine équipe !</div>

//       <div className="team__content">

//         <div>
//           <p>Florian NGUYEN</p>
//           <p>Product Owner</p>
//           <TeamInfos linkGit="https://github.com" linkLinkedin="https://linkedin.com" pic={Pic1} />
//         </div>

//         <div>
//           <p>Nicolas LEONARDON</p>
//           <p>Git Master</p>
//           <TeamInfos linkGit="https://github.com" linkLinkedin="https://linkedin.com" pic={Pic2} />
//         </div>

//         <div>
//           <p>Adrien HERRY</p>
//           <p>Référent technique</p>
//           <TeamInfos linkGit="https://github.com" linkLinkedin="https://linkedin.com" pic={Pic3} />
//         </div>

//         <div>
//           <p>Laurence OCCHIPINTI</p>
//           <p>Lead Dev Front</p>
//           <TeamInfos linkGit="https://github.com" linkLinkedin="https://linkedin.com" pic={Pic6} />
//         </div>

//         <div>
//           <p>Mickaël BELJIO</p>
//           <p>Scrum Master</p>
//           <TeamInfos linkGit="https://github.com" linkLinkedin="https://linkedin.com" pic={Pic5} />
//         </div>

//       </div>

//     </div>

//   );

//   export default Team;

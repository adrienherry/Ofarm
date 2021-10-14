import React from "react";
import "./team-infos.scss";

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const TeamInfos = ({ name, role, linkGit, linkLinkedin, pic }) => (
	<div className="infos">
		<div className="infos__headline">
			<p className="infos__name">{name}</p>

			<div className="infos__content">
				<p className="infos__content__role">{role}</p>

				<div className="infos__content__links">
					<a className="infos__link" target="_blank" href={linkLinkedin}>
						<IoLogoLinkedin size={"1.5rem"} />
						{/* <span></span> */}
					</a>
					<a className="infos__link" target="_blank" href={linkGit}>
						<IoLogoGithub size={"1.5rem"} />
						{/* <span></span> */}
					</a>
				</div>
			</div>
		</div>

		<div
			className="infos__picture"
			style={{ backgroundImage: "url(" + pic + ")" }}
		></div>
	</div>
);

export default TeamInfos;

// import React from 'react';
// import './team-infos.scss';

// const TeamInfos = ({ linkGit, linkLinkedin, pic }) => (

//   <div className="infos">

//     <img className="infos__picture" src={pic} alt="photo equipe 1" />
//     <a className="infos__a" href={linkLinkedin}>Visitez son Linkedin</a>
//     <br />
//     <a className="infos__a" href={linkGit}>Visitez son Github</a>

//   </div>

// );

// export default TeamInfos;

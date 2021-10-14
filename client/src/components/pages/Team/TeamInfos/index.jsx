import React from "react";
import "./team-infos.scss";

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const TeamInfos = ({ name, role, linkGit, linkLinkedin, pic }) => (
	<div className="infos">
		<div className="infos__headline">
			<p className="infos__name">{name}</p>
			<p className="infos__role">{role}</p>
		</div>
		<div
			className="infos__picture"
			style={{ backgroundImage: "url(" + pic + ")" }}
		></div>
		<div className="infos__links">
			<a className="infos__link" href={linkLinkedin}>
				<IoLogoLinkedin size={"1.2rem"} />
				<span>Profil Linkedin</span>
			</a>
			<a className="infos__link" href={linkGit}>
				<IoLogoGithub size={"1.2rem"} />
				<span>Page Github</span>
			</a>
		</div>
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

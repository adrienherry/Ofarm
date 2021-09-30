import React from 'react';
import './team-infos.scss';

const TeamInfos = ({
  name, role, linkGit, linkLinkedin, pic,
}) => (

  <div className="infos">

    <p className="infos__name">{name}</p>
    <p className="infos__role">{role}</p>
    <img className="infos__picture" src={pic} alt="photo equipe 1" />
    <a className="infos__a" href={linkLinkedin}>Visitez son Linkedin</a>
    <br />
    <a className="infos__a" href={linkGit}>Visitez son Github</a>

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

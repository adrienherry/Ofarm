import React from 'react';
import './team.scss';
import TeamInfos from './TeamInfos';
import Pic1 from '/pic1.jpg';
import Pic2 from '/pic2.jpg';
import Pic3 from '/pic3.jpg';
// import Pic4 from '/pic4.jpg';
import Pic5 from '/pic5.jpg';
import Pic6 from '/pic6.jpg';

const Team = () => (

  <div className="team">

    <div className="team__titre">La fine équipe !</div>

    <div className="team__content">

      <div>
        <TeamInfos name="Florian NGUYEN" role="Product Owner" linkGit="https://github.com" linkLinkedin="https://linkedin.com" pic={Pic1} />
      </div>

      <div>
        <TeamInfos name="Nicolas LEONARDON" role="Git Master" linkGit="https://github.com" linkLinkedin="https://linkedin.com" pic={Pic2} />
      </div>

      <div>
        <TeamInfos name="Adrien HERRY" role="Référent technique" linkGit="https://github.com" linkLinkedin="https://linkedin.com" pic={Pic3} />
      </div>

      <div>
        <TeamInfos name="Laurence OCCHIPINTI" role="Lead Dev Front" linkGit="https://github.com" linkLinkedin="https://linkedin.com" pic={Pic6} />
      </div>

      <div>
        <TeamInfos name="Mickaël BELJIO" role="Scrum Master" linkGit="https://github.com" linkLinkedin="https://linkedin.com" pic={Pic5} />
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

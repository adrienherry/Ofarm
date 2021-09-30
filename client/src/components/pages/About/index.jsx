import React from 'react';
import './about.scss';
import AboutContent from './AboutContent';

const About = () => (

  <div className="about">

    <div className="about__titre">A propos</div>

    <div className="about__content">

      <div className="about__content_nous">
        <AboutContent titre="Qui sommes nous ?" text="O’Farm est un projet initié en 2021 par une équipe de cinq étudiants-développeurs en reconversion de l’école O’Clock. Il est constitué d’une application communautaire d’aide au jardinage et d’une base de données open-source d’espèces et de variétés maraichères." />
      </div>

      <div className="about__content_vision">
        <AboutContent titre="Notre vision" text="Chez O’Farm, nous rêvons d’une société reconnectée à la nature, où chacun fait lui-même pousser une partie de ce qu’il mange, composte ses déchets, et transmet ces habitudes de vie à ses enfants.  C’est bon pour vous, c’est bon pour la planète, alors on se retrousse les manches et on y va !" />
      </div>

      <div className="about__content_contribuer">
        <AboutContent titre="Vous aussi, vous pouvez contribuer" text="Saisissez vos récoltes, estimez les émissions de CO2 évitées grâce à votre nouveau mode de vie, et ajoutez votre contribution à celle de notre communauté de jardiniers passionnés ! " />
        <br />
      </div>

    </div>

  </div>

);

export default About;

// import React from 'react';
// import './apropos.scss';
// import AproposContent from './AproposContent';

// const Apropos = () => (

//   <div className="apropos">

//     <div className="apropos__titre">A propos</div>

//     <div className="apropos__content">

//       <div>
//         <AproposContent titre="Qui sommes nous ?" text="O’Farm est un projet initié en 2021 par une équipe de cinq étudiants-développeurs en reconversion de l’école O’Clock. Il est constitué d’une application communautaire d’aide au jardinage et d’une base de données open-source d’espèces et de variétés maraichères." />
//       </div>

//       <div>
//         <AproposContent titre="Notre vision" text="Chez O’Farm, nous rêvons d’une société reconnectée à la nature, où chacun fait lui-même pousser une partie de ce qu’il mange, composte ses déchets, et transmet ces habitudes de vie à ses enfants.  C’est bon pour vous, c’est bon pour la planète, alors on se retrousse les manches et on y va !" />
//       </div>

//       <div>
//         <AproposContent titre="Vous aussi, vous pouvez contribuer" text="Saisissez vos récoltes, estimez les émissions de CO2 évitées grâce à votre nouveau mode de vie, et ajoutez votre contribution à celle de notre communauté de jardiniers passionnés ! " />
//       </div>

//     </div>

//   </div>

// );

// export default Apropos;

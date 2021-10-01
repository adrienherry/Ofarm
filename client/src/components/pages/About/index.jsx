import React from 'react';
import './about.scss';
import { Grid } from '@material-ui/core';
import AboutContent from './AboutContent';

const About = () => (
  <div className="about">
    <Grid container direction="column" alignItems="center">
      <Grid item container direction="row" justifyContent="center">
        <Grid item container justifyContent="center" lg={10} md={10} sm={10} xs={10} className="about__titre-container" mb={8}>
          <div className="about__titre">A PROPOS</div>
        </Grid>
      </Grid>
      <Grid item container spacing={10} justifyContent="center">
        <Grid item lg={8} md={8} sm={10} xs={10}>
          <div className="about__content">
            <AboutContent titre="Qui sommes nous ?" text="O’Farm est un projet initié en 2021 par une équipe de cinq étudiants-développeurs en reconversion de l’école O’Clock. Il est constitué d’une application communautaire d’aide au jardinage et d’une base de données open-source d’espèces et de variétés maraichères." />
          </div>
        </Grid>
        <Grid item lg={8} md={8} sm={10} xs={10}>
          <div className="about__content">
            <AboutContent titre="Notre vision" text="Chez O’Farm, nous rêvons d’une société reconnectée à la nature, où chacun fait lui-même pousser une partie de ce qu’il mange, composte ses déchets, et transmet ces habitudes de vie à ses enfants.  C’est bon pour vous, c’est bon pour la planète, alors on se retrousse les manches et on y va !" />
          </div>
        </Grid>
        <Grid item lg={8} md={8} sm={10} xs={10}>
          <div className="about__content">
            <AboutContent titre="Vous aussi, vous pouvez contribuer" text="Saisissez vos récoltes, estimez les émissions de CO2 évitées grâce à votre nouveau mode de vie, et ajoutez votre contribution à celle de notre communauté de jardiniers passionnés ! " />
          </div>
        </Grid>
      </Grid>
    </Grid>

  </div>

);

export default About;

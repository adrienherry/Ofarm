import React, { useEffect } from 'react';
import './pitch-container.scss';
import { Grid } from '@material-ui/core';
import aos from 'aos';
import 'aos/dist/aos.css';
import PitchSection from './PitchSection';

const PitchContainer = () => {
  useEffect(() => {
    aos.init({
      easing: 'ease',
      duration: '3000',
    });
  });
  return (
    <div className="pitch-container">
      <Grid container>
        <Grid item container lg={12} mb={5} justifyContent="center" data-aos="fade-up">
          <h2 className="pitch-container__title">
            En ville comme à la campagne, O’Farm vous guide vers un mode de vie plus respectueux !
          </h2>
        </Grid>
        <Grid item container justifyContent="flex-end" lg={12} data-aos="slide-left" data-aos-delay="100">
          <Grid item lg={9} md={9} mb={5}>
            <PitchSection title="Quoi de plus local que de le faire soi-même !" text="Chez O’Farm, nous rêvons d’une société reconnectée à la nature, où chacun fait lui-même pousser une partie de ce qu’il mange, composte ses déchets, et transmet ces habitudes de vie à ses enfants.  C’est bon pour vous, c’est bon pour la planète, alors on se retrousse les manches et on y va !" />
          </Grid>
        </Grid>
        <Grid item container justifyContent="flex-start" lg={12} mb={5} data-aos="slide-right" data-aos-delay="500">
          <Grid item lg={9} md={9}>
            <PitchSection title="Choisissez vos variétés, planifiez, et apprenez de vos erreurs !" text="Nous mettons à votre disposition une bibliothèque de variétés variétés maraîchères et nous vous aidons à choisir les plus adaptées à votre jardin. Avec O’Farm, vous pouvez aussi consulter votre calendrier de tâches à réaliser, et garder une trace de vos précédentes saisons." />
          </Grid>
        </Grid>
        <Grid item container justifyContent="flex-end" lg={12} mb={3} data-aos="slide-left" data-aos-delay="1000">
          <Grid item lg={9} md={9}>
            <PitchSection title="Mesurons ensemble notre impact" text="Saisissez vos récoltes, estimez les émissions de CO2 évitées grâce à votre nouveau mode de vie, et ajoutez votre contribution à celle de notre communauté de jardiniers passionnés ! " />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default PitchContainer;

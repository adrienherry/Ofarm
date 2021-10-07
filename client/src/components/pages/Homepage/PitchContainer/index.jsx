import React, { useEffect } from 'react';
import './pitch-container.scss';
import { Grid } from '@material-ui/core';
import aos from 'aos';
import 'aos/dist/aos.css';
import PitchSection from './PitchSection';

import co2Icon from '/icons8-co2-60.png';

import sproutImage from '/icons8-sprout-60.png';
import booksImage from '/icons8-books-60.png';
// import handsImage from "/icons8-hands-60.png";
//
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
        <Grid item container justifyContent="flex-end" lg={12} data-aos="fade-left" data-aos-delay="100">
          <Grid item lg={9} md={9} mb={5}>
            <PitchSection
              title="Quoi de plus local que de le faire soi-même !"
              img={sproutImage}
              text="Chez O’Farm, nous rêvons d’une société reconnectée à la nature, où chacun fait lui-même pousser une partie de ce qu’il mange, composte ses déchets, et transmet ces habitudes de vie à ses enfants.  C’est bon pour vous et votre famille, c’est bon pour la planète, alors on se retrousse les manches et on y va !"
            />
          </Grid>
        </Grid>
        <Grid item container justifyContent="flex-start" lg={12} mb={5} data-aos="fade-right" data-aos-delay="200">
          <Grid item lg={9} md={9}>
            <PitchSection
              title="Découvrez, apprenez, planifiez, partagez !"
              img={booksImage}
              text="Nous mettons à votre disposition une bibliothèque de variétés maraîchères et vous permettons de choisir les plus adaptées à votre jardin en vous appuyant sur les conseils de notre communauté. Avec O'Farm, planifiez également vos semis, repiquages et récoltes grâce à notre calendrier et à notre outil de visualisation de votre jardin !"
            />
          </Grid>
        </Grid>
        <Grid item container justifyContent="flex-end" lg={12} mb={3} data-aos="fade-left" data-aos-delay="300">
          <Grid item lg={9} md={9}>
            <PitchSection
              title="Mesurons ensemble l'impact de notre action !"
              img={co2Icon}
              text="Lorsque vous saisissez les quantités que vous avez récoltées dans votre jardin, nous estimons les émissions de CO2 évitées grâce à votre action et ajoutons votre contribution à celle de tous nos membres ! Rejoignez-nous !"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default PitchContainer;

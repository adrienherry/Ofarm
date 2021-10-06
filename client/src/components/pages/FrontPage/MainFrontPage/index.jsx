import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { AiFillPlayCircle } from 'react-icons/ai';
import './mainFrontPage.scss';
import flower from '../img/pexels.png';
import Item from '../item';
import vegetables from '../img/vegetables1.png';
import gustavo from '../img/gustavo.png';

const MainFrontPage = () => (
  <div>
    <div className="mainFrontPage">
      <div className="mainFrontPage__container1">
        <h1 className="mainFrontPage__container1-title"> L’appli qui t’aide à faire pousser
          tes légumes <br /> à domicile !
        </h1>
        <p className="mainFrontPage__container1-main"> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Blanditiis eius, qui nam ratione ipsa mollitia quia tenetur
          cupiditate porro magni !
        </p>
        <div className="mainFrontPage__container1-bottom">
          <Button variant="contained" className="button"> Discover </Button>
          <AiFillPlayCircle className="play" />
          <p> watch your video </p>
        </div>
      </div>
      <div className="mainFrontPage__container2">
        <img src={flower} alt="plante" height="800rem" />
      </div>
    </div>
    <div className="mainFrontPage__footer">
      <div className="mainFrontPage__footer--item1">
        <Item
          name="Create Garden"
          legende="Créer votre jardin"
          picture={gustavo}
          style={{ height: '20rem', bottom: '2rem', left: '-9.6rem' }}
          background={{ backgroundColor: '#C6F7FB', opacity: '0.33' }}
          triangle={{ borderBottom: '4rem solid #C6F7FB' }}
        />
      </div>
      <div className="mainFrontPage__footer--item2">
        <Item
          name="Mes jardins"
          legende="Visualiser vos jardins"
          picture={gustavo}
          style={{ height: '20rem', bottom: '2rem', left: '-10rem' }}
          background={{ backgroundColor: '#D5E0E3', opacity: '0.33' }}
          triangle={{ borderBottom: '4rem solid #D5E0E3' }}
        />
      </div>
      <div className="mainFrontPage__footer--item3">
        <Item
          name="Espèces"
          legende="Les différentes espèces"
          picture={vegetables}
          style={{ height: '14rem', bottom: '4.68rem', left: '-2.5rem' }}
          background={{ backgroundColor: '#FFF0E1', opacity: '0.33' }}
          triangle={{ borderBottom: '4rem solid #FFF0E1' }}
        />
      </div>
    </div>
  </div>
);

MainFrontPage.propTypes = {

};

export default MainFrontPage;

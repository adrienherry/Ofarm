import React from 'react';
import PropTypes from 'prop-types';
import MyGardenHeader from './MyGardenHeader';
import MyGardenCard from './MyGardenCard';

const MyGarden = () => (
  <div>
    <MyGardenHeader
      garden="Créer un nouveau jardin"
      button1="Mes jardin"
      button2="Information personnelles"
    />
    <MyGardenCard />
  </div>
);

MyGarden.propTypes = {

};

export default MyGarden;

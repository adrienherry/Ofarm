import React from 'react';
import './species-informations.scss';
import PropTypes from 'prop-types';

const SpeciesInformations = ({
  nom, semis, récolte, description, images,
}) => (
  <div className="speciesInformations">

    <div className="speciesInformations__specificites">
      <img className="speciesInformations__specificites-img" src={images} alt="tomates" />
      <div className="speciesInformations__specificites-nom">

        <h2 className="speciesInformations__specificites-titre">{nom}</h2>
        <h2>{semis}</h2>
        <h2>{récolte}</h2>

      </div>
    </div>

    <div className="speciesInformations__description">
      <h2 className="speciesInformations__description-titre">{description}</h2>
      <p>Lorem fblabfjhbjhdbvhjebvjhebvjhervb "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"</p>
    </div>
  </div>

);

// A checker si propTypes "date" pour la récolte ou semis

SpeciesInformations.propTypes = {
  nom: PropTypes.string.isRequired,
  semis: PropTypes.string.isRequired,
  récolte: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // image: PropTypes.shape.isRequired,  ou element?

};

export default SpeciesInformations;

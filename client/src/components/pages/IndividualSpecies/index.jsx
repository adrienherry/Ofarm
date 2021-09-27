import React from 'react';
import './individual-species.scss';
import SpeciesInformations from './SpeciesInformations';
import SpeciesPicture from './SpeciesPicture';
import tomatesImages1 from '../../../../public/tomates.jpg';
// '/tomates.jpg';

const IndividualSpecies = () => (

  <div className="individual-species">

    <SpeciesInformations
      nom="tomates"
      semis="Date de semis: Fin mai"
      récolte="Date de récolte: Fin juillet"
      description="Les tomates et leurs bienfaits"
      images={tomatesImages1}
    />
    <SpeciesPicture />
  </div>
);

export default IndividualSpecies;

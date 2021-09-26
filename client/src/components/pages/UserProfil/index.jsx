import React from 'react';
import UserInformation from './UserInformation';
import Buttons from './Buttons';
import UserProfilForm from './UserProfilForm';
import cow from '../../../../public/cow.jpg';
import './userProfil.scss';

const User = () => (
  <div className="userProfil">
    <UserInformation img={cow} />
    <div className="userProfil__form">
      <Buttons button1="Mes jardins" button2="Mes information" />
      <UserProfilForm button="Enregistrer les informations" />
    </div>
  </div>
);

export default User;

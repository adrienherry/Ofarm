import React from 'react';
import UserInformation from './UserInformation';
import Buttons from './Buttons';
import UserProfilForm from './UserProfilForm';
import cow from '../../../../public/cow.jpg';
import UserList from './UserList';
import './userProfil.scss';

const User = () => (
  <div className="userProfil">
    <div className="userProfil__information">
      <UserInformation img={cow} />
      <UserList />
    </div>
    <div className="userProfil__form">
      <Buttons button1="Mes jardins" button2="Mes informations" />
      <UserProfilForm button="Enregistrer les informations" />
    </div>
  </div>
);

export default User;

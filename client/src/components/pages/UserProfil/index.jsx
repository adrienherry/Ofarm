import React from 'react';
import UserInformation from './UserInformation';
import Buttons from './Buttons';
import cow from '../../../../public/cow.jpg';
import './userProfil.scss';

const User = () => (
  <div className="userProfil">
    <UserInformation img={cow} />
    <div>
      <Buttons button1="Mes jardins" button2="Mes information" />
    </div>

  </div>
);

export default User;
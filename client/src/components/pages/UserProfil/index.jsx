import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons';
import UserInformation from './UserInformation';
import cow from '../../../../public/cow.jpg';
import './user.scss';

const UserProfil = () => (
  <div className="UserProfil">
    <UserInformation img={cow} />
    <Buttons />
  </div>
);

UserProfil.propTypes = {

};

export default UserProfil;

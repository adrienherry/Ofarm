import React from 'react';
import PropTypes from 'prop-types';

import UserInformation from './UserInformation';
import cow from '../../../../public/cow.jpg';

const User = () => (
  <div>
    <UserInformation img={cow} />
  </div>
);

User.propTypes = {

};

export default User;

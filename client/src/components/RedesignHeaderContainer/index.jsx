import { useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import UserMenu from '../HeaderContainer/UserMenu';
import RedesignHeader from './RedesignHeader';
import RedesignHeaderMobil from './RedesignHeaderMobil';
import './redesign-header-container.scss';

const RedesignHeaderContainer = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div className="redesign-header-container">
      {!isMedium && (<RedesignHeader />)}
      {isMedium && (<RedesignHeaderMobil />)}
    </div>
  );
};

export default RedesignHeaderContainer;

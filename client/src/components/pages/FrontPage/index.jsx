import React from 'react';
import PropTypes from 'prop-types';
import HeaderFrontPage from './HeaderFrontPage';
import MainFrontPage from './MainFrontPage';
// import FooterFrontPage from './FooterFrontPage';
import './frontPage.scss';

const FrontPage = () => (
  <div className="frontPage">
    <HeaderFrontPage />
    <MainFrontPage />
    {/* <FooterFrontPage /> */}
  </div>
);

FrontPage.propTypes = {

};

export default FrontPage;

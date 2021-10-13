import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.scss';

const Navigation = ({ gardenName }) => (
  <div className="garden-navigation">
    <NavLink
      className="garden-navigation__link"
      to={`/gardens/${gardenName}`}
      activeClassName="garden-navigation__link-active"
      exact
    >
      Calendrier
    </NavLink>
    <NavLink
      className="garden-navigation__link"
      to={`/gardens/${gardenName}/harvest`}
      activeClassName="garden-navigation__link-active"
      exact
    >
      Récoltes
    </NavLink>
  </div>
);

export default Navigation;

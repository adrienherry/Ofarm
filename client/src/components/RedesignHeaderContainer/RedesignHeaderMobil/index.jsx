import React from 'react';
import './redesign-header-mobil.scss';
import { Link } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { openUserMenu } from '../../../store/actions/user';

const RedesignHeaderMobil = () => {
  const dispatch = useDispatch();
  const handleUserMenuClick = () => {
    dispatch(openUserMenu());
  };
  return (
    <div className="redesign-header-mobil">
      <Link
        to="/"
      >
        <div className="redesign-header__title">
          <span className="redesign-header__title-span">O'</span>Farm
        </div>
      </Link>
      <div className="redesign-header-mobil__menu-icon" onClick={handleUserMenuClick}>
        <IoIosMenu size={48} color="#244435" />
      </div>
    </div>
  );
};

export default RedesignHeaderMobil;

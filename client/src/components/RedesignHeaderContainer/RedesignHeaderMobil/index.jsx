import React from 'react';
import './redesign-header-mobil.scss';
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
      <div className="redesign-header__title">
        <span className="redesign-header__title-span">O'</span>Farm
      </div>
      <div className="redesign-header-mobil__menu-icon" onClick={handleUserMenuClick}>
        <IoIosMenu size={48} color="#244435" />
      </div>
    </div>
  );
};

export default RedesignHeaderMobil;

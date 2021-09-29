import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import fr from 'dayjs/locale/fr';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import UserInformation from './UserInformation';
import Buttons from './Buttons';
import UserProfilForm from './UserProfilForm';
import cow from '../../../../public/cow.jpg';
import UserList from './UserList';
import './userProfil.scss';
import { fetchUserInfo } from '../../../store/actions/profil';

const User = () => {
  dayjs.locale(fr);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const usernameProfil = useSelector((state) => state.profil.usernameProfil);
  const emailProfil = useSelector((state) => state.profil.emailProfil);
  const createdDate = useSelector((state) => state.profil.createdDate);
  const updatedDate = useSelector((state) => state.profil.updatedDate);
  const createdAt = dayjs(createdDate).format('DD-MMMM-YYYY');
  const updatedAt = dayjs(updatedDate).format('DD-MMMM-YYYY');

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);

  return (
    <div className="userProfil">
      <Grid container justifyContent="center" spacing={isMedium ? 6 : 15}>
        <Grid item>
          <UserInformation
            img={cow}
            username={usernameProfil}
            email={emailProfil}
            createdAt={createdAt}
            updatedAt={updatedAt}
          />
        </Grid>
        <Grid item lg={5} md={6} sm={10} xs={10}>
          <UserProfilForm
            button="Enregistrer les informations"
            usernameProfil={usernameProfil}
            emailProfil={emailProfil}
          />
        </Grid>
      </Grid>
      {/* <div className="userProfil__information"> */}
      {/* <UserList /> */}
      {/* </div>
    <div className="userProfil__form"> */}
      {/* <Buttons button1="Mes jardins" button2="Mes informations" /> */}
      {/* </div> */}
    </div>
  );
};

export default User;

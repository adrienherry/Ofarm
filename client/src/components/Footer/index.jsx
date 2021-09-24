import { Grid, useTheme, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
import NavigationLink from './NavigationLink';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="footer">
      <div className="footer__separator" />
      <div className="footer__container">
        <Grid container direction="row" alignItems="center" justifyContent="space-around">
          <Grid
            item
            lg={2}
            md={2}
            sm={2}
            xs={2}
          >
            <Link
              to="/"
              exact
            >
              <h3
                className="footer__title"
                style={isMobile ? { fontSize: '1.5rem' } : {}}
              >
                O'Farm
              </h3>
            </Link>
          </Grid>
          <Grid
            container
            item
            direction="column"
            justifyContent="center"
            alignItems="center"
            lg={2}
            md={2}
            sm={2}
            xs={3}
          >
            <NavigationLink path="/species" name="Espèces" />
            <NavigationLink path="/login" name="Se connecter" />
            <NavigationLink path="/register" name="S'inscrire" />

          </Grid>
          <Grid
            container
            item
            direction="column"
            justifyContent="center"
            alignItems="center"
            lg={2}
            md={2}
            sm={2}
            xs={3}
          >
            <NavigationLink path="/team" name="Équipe" />
            <NavigationLink path="/about" name="À propos" />
            <NavigationLink path="/terms" name="Mention légales" />

          </Grid>
          <Grid
            container
            item
            direction="column"
            justifyContent="center"
            alignItems="center"
            lg={2}
            md={2}
            sm={2}
            xs={3}
          >
            <div
              className="footer__return-top"
              onClick={returnTop}
              style={isMobile ? { fontSize: '0.8rem' } : {}}
            >
              Retournez en haut de la page
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;

// import React from 'react';
// import {
//   FaGithub, FaTwitter, FaFacebook, FaPhoneAlt,
// } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// import logo from '../../../public/logo_ofarm.png';
// import './footer.scss';

// const Footer = () => (
//   <div className="footer">
//     <div className="footer__container">
//       <div className="footer__container--logo">
//         <Link to="/">
//           <img src={logo} alt="logo" className="footer__container--logo-img" />
//         </Link>
//         <div className="footer__container--logo-social">
//           <a href="https://github.com/O-clock-Uther/projet-04-ofarm-together">
//             <FaGithub className="footer__container--logo-social-github" size={30} />
//           </a>
//           <FaTwitter className="footer__container--logo-social-twitter" size={30} />
//           <FaFacebook className="footer__container--logo-social-facebook" size={30} />
//           <FaPhoneAlt className="footer__container--logo-social-phone" size={30} />
//         </div>
//       </div>
//       <div className="footer__container--section">
//         <h3 className="footer__container--section-title"> Utilisateurs </h3>
//         <ul className="footer__container--section-list">
//           <Link to="/register">
//             <li className="footer__container--section-list-item"> Inscription </li>
//           </Link>
//           <Link to="/profil">
//             <li className="footer__container--section-list-item"> Profil </li>
//           </Link>
//           <Link to="/blog">
//             <li className="footer__container--section-list-item"> Blog </li>
//           </Link>
//         </ul>
//       </div>
//       <div className="footer__container--section">
//         <h3 className="footer__container--section-title"> Gardens </h3>
//         <ul className="footer__container--section-list">
//           <Link to="/species">
//             <li className="footer__container--section-list-item"> Espèces </li>
//           </Link>
//           <Link to="/variety">
//             <li className="footer__container--section-list-item"> Variétés </li>
//           </Link>
//           <Link to="/garden">
//             <li className="footer__container--section-list-item"> Garden </li>
//           </Link>
//         </ul>
//       </div>
//       <div className="footer__container--section">
//         <h3 className="footer__container--section-title"> About </h3>
//         <ul className="footer__container--section-list">
//           <Link to="/relevance">
//             <li className="footer__container--section-list-item"> À propos </li>
//           </Link>
//           <Link to="/mention">
//             <li className="footer__container--section-list-item"> Mention légales </li>
//           </Link>
//           <Link to="/contact">
//             <li className="footer__container--section-list-item"> Contact </li>
//           </Link>
//         </ul>
//       </div>
//       <div className="footer__container--copyright">
//         <p className="footer__container--copyright-text"> Copyright </p>
//         <p className="footer__container--copyright-text1"> Retournez en haut de la page </p>
//         {/* <FaArrowCircleUp className="footer__container--copyright" size={40} /> */}
//       </div>
//     </div>
//   </div>
// );

// Footer.propTypes = {

// };

// export default Footer;

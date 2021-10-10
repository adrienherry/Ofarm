import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, useTheme, useMediaQuery } from '@material-ui/core';
import './individual-species.scss';
import { useParams } from 'react-router-dom';
import aos from 'aos';
import convertEventDate from '../../../utils/convertDate';
import { fetchOneSpecies, fetchSpeciesList } from '../../../store/actions/species';
import { findSpecies } from '../../../selectors/species';
import waterImg from '/icons8-water-40.png';

import 'aos/dist/aos.css';
import Co2InfoItem from './Co2InfoIntem';
import Rating from './Rating';

const IndividualSpecies = () => {
  const dispatch = useDispatch();
  const speciesList = useSelector((state) => state.species.speciesList);
  const { slug } = useParams();
  const speciesToFetch = findSpecies(speciesList, slug);
  const species = useSelector((state) => state.species.species);

  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));

  useEffect(() => {
    if (!speciesList[0]) {
      dispatch(fetchSpeciesList());
    }
    if (speciesToFetch && !species) {
      dispatch(fetchOneSpecies(speciesToFetch.id));
    }
  });

  useEffect(() => {
    aos.init({
      duration: 1000,
    });
  }, []);

  let style;
  if (isMobile) {
    style = { paddin: '0.5rem', margin: '0 1rem', marginTop: '3rem' };
  }
  else if (isXl) {
    style = { margin: '0 10rem', padding: '4rem', marginTop: '3rem' };
  }
  else {
    style = {};
  }

  let styleImage;
  if (isMedium) {
    styleImage = { height: '80%', width: '80%' };
  }
  else if (isLarge) {
    styleImage = { height: '100%', width: '100%' };
  }
  else {
    styleImage = {};
  }

  return (
    <>
      {species && (
      <div className="individual-species" style={style}>
        <>
          <Grid container direction="row" justifyContent={isMedium ? 'center' : 'space-between'}>
            <Grid item lg={4} md={4} sm={9} xs={12} container justifyContent="center" data-aos="fade-right" data-aos-delay={isMedium ? '100' : '1700'}>
              <div
                className="individual-species__image-container"
                style={isMedium ? { marginBottom: '1rem' } : {}}
              >
                <img
                  src={species.imageUrl}
                  alt={species.name}
                  className="individual-species__image"
                  style={styleImage}
                />
              </div>
            </Grid>
            <Grid item container className="individual-species__description-container" lg={7} md={7} sm={12} xs={12}>
              <Grid item>
                <div className="individual-species__name">
                  {species.name}
                </div>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12} data-aos="fade-left" data-aos-delay="100">
                <p className="individual-species__description">
                  <span className="individual-species__span">Description : </span>
                  <br />
                  {species.description}
                </p>
              </Grid>

            </Grid>
            <Grid container item lg={12} md={12} sm={12} xs={12} className="individual-species__info-co2-container" mt={2} justifyContent={isMedium ? 'center' : 'space-between'} direction={isMedium ? 'column-reverse' : 'row'}>
              <Grid
                item
                container
                direction="column"
                mt={isMedium ? 3 : 3}
                lg={4}
                md={5}
                sm={11}
                xs={10}
                justifyContent="center"
                className="individual-species__info-co2"
                data-aos="fade-right"
                data-aos-delay={isMedium ? '100' : '700'}
              >
                {species.co2Data && (
                <>
                  <Grid item>
                    <div className="individual-species__co2">
                      <span className="individual-species__span">Informations CO2 </span>
                    </div>
                  </Grid>
                  <Grid item mb={2}>
                    <div className="individual-species__co2-total">
                      <span className="individual-species__span ok">Emission CO2 : </span> {Math.round(species.co2Data.co2_total * 100) / 100} {species.co2Data.co2_units}
                    </div>
                  </Grid>
                  <Co2InfoItem co2Percent={species.co2Data.co2_share.agriculture} name="Agriculture" totalCO2={Math.round(species.co2Data.co2_total * 100) / 100} />
                  <Co2InfoItem co2Percent={species.co2Data.co2_share.consumption} name="Consommation" totalCO2={Math.round(species.co2Data.co2_total * 100) / 100} />
                  <Co2InfoItem co2Percent={species.co2Data.co2_share.distribution} name="Distribution" totalCO2={Math.round(species.co2Data.co2_total * 100) / 100} />
                  <Co2InfoItem co2Percent={species.co2Data.co2_share.packaging} name="Emballage" totalCO2={Math.round(species.co2Data.co2_total * 100) / 100} />
                  <Co2InfoItem co2Percent={species.co2Data.co2_share.transform} name="Transformation" totalCO2={Math.round(species.co2Data.co2_total * 100) / 100} />
                  <Co2InfoItem co2Percent={species.co2Data.co2_share.transport} name="Transport" totalCO2={Math.round(species.co2Data.co2_total * 100) / 100} />
                </>
                )}
                {!species.co2Data && (
                <div className="individual-species__no-co2">
                  <span className="individual-species__span">Info CO2 :  </span> N/C
                </div>
                )}
              </Grid>
              <Grid
                item
                container
                data-aos="fade-left"
                data-aos-delay={isMedium ? '100' : '1200'}
                direction="row"
                lg={7}
                md={6}
                sm={12}
                xs={12}
                justifyContent="center"
                className="individual-species__info"
              >
                {species.events.map((event) => (
                  <Grid item key={event.id} lg={12} md={12} sm={12} xs={12}>
                    <div className="individual-species__event">
                      <span className="individual-species__span">{event.eventType.name} : </span>
                      du {convertEventDate(event.fromDate)} au {convertEventDate(event.untilDate)}
                    </div>
                  </Grid>
                ))}
                <Grid item mt={3} lg={12} md={12} sm={12} xs={12}>
                  <div className="individual-species__culture-type">
                    <div className="individual-species__culture-type__span">Mode de culture: </div>{species.culture.map((culture) => (
                      <div className="individual-species__culture-type__item" key={culture.id}>{culture.name}</div>
                    ))}
                  </div>
                </Grid>
                <Grid item mt={2} lg={12} md={12} sm={12} xs={12}>
                  <div className="individual-species__culture-type">
                    <div className="individual-species__culture-type__span">Types de sols recommandés: </div>{species.soil.map((soil) => (
                      <span className="individual-species__culture-type__item" key={soil.id}>{soil.name}</span>
                    ))}
                  </div>
                </Grid>
                <Grid item container mt={2} lg={12} md={12} sm={12} xs={12} alignItems="center">
                  <div className="individual-species__info-sun">Exposition au soleil:</div>
                  {species.exposition.map((exposition) => (
                    <div className="individual-species__culture-type__item" key={exposition.id}>{exposition.name}</div>
                  ))}
                </Grid>
                <Grid item container mt={2} lg={12} md={12} sm={12} xs={12} alignItems="center">
                  <div className="individual-species__info-water">Quantité d'eau demandé:</div>
                  <Rating rating={species.water_need[0].value} numberOfItem={3} alt="water" image={waterImg} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      </div>
      )}
    </>
  );
};

export default IndividualSpecies;

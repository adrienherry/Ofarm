import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, useTheme, useMediaQuery } from '@material-ui/core';
import './individual-species.scss';
import { useParams } from 'react-router-dom';
import convertEventDate from '../../../utils/convertDate';
import { fetchOneSpecies, fetchSpeciesList } from '../../../store/actions/species';
import { findSpecies } from '../../../selectors/species';
import Co2InfoItem from './Co2InfoIntem';

const IndividualSpecies = () => {
  const dispatch = useDispatch();
  const speciesList = useSelector((state) => state.species.speciesList);
  const { slug } = useParams();
  const speciesToFetch = findSpecies(speciesList, slug);
  const species = useSelector((state) => state.species.species);
  console.log(species);

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
    styleImage = { height: '15rem', width: '15rem' };
  }
  else if (isLarge) {
    styleImage = { height: '17rem', width: '17rem' };
  }
  else {
    styleImage = {};
  }

  return (
    <div className="individual-species" style={style}>
      {species && (
        <>
          <Grid container direction="row" justifyContent={isMedium ? 'center' : 'space-between'}>
            <Grid item lg={4} md={4} sm={7} xs={12} container justifyContent="center">
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
            <Grid item container className="individual-species__description-container" lg={7} md={7} sm={11} xs={11}>
              <Grid item>
                <div className="individual-species__name">
                  {species.name}
                </div>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <p className="individual-species__description">
                  <span className="individual-species__span">Description : </span>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores vero
                  quidem repellat distinctio ipsam fugiat dignissimos aperiam,
                  voluptatibus ullam cumque adipisci quos, veniam saepe totam natus
                  accusantium commodi nobis ratione!
                </p>
              </Grid>
              <Grid
                item
                container
                direction="column"
                lg={9}
                md={9}
                sm={12}
                xs={12}
                justifyContent="center"
                className="individual-species__info"
              >
                {species.events.map((event) => (
                  <Grid item key={event.id}>
                    <div className="individual-species__event">
                      <span className="individual-species__span">{event.eventType.name} : </span>
                      du {convertEventDate(event.fromDate)} au {convertEventDate(event.untilDate)}
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              lg={5}
              md={5}
              sm={12}
              xs={12}
              justifyContent="center"
              className="individual-species__info-co2"
            >
              {species.co2Data && (
                <>
                  <Grid item>
                    <div className="individual-species__co2">
                      <span className="individual-species__span">Info CO2 </span>
                    </div>
                  </Grid>
                  <Grid item>
                    <div className="individual-species__co2-total">
                      <span className="individual-species__span">co2 total dégagé : </span> {Math.round(species.co2Data.co2_total * 100) / 100} {species.co2Data.co2_units}
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
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default IndividualSpecies;

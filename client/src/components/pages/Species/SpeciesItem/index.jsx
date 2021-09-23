import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import './species-item.scss';
import { Grid } from '@material-ui/core';
import testImg from '/carrousel_image_1.jpg';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const SpeciesItem = ({ name, slug }) => {
  const useStyles = makeStyles(() => ({
    root: {
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      textAlign: 'center',
    },
  }));

  const classes = useStyles();
  return (
    <Grid item xl={3} lg={4} md={4} sm={5} xs={8}>
      <Link
        to={`/species/${slug}`}
        exact="true"
      >
        <div className="species-item">
          <Card sx={{ maxWidth: 280 }} className={classes.root}>
            <CardMedia
              component="img"
              height="140"
              image={testImg}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Link>
    </Grid>
  );
};

SpeciesItem.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default SpeciesItem;

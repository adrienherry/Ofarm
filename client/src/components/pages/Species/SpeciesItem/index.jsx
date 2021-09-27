import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import './species-item.scss';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const SpeciesItem = ({ name, nameSlug, imageUrl }) => {
  const useStyles = makeStyles(() => ({
    root: {
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      textAlign: 'center',
      fontFamily: '"Dosis", sans-serif',
      '&:hover': {
        boxShadow: '0px 9px 23px 1px rgba(61,59,44,0.84)',
      },
    },
  }));

  const classes = useStyles();
  return (
    <Grid item xl={3} lg={4} md={4} sm={5} xs={8}>
      <Link
        to={`/species/${nameSlug}`}
        exact="true"
      >
        <div className="species-item">
          <Card sx={{ maxWidth: 280 }} className={classes.root}>
            <CardMedia
              component="img"
              height="140"
              image={imageUrl}
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
  nameSlug: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default SpeciesItem;

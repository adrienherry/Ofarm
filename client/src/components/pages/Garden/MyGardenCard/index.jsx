import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MyGardenButton from '../MyGardenButton';
import cow from '../../../../../public/cow.jpg';

const MyGardenCard = ({ title, description }) => (
  <div>
    <Card sx={{
      maxWidth: 345,
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      marginTop: 10,
    }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={cow}
          alt="user"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/">
          <MyGardenButton name="Voir le jardin" />
        </Link>
      </CardActions>
    </Card>
  </div>
);

MyGardenCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MyGardenCard;

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ButtonUserSection from '../../ButtonUserSection';
import randomImage from '../../../../../utils/randomImage';

const GardensCard = ({ title, description, titleSlug }) => {
  const usernameSlug = useSelector((state) => state.user.usernameSlug);
  return (
    <div>
      <Card sx={{
        maxWidth: 345,
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
        marginBottom: '3rem',
        borderRadius: '0rem',
      }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={randomImage()}
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
          <Link to={`/${usernameSlug}/gardens/${titleSlug}`}>
            <ButtonUserSection name="Voir le jardin" />
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

GardensCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  titleSlug: PropTypes.string.isRequired,
};

export default GardensCard;

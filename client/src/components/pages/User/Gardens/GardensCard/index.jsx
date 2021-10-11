import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import deleteIcon from '/icons8-recycle-49.png';
import ButtonUserSection from '../../ButtonUserSection';
import randomImage from '../../../../../utils/randomImage';
import './myGardenCard.scss';
import { deleteGarden } from '../../../../../store/actions/gardens';

const GardensCard = ({
  title, description, titleSlug, id,
}) => {
  const dispatch = useDispatch();
  const usernameSlug = useSelector((state) => state.user.usernameSlug);
  const handleDeleteGarden = () => {
    dispatch(deleteGarden(id));
  };
  return (
    <div className="myGardensCard">
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
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Link to={`/${usernameSlug}/gardens/${titleSlug}`}>
            <ButtonUserSection name="Voir le jardin" />
          </Link>
          <img src={deleteIcon} alt="trash bin" className="delete-icon" onClick={handleDeleteGarden} />
        </CardActions>
      </Card>
    </div>
  );
};

GardensCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  titleSlug: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default GardensCard;

/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { typography } from '@material-ui/system';
import './user-information.scss';

const UserInformation = ({
  img, createdAt, updatedAt, username, email,
}) => {
  const [expanded, setExpanded] = useState(false);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="user-information">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image={img}
          alt="Image de profil"
        />
        <CardActions disableSpacing>
          <Typography variant="body2" color="text.secondary">
            Plus d'informations
          </Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Création du compte: {createdAt}
            </Typography>
            <Typography paragraph>
              Dernière modification: {updatedAt}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

UserInformation.propTypes = {
  img: PropTypes.string.isRequired,
};

export default UserInformation;

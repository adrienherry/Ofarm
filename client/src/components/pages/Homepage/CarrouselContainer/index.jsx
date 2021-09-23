import { Grid } from '@material-ui/core';
import React from 'react';
import Carrousel from './Carrousel';

import carrouselPicture1 from '/carrousel_image_1.jpg';
import carrouselPicture2 from '/carrousel_image_2.jpg';
import carrouselPicture3 from '/carrousel_image_3.jpg';
import carrouselPicture4 from '/carrousel_image_4.jpg';
import carrouselPicture5 from '/carrousel_image_5.jpg';

const CarrouselContainer = () => {
  const pictures = [
    {
      picture: carrouselPicture1,
      id: 0,
    },
    {
      picture: carrouselPicture2,
      id: 1,
    },
    {
      picture: carrouselPicture3,
      id: 2,
    },
    {
      picture: carrouselPicture4,
      id: 3,
    },
    {
      picture: carrouselPicture5,
      id: 4,
    },
  ];
  return (
    <Grid item>
      <Carrousel pictures={pictures} />
    </Grid>

  );
};

export default CarrouselContainer;

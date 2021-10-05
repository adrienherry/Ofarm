import React from 'react';
import './rating.scss';

const Rating = ({
  rating, numberOfItem, image, alt,
}) => {
  const item = [];
  for (let i = 1; i <= numberOfItem; i++) {
    if (i <= rating) {
      item.push(<img src={image} key={i} alt={alt} className="image__clear" />);
    }
    else {
      item.push(<img src={image} key={i} alt={alt} className="image__dark" />);
    }
  }
  return (
    <div className="rating">
      {item}
    </div>
  );
};

export default Rating;

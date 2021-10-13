import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { findGarden } from '../../../../selectors/garden';
import { fetchGardens, setUserGarden } from '../../../../store/actions/gardens';
import { fetchHarvest } from '../../../../store/actions/harvest';
import Navigation from '../IndividualGarden/Navigation';
import UserHeader from '../UserHeader';
import './garden-harvest.scss';
import HarvestCard from './HarvestCard';

const GardenHarvest = () => {
  const dispatch = useDispatch();
  const gardens = useSelector((state) => state.user.gardens);
  const { slug } = useParams();
  const userGarden = useSelector((state) => state.garden.garden);
  const harvest = useSelector((state) => state.harvest.harvest);
  console.log(harvest);

  if (gardens[0]) {
    const garden = findGarden(gardens, slug);
    dispatch(setUserGarden(garden));
  }

  useEffect(() => {
    if (!gardens[0]) {
      dispatch(fetchGardens());
    }
  }, []);

  useEffect(() => {
    if (userGarden) {
      dispatch(fetchHarvest());
    }
  }, [userGarden]);
  return (
    <div className="garden-harvest">
      <UserHeader />
      {userGarden && (
        <>
          <div className="individual-garden__name">{userGarden.name}</div>
          <Navigation gardenName={userGarden.name} />
          <div className="garden-harvest__title">
            Mes Récoltes
          </div>
          <div className="garden-harvest__content">
            {harvest && harvest.map((harvest) => (
              <HarvestCard key={harvest.id} {...harvest} />
            ))}

          </div>
        </>
      )}
    </div>
  );
};

export default GardenHarvest;

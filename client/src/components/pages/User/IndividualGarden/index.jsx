import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { findGarden } from '../../../../selectors/garden';
import { fetchGardens, setUserGarden } from '../../../../store/actions/gardens';
import GardenCalendar from './GardenCalendar';
import './individual-garden.scss';

const IndividualGarden = () => {
  const dispatch = useDispatch();
  const gardens = useSelector((state) => state.user.gardens);
  const { slug } = useParams();
  const userGarden = useSelector((state) => state.garden.garden);
  if (gardens[0]) {
    const garden = findGarden(gardens, slug);
    dispatch(setUserGarden(garden));
  }

  useEffect(() => {
    if (!gardens[0]) {
      dispatch(fetchGardens());
    }
  }, []);
  return (
    <>
      {userGarden && (
        <div className="individual-garden">
          <GardenCalendar />
        </div>
      )}
    </>
  );
};

export default IndividualGarden;

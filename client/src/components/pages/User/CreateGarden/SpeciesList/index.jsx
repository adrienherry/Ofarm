import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@mui/material/List';
import { MoonLoader } from 'react-spinners';
import { fetchSpeciesList } from '../../../../../store/actions/species';
import './species-list.scss';
import Item from './Item';

const SpeciesList = () => {
  const dispatch = useDispatch();
  const speciesList = useSelector((state) => state.createGarden.speciesList);
  const loading = useSelector((state) => state.createGarden.loading);

  useEffect(() => {
    dispatch(fetchSpeciesList());
  }, []);

  return (
    <div className="species-list">
      <List sx={{ overflowY: 'auto', height: 200 }}>
        {speciesList && speciesList.map((species) => (
          <Item name={species.name} key={species.id} />
        ))}
        <div className="species-list__loader">
          {loading && (
          <MoonLoader />
          )}
        </div>
      </List>
    </div>

  );
};

export default SpeciesList;

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch, useSelector } from 'react-redux';
import { setSpeciesChoosenList } from '../../../../../../store/actions/createGarden';
// import { generateId } from '../../../../../../utils/generateId';
import { checkSpeciesExist } from '../../../../../../utils/checkSpeciesExist';

const Item = ({ name, id }) => {
  const dispatch = useDispatch();
  const speciesChoosenList = useSelector((state) => state.createGarden.speciesChoosenList);
  const isExist = checkSpeciesExist(speciesChoosenList, name);

  const handleClickItem = () => {
    if (isExist) return;
    dispatch(setSpeciesChoosenList(name, id));
  };

  return (
    <ListItem component="div" disablePadding sx={isExist ? { backgroundColor: '#244435', color: '#FDF1E5' } : {}}>
      <ListItemButton>
        <ListItemText primary={name} onClick={handleClickItem} />
      </ListItemButton>
    </ListItem>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Item;

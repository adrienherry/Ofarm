import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import FolderIcon from '@mui/icons-material/Folder';
// import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';

const UserList = () => {
  // const [dense, setDense] = React.useState(false);
  // const [secondary, setSecondary] = React.useState(false);

  function generate(element) {
    return [0].map((value) => React.cloneElement(element, {
      key: value,
    }));
  }

  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 952 }}>
      {/* <FormGroup row>
        <FormControlLabel
          control={(
            <Checkbox
              checked={dense}
              onChange={(event) => setDense(event.target.checked)}
            />
          )}
          label="Enable dense"
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={secondary}
              onChange={(event) => setSecondary(event.target.checked)}
            />
          )}
          label="Enable secondary text"
        />
      </FormGroup> */}
      <Grid container spacing={2}>
        <Grid item xs={2} md={12}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Garden information
          </Typography>
          <Demo>
            <List>
              {/* dense={dense} */}
              {generate(
                <ListItem>
                  <ListItemText
                    primary="Jardins: Nom du jardin"
                    secondary="Kilo récolté: 300kg"
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                  {/* <ListItemText
                    primary="Variété: Pomme Golden"
                    // secondary="Kilo récolté: 300kg"
                    // secondary={secondary ? 'Secondary text' : null}
                  /> */}
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
};

UserList.propTypes = {

};

export default UserList;

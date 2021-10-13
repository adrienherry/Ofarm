import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import carotte from '../../../public/icons8-carotte-100.png';
import courgette from '../../../public/icons8-zucchini-48.png';
import pois from '../../../public/icons8-pois-400.png';
import laitue from '../../../public/icons8-salade-40.png';
import radis from '../../../public/icons8-radis-40.png';
import concombre from '../../../public/icons8-concombre-80.png';
import fraise from '../../../public/icons8-fraise-400.png';
import spinach from '../../../public/icons8-spinach-100.png';
import poivron from '../../../public/icons8-paprika-100.png';
import tomate from '../../../public/icons8-tomate-100.png';
import aubergine from '../../../public/icons8-aubergine-100.png';
import chou from '../../../public/icons8-chou-100.png';
import melon from '../../../public/icons8-melon-80.png';
import artichaut from '../../../public/icons8-artichaut-96.png';
import celeri from '../../../public/icons8-celeri-80.png';
import './table.scss';

function createData(img, name, icon, nom, picture, noun) {
  return {
    img, name, icon, nom, picture, noun,
  };
}

const rows = [
  createData(carotte, 'Carotte', concombre, 'Concombre', aubergine, 'Aubergine'),
  createData(courgette, 'Courgette', fraise, 'Fraise', chou, 'Choux'),
  createData(pois, 'Haricot', spinach, 'Epinard', melon, 'Melon'),
  createData(laitue, 'Laitue', poivron, 'Poivron', artichaut, 'Artichaux'),
  createData(radis, 'Radis', tomate, 'Tomate', celeri, 'Chou'),
];

const BasicTable = () => (
  <TableContainer component={Paper} sx={{ maxWidth: 1200 }}>
    <Table sx={{ minWidth: 450, maxWidth: 1200 }} aria-label="simple table">
      <TableHead sx={{ backgroundColor: '#244436', width: '100vw' }}>
        <TableRow>
          {/* <TableCell>Dessert (100g serving)</TableCell> */}
          <TableCell align="left" sx={{ color: 'white', textAlign: 'center' }}>Débutant</TableCell>
          <TableCell align="center" sx={{ color: 'white', textAlign: 'center' }}>Intermédiaire</TableCell>
          <TableCell align="right" sx={{ color: 'white', textAlign: 'center' }}>Avancé</TableCell>
          {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            {/* <TableCell component="th" scope="row">
              {row.name}
            </TableCell> */}
            <TableCell align="center" sx={{ alignItems: 'center', justifyContent: 'center' }}> <img src={row.img} alt="légume" className="legume" /> {row.name}</TableCell>
            <TableCell align="center" sx={{ alignItems: 'center', justifyContent: 'center' }}> <img src={row.icon} alt="légume" className="legume" /> {row.nom} </TableCell>
            <TableCell align="center" sx={{ alignItems: 'center', justifyContent: 'center' }}> <img src={row.picture} alt="légume" className="legume" /> {row.noun}</TableCell>
            {/* <TableCell align="right">{row.protein}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default BasicTable;

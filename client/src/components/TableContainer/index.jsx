import React from 'react';
import Table from './Table';
import Accordion from './Accordion';
import './tableContainer.scss';

const TableContainer = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div className="tableContainer">
      <h1 className="tableContainer__title"> Quels légumes choisir pour le potager ? </h1>
      <Table />
      <h2 className="tableContainer__subtitle"> 6 conseils pour pour créer son potager </h2>
      <Accordion />
    </div>
  </div>
);

export default TableContainer;

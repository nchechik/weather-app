import React from 'react';
import Grid from '../../components/Grid/Grid';
import { DataFilters } from '../../components/DataFilters/DataFilters';

const GridPage = () => {
  return (
    <div>
      <DataFilters></DataFilters>
      <Grid />
    </div>
  );
};
export default GridPage;

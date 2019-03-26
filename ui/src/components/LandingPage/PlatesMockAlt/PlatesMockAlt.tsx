import * as React from 'react';
import { Paper } from '../../Paper/Paper';
import * as style from './style.scss';

const NUMBER_OF_PLATES = 5;

export const PlatesMockAlt = ({ isScrolled }) => {
  const renderMock = () => <Paper className={style.plate} round={0} depth={5} children={null} />;

  return (
    <div className={`${style.platesMock} ${isScrolled ? style.onScroll : ''}`}>
      {Array(NUMBER_OF_PLATES).fill(renderMock())}
    </div>
  );
};

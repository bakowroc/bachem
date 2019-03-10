import * as React from 'react';
import * as style from './style.scss';
import {Paper} from "../../Paper/Paper";

const NUMBER_OF_PLATES = 5;

export const PlatesMockAlt = ({isScrolled}) => {
  const renderMock = () => <Paper className={style.plate} round={0} depth={5} children={null} />;

  return (
    <div className={`${style.platesMock} ${isScrolled ? style.onScroll : ''}`}>
      {Array(NUMBER_OF_PLATES).fill(renderMock())}
    </div>
  );
};

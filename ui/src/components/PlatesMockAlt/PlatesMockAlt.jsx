import {h} from 'preact';
import * as style from './style.scss';
import {Paper} from "../Paper/Paper";

const NUMBER_OF_PLATES = 5;

export const PlatesMockAlt = ({isScrolled}) => {
  const renderMock = () => <Paper className={style.plate} depth={5} />;

  return (
    <div className={`${style.platesMock} ${isScrolled ? style.onScroll : ''}`}>
      {Array(NUMBER_OF_PLATES).fill(renderMock())}
    </div>
  );
};

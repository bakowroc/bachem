import {h} from 'preact';
import * as style from './style.scss';
import {Paper} from "../../Paper/Paper";

const NUMBER_OF_PLATES = 3;

export const PlatesMock = () => {
  const renderMock = () => <Paper className={style.plate} depth={5} children={renderMockContent()}/>;
  const renderMockContent = () => (
    <div>
      <div className={style.plateMock} />
      <div className={style.plateMock} />
      <div className={style.plateMock} />
    </div>
  );

  return (
    <div className={style.platesMock}>
      {Array(NUMBER_OF_PLATES).fill(renderMock())}
    </div>
  );
};

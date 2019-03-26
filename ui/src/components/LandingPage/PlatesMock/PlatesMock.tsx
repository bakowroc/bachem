import * as React from 'react';
import { Paper } from '../../Paper/Paper';
import * as style from './style.scss';

const PlatesMock = () => {
  const renderMockContent = () => (
    <div>
      <div className={style.plateMock} />
      <div className={style.plateMock} />
      <div className={style.plateMock} />
    </div>
  );

  return (
    <div className={style.platesMock}>
      <Paper className={style.plate} depth={5} round={4} children={renderMockContent()} />
      <Paper className={style.plate} depth={5} round={4} children={renderMockContent()} />
      <Paper className={style.plate} depth={5} round={4} children={renderMockContent()} />
    </div>
  );
};

export { PlatesMock };

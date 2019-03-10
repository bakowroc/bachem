import * as React from 'react';
import * as style from './style.scss';
import {Paper} from "../../Paper/Paper";

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
      <Paper className={style.plate} depth={5} children={renderMockContent()} />;
      <Paper className={style.plate} depth={5} children={renderMockContent()} />;
      <Paper className={style.plate} depth={5} children={renderMockContent()} />;
    </div>
  );
};

export {PlatesMock}
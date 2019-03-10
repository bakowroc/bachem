import * as React from 'react';

import {Button} from "../Button/Button";

import * as style from './style.scss';
import {Paper} from "../Paper/Paper";
import {tabsContext} from "../../context/TabsProvider";

const Tabs = () => {
  const tabs = React.useContext(tabsContext);

  const handleTabSwitch = (active) => tabs.setValue({active});
  const renderSwitch = (key) => (
    <Button
      key={key}
      outline={false}
      onClick={() => handleTabSwitch(key)}
      text={key.replace('-', ' ')}
      className={`${style.tab} ${tabs.active === key ? style.active : ''}`}
    />
  );

  const keys = Object.keys(tabs.body);

  return (
    <div className={style.tabs}>
      <Paper depth={1} round={4} className={style.headerWrapper}>
        <header className={style.header}>
          {keys.map(key => renderSwitch(key))}
        </header>
      </Paper>
      {tabs.active !== undefined ? tabs.body[tabs.active] : tabs.body[keys[0]]}
    </div>
  )
};

export {Tabs};

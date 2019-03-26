import * as React from 'react';

import { Button } from '../Button/Button';

import { Paper } from '../Paper/Paper';
import * as style from './style.scss';

export interface TabsProps {
  active: string;
  body: any;
}

const Tabs = (tabs: TabsProps) => {
  const [active, setActive] = React.useState<string>('');
  const keys = Object.keys(tabs.body);

  React.useEffect(() => {
    if (tabs.active !== undefined) {
      setActive(tabs.active);
    } else {
      setActive(keys[0]);
    }
  }, []);

  const handleTabSwitch = tab => setActive(tab);
  const renderSwitch = (tab, key) => (
    <Button
      key={key}
      outline={false}
      onClick={() => handleTabSwitch(key)}
      text={tab.heading}
      className={`${style.tab} ${active === key ? style.active : ''}`}
    />
  );

  return (
    <div className={style.tabs}>
      <Paper depth={1} round={4} className={style.headerWrapper}>
        <header className={style.header}>{keys.map(key => renderSwitch(tabs.body[key], key))}</header>
      </Paper>
      {tabs.body[active] !== undefined && tabs.body[active].content}
    </div>
  );
};

export { Tabs };

import * as React from 'react';

import { Paper } from '../Paper/Paper';
import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';

import { appContext } from '../../context/AppProvider';
import { Icon } from '../Icon/Icon';
import { ProductNavList } from './ProductNavList/ProductNavList';
import * as style from './style.scss';

const Header = () => {
  const app = React.useContext(appContext);

  return (
    <Paper depth={app.isScrolled ? 4 : 15} className={`${style.container} ${!app.isInRoot ? style.reverse : ''}`}>
      <Icon
        name='menu-outline'
        onClick={() => app.setValue({ isSidebarShown: true })}
        className={`${style.productNavIcon} ${style.open}`}
      />
      <header className={style.header}>
        <Logo />
        <Navigation />
        <ProductNavList />
      </header>
    </Paper>
  );
};

export { Header };

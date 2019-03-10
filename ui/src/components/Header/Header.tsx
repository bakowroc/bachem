import * as React from 'react';

import {Navigation} from "./Navigation/Navigation";
import {Logo} from "./Logo/Logo";
import {Paper} from "../Paper/Paper";

import * as style from './style.scss';
import {ProductNavList} from "./ProductNavList/ProductNavList";
import {Icon} from "../Icon/Icon";
import {appContext} from "../../context/AppProvider";

const Header = () => {
  const app = React.useContext(appContext);

  return (
    <Paper depth={app.isScrolled ? 4 : 15} className={`${style.container} ${!app.isInRoot ? style.reverse : ''}`}>
      <Icon
        name="menu-outline"
        onClick={() => app.setValue({isSidebarShown: true})}
        className={`${style.productNavIcon} ${style.open}`}
      />
      <header className={style.header}>
        <Logo />
        <Navigation />
        <ProductNavList />
      </header>
    </Paper>
  )
};

export {Header};

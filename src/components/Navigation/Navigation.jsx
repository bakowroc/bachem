import {h} from 'preact';
import * as style from './style.scss';

export const Navigation = () => {

  const renderMenu = () => (
    <ul className={style.mainMenu}>
      <li className={style.menuItem}><a href="/">Strona gówna</a></li>
      <li className={style.menuItem}><a href="/o-nas">O nas</a></li>
      <li className={style.menuItem}><a href="/kontakt">Kontakt</a></li>
    </ul>
  );

  return (
    <nav className={style.navigation}>
      {renderMenu()}
    </nav>
  );
};
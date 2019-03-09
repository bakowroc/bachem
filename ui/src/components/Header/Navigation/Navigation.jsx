import {h} from 'preact';
import * as style from './style.scss';

export const Navigation = ({isInRoot}) => {

  const renderMenu = () => (
    <ul className={`${style.mainMenu} ${!isInRoot ? style.reverse : ''}`}>
      <li className={style.menuItem}><a href="/">Strona glówna</a></li>
      <li className={style.menuItem}><a href="/o-nas">O nas</a></li>
      <li className={style.menuItem}><a href="#kontakt">Kontakt</a></li>
    </ul>
  );

  return (
    <nav className={style.navigation}>
      {renderMenu()}
    </nav>
  );
};
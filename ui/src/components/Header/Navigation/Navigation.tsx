import * as React from 'react';
import { Link } from 'react-router-dom';
import { appContext } from '../../../context/AppProvider';
import * as style from './style.scss';

const Navigation = () => {
  const app = React.useContext(appContext);

  return (
    <nav className={style.navigation}>
      <ul className={`${style.mainMenu} ${!app.isInRoot ? style.reverse : ''}`}>
        <li className={style.menuItem}>
          <Link to='/#home'>Strona glówna</Link>
        </li>
        <li className={style.menuItem}>
          <Link to='/#about'>O nas</Link>
        </li>
        <li className={style.menuItem}>
          <Link to='/#contact'>Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };

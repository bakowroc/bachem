import * as React from 'react';
import * as style from './style.scss';
import {appContext} from "../../../context/AppProvider";
import {Link} from "react-router-dom";

const Navigation = () => {
  const app = React.useContext(appContext);

  return (
    <nav className={style.navigation}>
      <ul className={`${style.mainMenu} ${!app.isInRoot ? style.reverse : ''}`}>
        <li className={style.menuItem}><Link to="/">Strona glówna</Link></li>
        <li className={style.menuItem}><Link to="/o-nas">O nas</Link></li>
        <li className={style.menuItem}><Link to="#kontakt">Kontakt</Link></li>
      </ul>
    </nav>
  );
};

export {Navigation};
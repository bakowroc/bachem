import * as React from 'react';
import { Link } from 'react-router-dom';
import { appContext } from '../../../context/AppProvider';
import * as style from './style.scss';

const Logo = ({ className = '' }) => {
  const app = React.useContext(appContext);

  return (
    <div className={`${style.logo} ${!app.isInRoot ? style.reverse : ''}`}>
      <div className={`${style.text} ${className}`}>
        <Link to='/'>bachem</Link>
      </div>
    </div>
  );
};

export { Logo };

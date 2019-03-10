import * as React from 'react';
import * as style from './style.scss';
import {appContext} from "../../../context/AppProvider";

const Logo = ({className = ''}) => {
  const app = React.useContext(appContext);

 return (
   <div className={`${style.logo} ${!app.isInRoot ? style.reverse : ''}`}>
     <div className={`${style.text} ${className}`}>bachem</div>
   </div>
 )
};

export {Logo};
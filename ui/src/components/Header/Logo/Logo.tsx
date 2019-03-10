import * as React from 'react';
import * as style from './style.scss';
import {appContext} from "../../../context/AppProvider";
import {Link} from "react-router-dom";

const Logo = ({className = ''}) => {
  const app = React.useContext(appContext);

 return (
   <div className={`${style.logo} ${!app.isInRoot ? style.reverse : ''}`}>
     <div className={`${style.text} ${className}`}>
       <Link to="/">bachem</Link>
     </div>
   </div>
 )
};

export {Logo};
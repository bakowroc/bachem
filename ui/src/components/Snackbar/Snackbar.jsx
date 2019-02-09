import {h} from 'preact';

import * as style from './style.scss';

export const Snackbar = ({className = '', isShown, message}) => (
   <div className={`${style.snackbar} ${isShown ? style.show : ''} ${className}`}>
     {message}
   </div>
);

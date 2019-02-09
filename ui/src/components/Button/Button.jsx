import {h} from 'preact';

import * as style from './style.scss';

export const Button = ({onClick, text, outline = false, className = ''}) => (
  <button onClick={onClick} className={`${style.button} ${className} ${outline ? style.outline: ''}`}>
    {text}
  </button>
);

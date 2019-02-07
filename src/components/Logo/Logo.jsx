import {h} from 'preact';
import * as style from './style.scss';

export const Logo = ({className = ''}) => (
  <div className={style.logo}>
    <div className={`${style.text} ${className}`}>bachem</div>
  </div>
);
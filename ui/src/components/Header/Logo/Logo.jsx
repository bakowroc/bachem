import {h} from 'preact';
import * as style from './style.scss';

export const Logo = ({className = '', isInRoot}) => (
  <div className={`${style.logo} ${!isInRoot ? style.reverse : ''}`}>
    <div className={`${style.text} ${className}`}>bachem</div>
  </div>
);
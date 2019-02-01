import {h} from 'preact';
import * as style from './style.scss';

export const Logo = () => (
  <div className={style.logo}>
    <div className={style.sign} />
    <div className={style.text}>bachem</div>
  </div>
);
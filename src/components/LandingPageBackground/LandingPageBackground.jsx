import {h} from 'preact';
import * as style from './style.scss';

export const LandingPageBackground = () => (
  <div className={style.landingPageBackground}>
    <div className={style.bubbleBackground}>
      <div className={style.bubble} />
      <div className={style.bubble} />
      <div className={style.bubble} />
      <div className={style.bubble} />
    </div>
  </div>
);

import {h} from 'preact';
import * as style from './style.scss';

export const LandingPageBackground = ({isScrolled}) => (
  <div className={`${style.landingPageBackground} ${isScrolled ? style.onScroll : ''}`}>
    <div className={style.bubbleBackground}>
      <div className={style.bubble} />
      <div className={style.bubble} />
      <div className={style.bubble} />
      <div className={style.bubble} />
    </div>
  </div>
);

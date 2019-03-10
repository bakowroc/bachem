import * as React from 'react';
import * as style from './style.scss';

const LandingPageBackground = () => (
  <div className={style.landingPageBackground}>
    <div className={style.bubbleBackground}>
      <div className={style.bubble} />
      <div className={style.bubble} />
      <div className={style.bubble} />
      <div className={style.bubble} />
    </div>
  </div>
);

export {LandingPageBackground};
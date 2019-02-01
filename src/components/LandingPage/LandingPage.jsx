import {h} from 'preact';

import * as style from './style.scss';
import {LandingPageBackground} from "../LandingPageBackground/LandingPageBackground";
import {Button} from "../Button/Button";
import {PlatesMock} from "../PlatesMock/PlatesMock";

export const LandingPage = () => (
  <div className={style.container}>
    <LandingPageBackground/>
    <main className={style.landingPage}>
      <div className={style.companyHeading}>
        <h1 className={style.companySlogan}>Tabliczki znamionowe i firmowe.</h1>
        <Button onClick={null} className={style.moreButton} text="Zobacz oferte" />
      </div>
     <PlatesMock/>
    </main>
  </div>
);
import * as React from 'react';

import {Gallery} from "../Gallery/Gallery";
import {Icon} from "../Icon/Icon";
import {Tabs} from "../Tabs/Tabs";
import {AnodizingData, DigestionData, EngravingData, LaserData, ScreenPrintingData} from "./MethodsContent";

import * as globalStyle from '../../styles/global.scss';
import * as style from './style.scss';
import {tabsContext} from "../../context/TabsProvider";
import {useEffect} from "react";

const Methods = ({match}) => {
  const tabs = React.useContext(tabsContext);

  useEffect(() => {
    tabs.setValue({
      active: match.params.method,
      body: {
      "anodowanie": renderSingleMethod(AnodizingData),
      "sitodruk": renderSingleMethod(ScreenPrintingData),
      "trawienie": renderSingleMethod(DigestionData),
      "grawerowanie": renderSingleMethod(EngravingData),
      "ciecie-laserem": renderSingleMethod(LaserData)
    }});
  }, []);

  const renderFeatures = (features) => (
    <div className={style.features}>
      <ul className={style.featuresList}>
        {features.pos.map((feature , key) =>
          <li className={style.feature} key={key}>
            <Icon className={style.featureIcon} name="checkmark-outline" />
            {feature}
          </li> )}
      </ul>
    </div>
  );

  const renderSingleMethod = (data) => (
    <div className={style.method}>
      <article className={style.methodInfo}>
        {data.description.map((paragraph, key)=> <p key={key}>{paragraph}</p>)}
        {renderFeatures(data.features)}
      </article>
      <Gallery className={style.gallery} photos={data.photos} />
    </div>
  );

  return (
    <div className={style.container}>
      <section className={style.methods}>
        <header className={style.header}>
          <h1 className={globalStyle.pageHeading}>Metody wykonania</h1>
        </header>
        <Tabs />
      </section>
    </div>
  );
};

export {Methods};
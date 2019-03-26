import * as React from 'react';

import { Gallery } from '../Gallery/Gallery';
import { Icon } from '../Icon/Icon';
import { Tabs } from '../Tabs/Tabs';
import { AnodizingData, DigestionData, EngravingData, LaserData, ScreenPrintingData } from './MethodsContent';

import * as globalStyle from '../../styles/global.scss';
import * as style from './style.scss';

const Methods = ({ match }) => {
  const renderFeatures = features => (
    <div className={style.features}>
      <ul className={style.featuresList}>
        {features.pos.map((feature, key) => (
          <li className={style.feature} key={key}>
            <Icon className={style.featureIcon} name='checkmark-outline' />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderSingleMethod = data => (
    <div className={style.method}>
      <article className={style.methodInfo}>
        {data.description.map((paragraph, key) => (
          <p key={key}>{paragraph}</p>
        ))}
        {renderFeatures(data.features)}
      </article>
      <Gallery className={style.gallery} photos={data.photos} />
    </div>
  );

  const tabs = {
    active: match.params.method,
    body: {
      anodowanie: { heading: 'Anodowanie', content: renderSingleMethod(AnodizingData) },
      'ciecie-laserem': { heading: 'Ciecie laserem', content: renderSingleMethod(LaserData) },
      grawerowanie: { heading: 'Grawerowanie', content: renderSingleMethod(EngravingData) },
      sitodruk: { heading: 'Sitodruk', content: renderSingleMethod(ScreenPrintingData) },
      trawienie: { heading: 'Trawienie', content: renderSingleMethod(DigestionData) }
    }
  };

  return (
    <div className={style.container}>
      <section className={style.methods}>
        <header className={style.header}>
          <h1 className={globalStyle.pageHeading}>Metody wykonania</h1>
        </header>
        <Tabs {...tabs} />
      </section>
    </div>
  );
};

export { Methods };

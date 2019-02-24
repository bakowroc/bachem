import {h} from 'preact';
import * as style from './methodStyle.scss';
import {Icon} from "../Icon/Icon";
import {Gallery} from "../Gallery/Gallery";

export const SingleMethod = ({data}) => {
  const renderFeatures = (features) => (
    <div className={style.features}>
      <ul className={style.featuresList}>
        {features.pos.map(feature =>
          <li className={style.feature}>
            <Icon className={style.featureIcon} name="checkmark-outline" />
            {feature}
          </li> )}
      </ul>
    </div>
  );

  return (
    <div className={style.method}>
      <article className={style.methodInfo}>
        {data.description.map(paragraph => <p>{paragraph}</p>)}
        {renderFeatures(data.features)}
      </article>
      <Gallery className={style.gallery} photos={data.photos}/>
    </div>
  )
};
import {h, Component} from 'preact';
import {route} from 'preact-router';

import * as style from './style.scss';

import {PRODUCTS_ITEMS} from "../ProductNavList/ProductNavList";
import {productContent} from "./ProductContent";
import {Paper} from "../Paper/Paper";
import {Icon} from "../Icon/Icon";
import {Gallery} from "../Gallery/Gallery";

const VALID_PRODUCTS = PRODUCTS_ITEMS.map(item => item.href);

export class Product extends Component {
  chooseContent = (product) => {
    if (VALID_PRODUCTS.includes(product)) {
     try {
       const content = productContent[product];
       return this.renderContent(content)
     } catch(err) {
        return null
     }
    } else {
      route('/', true);
      return null
    }
  };

  renderFeatures = (features) => (
    <div className={style.features}>
      <ul className={style.featuresList}>
        {features.adv.map(feature =>
          <li className={style.feature}>
            <Icon className={style.featureIcon} name="checkmark-outline" />
            {feature}
          </li> )}
      </ul>
      <ul className={style.featuresList}>
        {features.dAdv.map(feature =>
          <li className={style.feature}>
            <Icon className={style.featureIcon} name="close-outline" />
            {feature}
          </li> )}
      </ul>
    </div>
  );

  renderContent = ({heading, description, photos, features}) => (
    <div className={style.product}>
      <div className={style.info}>
        <h1 className={style.heading}>{heading}</h1>
        <article className={style.description}>
          <div className={style.text}>
            {description}
          </div>
        </article>
        <Gallery photos={photos} />
      </div>
      {this.renderFeatures(features)}
    </div>
  );

  render() {
    return (
      <div className={style.container}>
        {this.chooseContent(this.props.product)}
      </div>
    );
  }
}
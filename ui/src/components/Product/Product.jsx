import {h, Component} from 'preact';
import {Link, route} from 'preact-router';

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

  renderContent = ({heading, description, photos, methods}) => (
    <div className={style.product}>
      <div className={style.info}>
        <h1 className={style.heading}>{heading}</h1>
        <article className={style.description}>
          <div className={style.text}>
            {description}
          </div>
        </article>
        <Gallery photos={photos} onPopupShow={this.props.onGalleryPopupShow} />
      </div>
      <div className={style.relevantMethods}>
        <h2 className={style.heading2}>Proponowane metody wykonania</h2>
        <nav className={style.relevantMethodsNav}>
          <ul>
            {methods.map(method =>
              <li>
                <Icon className={style.icon} name="link-2-outline" />
                <Link activeClassName={null} href={`/metody/${method.toLowerCase()}`}>{method}</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
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
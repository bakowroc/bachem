import {h, Component} from 'preact';
import {Link, route} from 'preact-router';


import {Gallery} from "../Gallery/Gallery";
import {PRODUCTS_ITEMS} from "../Header/ProductNavList/ProductNavList";
import {Icon} from "../Icon/Icon";
import {productContent} from "./ProductContent";

import * as globalStyle from '../../styles/global.scss';
import * as style from './style.scss';

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
        <h1 className={globalStyle.pageHeading}>{heading}</h1>
        <article className={style.description}>
          <div className={style.text}>
            {description}
          </div>
        </article>
        <Gallery photos={photos} onPopupShow={this.props.onGalleryPopupShow} />
      </div>
      <div className={style.relevantMethods}>
        <h2 className={style.heading}>Proponowane metody wykonania</h2>
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
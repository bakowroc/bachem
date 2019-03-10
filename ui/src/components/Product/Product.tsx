import * as React from 'react';
import {Link} from 'react-router-dom';
import {history} from '../../history';


import {Gallery} from "../Gallery/Gallery";
import {PRODUCTS_ITEMS} from "../Header/ProductNavList/ProductNavList";
import {Icon} from "../Icon/Icon";
import {productContent} from "./ProductContent";

import * as globalStyle from '../../styles/global.scss';
import * as style from './style.scss';

const VALID_PRODUCTS = PRODUCTS_ITEMS.map(item => item.href);

const Product = ({match }) => {
  const chooseContent = () => {
    const product = match.params.product;
    if (VALID_PRODUCTS.indexOf(product) > -1) {
     try {
       const content = productContent[product];
       return renderContent(content)
     } catch(err) {
        return null
     }
    } else {
      history.push('/');
      return null
    }
  };

  const renderContent = ({heading, description, photos, methods}) => (
    <div className={style.product}>
      <div className={style.info}>
        <h1 className={globalStyle.pageHeading}>{heading}</h1>
        <article className={style.description}>
          <div className={style.text}>
            {description}
          </div>
        </article>
        <Gallery photos={photos}  />
      </div>
      <div className={style.relevantMethods}>
        <h2 className={style.heading}>Proponowane metody wykonania</h2>
        <nav className={style.relevantMethodsNav}>
          <ul>
            {methods.map((method, key)=>
              <li key={key}>
                <Icon className={style.icon} name="link-2-outline" />
                <Link to={`/metody/${method.toLowerCase()}`}>{method}</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );

  return (
    <div className={style.container}>
      {chooseContent()}
    </div>
  );
};

export {Product};
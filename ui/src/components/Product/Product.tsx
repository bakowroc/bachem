import * as React from 'react';
import { history } from '../../lib/history';

import { client } from '../../lib/ApolloClient';
import { Gallery } from '../Gallery/Gallery';
import { Icon } from '../Icon/Icon';
import { GET_PRODUCT_QUERY } from './query';

import { Link } from 'react-router-dom';
import { IPhoto } from '../../context/GalleryProvider';
import * as globalStyle from '../../styles/global.scss';
import { IMethod } from '../Methods/Methods';
import * as style from './style.scss';

export interface IProduct {
  description: string;
  key: string;
  methods: IMethod[];
  name: string;
  photos: IPhoto[];
}

const Product = ({ match }) => {
  const [product, setProduct] = React.useState<IProduct>({
    description: '',
    key: '',
    methods: [] as IMethod[],
    name: '',
    photos: [] as IPhoto[]
  });

  const getProduct = async () => {
    try {
      const result = await client.query({
        query: GET_PRODUCT_QUERY(match.params.product)
      });

      setProduct(result.data.products[0]);
    } catch (e) {
      history.push('/');
    }
  };

  React.useEffect(() => {
    getProduct();
  });

  const renderContent = () => (
    <div className={style.product}>
      <div className={style.info}>
        <h1 className={globalStyle.pageHeading}>{product.name}</h1>
        <article className={style.description}>
          <div className={style.text}>{product.description}</div>
        </article>
        <Gallery photos={product.photos} />
      </div>
      <div className={style.relevantMethods}>
        <h2 className={style.heading}>Proponowane metody wykonania</h2>
        <nav className={style.relevantMethodsNav}>
          <ul>
            {product.methods.map((method, key) => (
              <li key={key}>
                <Icon className={style.icon} name='link-2-outline' />
                <Link to={`/metody/${method.key}`}>{method.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );

  return <div className={style.container}>{renderContent()}</div>;
};

export { Product };

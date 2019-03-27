import * as React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '../../Icon/Icon';
import { Paper } from '../../Paper/Paper';

import { appContext } from '../../../context/AppProvider';
import { client } from '../../../lib/ApolloClient';
import { history } from '../../../lib/history';
import { IProduct } from '../../Product/Product';
import * as headerStyle from '../style.scss';
import { GET_PRODUCTS_QUERY } from './query';
import * as style from './style.scss';

const ProductNavList = () => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const app = React.useContext(appContext);

  const getProducts = async () => {
    try {
      const result = await client.query({
        query: GET_PRODUCTS_QUERY
      });

      setProducts(result.data.products);
    } catch (e) {
      return;
    }
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  const renderHeader = () => (
    <header className={style.header}>
      <Icon
        name='arrow-back-outline'
        onClick={() => app.setValue({ isSidebarShown: false })}
        className={`${headerStyle.productNavIcon} ${style.navIcon}`}
      />
    </header>
  );

  return (
    <Paper depth={5} className={`${style.container} ${app.isSidebarShown ? style.show : ''}`}>
      {renderHeader()}
      <nav className={style.productListNav}>
        <ul className={style.productList}>
          {products.map((product, key) => (
            <li key={key}>
              <Link
                to={`/produkty/${product.key}`}
                className={`${history.location.pathname === '/produkty/' + product.key ? style.active : ''}`}
              >
                <Icon name='corner-down-right' className={style.icon} />
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Paper>
  );
};

export { ProductNavList };

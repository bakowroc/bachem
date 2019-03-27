import * as React from 'react';

import { Gallery } from '../Gallery/Gallery';
import { Icon } from '../Icon/Icon';
import { ITabsProps, Tabs } from '../Tabs/Tabs';

import { client } from '../../lib/ApolloClient';
import { history } from '../../lib/history';
import { GET_METHODS } from './query';

import { flattenDeep } from 'lodash';
import { IPhoto } from '../../context/GalleryProvider';
import * as globalStyle from '../../styles/global.scss';
import * as style from './style.scss';

export interface IFeature {
  content: string;
}

export interface IMethod {
  description: string;
  features: IFeature[];
  key: string;
  name: string;
  photos: IPhoto[];
}

const Methods = ({ match }) => {
  const [methods, setMethods] = React.useState<IMethod[]>([]);

  const getMethods = async () => {
    try {
      const result = await client.query({
        query: GET_METHODS
      });

      setMethods(result.data.methods);
    } catch (e) {
      history.push('/metody');
    }
  };

  React.useEffect(() => {
    getMethods();
  }, []);

  const renderFeatures = (features: IFeature[]) => (
    <div className={style.features}>
      <ul className={style.featuresList}>
        {features.map((feature, key) => (
          <li className={style.feature} key={key}>
            <Icon className={style.featureIcon} name='checkmark-outline' />
            {feature.content}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderSingleMethod = (method: IMethod) => (
    <div className={style.method}>
      <article className={style.methodInfo}>
        {method.description.split('|').map((paragraph, key) => (
          <p key={key}>{paragraph}</p>
        ))}
        {renderFeatures(method.features)}
      </article>
      <Gallery className={style.gallery} photos={method.photos} />
    </div>
  );

  const generateTabs = (): ITabsProps => {
    const active = match.params.method;
    const body: any = {};

    methods.forEach(method => {
      body[method.key] = {
        content: renderSingleMethod(method),
        name: method.name
      };
    });

    return { active, body };
  };

  return (
    <div className={style.container}>
      <section className={style.methods}>
        <header className={style.header}>
          <h1 className={globalStyle.pageHeading}>Metody wykonania</h1>
        </header>
        <Tabs {...generateTabs()} />
      </section>
    </div>
  );
};

export { Methods };

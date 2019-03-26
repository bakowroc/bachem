import * as React from 'react';

import { Icon } from '../Icon/Icon';
import { Paper } from '../Paper/Paper';

import { galleryContext } from '../../context/GalleryProvider';
import * as style from './style.scss';

const GalleryPopup = () => {
  const gallery = React.useContext(galleryContext);

  const navigate = direction => {
    let key = gallery.active.key;
    switch (direction) {
      case 'f':
        ++key;
        break;

      case 'b':
        --key;
        break;
    }

    gallery.setActive({ ...gallery.photos[key], key });
  };

  return (
    <div className={`${style.popup} ${gallery.isPopupShown ? style.show : ''}`}>
      <div className={style.content}>
        {gallery.active.key > 0 && (
          <Icon className={`${style.arrow} ${style.back}`} name='arrow-back-outline' onClick={() => navigate('b')} />
        )}
        <Paper depth={3} round={2} className={style.img}>
          <img src={gallery.active.src} />
        </Paper>
        {gallery.active.key < gallery.photos.length - 1 && (
          <Icon
            className={`${style.arrow} ${style.forward}`}
            name='arrow-forward-outline'
            onClick={() => navigate('f')}
          />
        )}
      </div>
      <div className={style.blockLayer} onClick={gallery.togglePopup} />
    </div>
  );
};

export { GalleryPopup };

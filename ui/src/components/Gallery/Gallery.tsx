import * as React from 'react';
import { Paper } from '../Paper/Paper';

import { galleryContext, IPhoto } from '../../context/GalleryProvider';
import { GalleryPopup } from './GalleryPopup';

import * as style from './style.scss';

interface IGalleryProps {
  className?: string;
  photos: IPhoto[];
}

const Gallery = ({ className = '', photos }: IGalleryProps) => {
  const gallery = React.useContext(galleryContext);

  React.useEffect(() => {
    gallery.setPhotos(photos);
  });

  const onPreview = photo => {
    gallery.setActive(photo);
    gallery.togglePopup();
  };

  return (
    <section className={style.gallery}>
      <GalleryPopup />
      <div className={`${style.photos} ${className}`}>
        {gallery.photos.map((photo, key) => (
          <Paper key={key} depth={1} round={4} className={style.photo}>
            <img onClick={() => onPreview({ ...photo, key })} src={photo.imgsrc} />
          </Paper>
        ))}
      </div>
    </section>
  );
};

export { Gallery };

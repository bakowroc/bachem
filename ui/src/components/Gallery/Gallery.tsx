import * as React from 'react';
import {Paper} from "../Paper/Paper";

import * as style from './style.scss';
import {GalleryPopup} from "./GalleryPopup";
import {galleryContext, Photo} from "../../context/GalleryProvider";
import {useEffect} from "react";

interface GalleryProps {
  className?: string;
  photos: Array<Photo>
}

const Gallery = ({className = '', photos}: GalleryProps) => {
  const gallery = React.useContext(galleryContext);

  useEffect(() => {
    gallery.setPhotos(photos);
  });

  const onPreview = (photo) => {
    gallery.setActive(photo);
    gallery.togglePopup();
  };

  return (
    <section className={style.gallery}>
      <GalleryPopup />
      <div className={`${style.photos} ${className}`}>
        {gallery.photos.map((photo, key) => (
          <Paper key={key} depth={1} round={4} className={style.photo}>
            <img onClick={() => onPreview({...photo, key})} src={photo.src} />
          </Paper>)
        )}
      </div>
    </section>
  );
};

export {Gallery};

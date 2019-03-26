import * as React from 'react';

export interface Photo {
  src: string;
  key: number;
}

interface GalleryValue {
  active: Photo;
  isPopupShown: boolean;
  photos: Photo[];
  setActive: (photo: Photo) => void;
  setPhotos: (photos: Photo[]) => void;
  togglePopup: () => void;
}

const defaultValue = {
  active: {
    key: 0,
    src: ''
  },
  isPopupShown: false,
  photos: [],
  setActive: () => null,
  setPhotos: () => null,
  togglePopup: () => null
};

export const galleryContext = React.createContext<GalleryValue>(defaultValue);

export class GalleryProvider extends React.Component<{}, GalleryValue> {
  public state = {
    ...defaultValue,
    setActive: active => this.setState({ active }),
    setPhotos: photos => this.setState({ photos }),
    togglePopup: () => this.setState(state => ({ isPopupShown: !state.isPopupShown }))
  };

  public render() {
    return <galleryContext.Provider value={this.state}>{this.props.children}</galleryContext.Provider>;
  }
}

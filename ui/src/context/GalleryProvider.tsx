import * as React from 'react';

export interface Photo {
  src: string;
  key: number;
}

interface GalleryValue {
  active: Photo,
  photos: Array<Photo>;
  isPopupShown: boolean;
  togglePopup: () => void;
  setPhotos: (photos: Array<Photo>) => void;
  setActive: (photo: Photo) => void;
}

const defaultValue = {
  active: {
    src: '',
    key: 0
  },
  photos: [],
  isPopupShown: false,
  togglePopup: () => null,
  setPhotos: () => null,
  setActive: () => null,
};

export const galleryContext = React.createContext<GalleryValue>(defaultValue);

export class GalleryProvider extends React.Component<{}, GalleryValue> {
  state = {
    ...defaultValue,
    togglePopup: () => this.setState(state => ({isPopupShown: !state.isPopupShown})),
    setPhotos: photos => this.setState({photos}),
    setActive: active => this.setState({active})
  };

  render() {
    return (
      <galleryContext.Provider value={this.state}>{this.props.children}</galleryContext.Provider>
    )
  }
}

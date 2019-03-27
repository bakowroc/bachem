import * as React from 'react';

export interface IPhoto {
  imgsrc: string;
  key: number;
  name: string;
}

interface IGalleryValue {
  active: IPhoto;
  isPopupShown: boolean;
  photos: IPhoto[];
  setActive: (photo: IPhoto) => void;
  setPhotos: (photos: IPhoto[]) => void;
  togglePopup: () => void;
}

const defaultValue = {
  active: {
    imgsrc: '',
    key: 0,
    name: ''
  },
  isPopupShown: false,
  photos: [],
  setActive: () => null,
  setPhotos: () => null,
  togglePopup: () => null
};

export const galleryContext = React.createContext<IGalleryValue>(defaultValue);

export class GalleryProvider extends React.Component<{}, IGalleryValue> {
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
